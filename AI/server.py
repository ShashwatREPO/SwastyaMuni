import os
from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from chromadb import Documents, EmbeddingFunction, Embeddings
import chromadb
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
app = FastAPI()


class GeminiEmbeddingFunction(EmbeddingFunction):
    def __call__(self, input: Documents) -> Embeddings:
        gemini_api_key = os.getenv("GEMINI_API_KEY")
        if not gemini_api_key:
            raise ValueError(
                "Gemini API Key not provided. Please provide GEMINI_API_KEY as an environment variable")
        genai.configure(api_key=gemini_api_key)
        model = "models/embedding-001"
        title = "Custom query"
        return genai.embed_content(model=model, content=input, task_type="retrieval_document", title=title)["embedding"]


def load_chroma_collection(path, name):
    chroma_client = chromadb.PersistentClient(path=path)
    db = chroma_client.get_collection(
        name=name, embedding_function=GeminiEmbeddingFunction())
    return db


system_prompt = '''<s>[INST] <<SYS>>\
You are Myatri, an AI specialized in Ayurvedic health advice and an Ayurvedic practitioner. Introduce your self as a personal Ayurvedic Assistant.\
Based on your illness or symptoms or the prompt given by the user, you will provide a ayurvedic solution to the problem , \
as well as the dosage, composition of the medication, instructions on how to take it, precautions, and additional tips. Here's the format of my response:\
- How the medication will help: [Explanation of how the medication will aid in healing]\
- Herbs: [List of herbs/ingridents included in the medication]\
- How to make the medicine at home: [Instructions on how to prepare the medicine with precise measurements]\
- Precautions: [Any precautions to be aware of while taking the medication]\
- Tips: [Additional tips for managing the illness or enhancing the effectiveness of the medication]\
Please note that while I strive to provide a human-like interaction, I won't use human gestures such as winks, smiling, nods, adjusts glasses, etc.\
<</SYS>>"'''


def generate_answer(db, query):
    relevant_text = get_relevant_passage(query, db, n_results=3)
    prompt = make_rag_prompt(query, relevant_passage="".join(relevant_text))
    answer = generate_response(prompt)
    return answer


def get_relevant_passage(query, db, n_results):
    passage = db.query(query_texts=[query], n_results=n_results)[
        'documents'][0]
    return passage


def make_rag_prompt(query, relevant_passage):
    escaped = relevant_passage.replace(
        "'", "").replace('"', "").replace("\n", " ")
    prompt = ("""  QUESTION: '{query}'
  PASSAGE: '{relevant_passage}'
  ANSWER:
  """).format(query=query, relevant_passage=escaped)
    return prompt


def generate_response(prompt):
    gemini_api_key = os.getenv("GEMINI_API_KEY")
    if not gemini_api_key:
        raise ValueError(
            "Gemini API Key not provided. Please provide GEMINI_API_KEY as an environment variable")
    genai.configure(api_key=gemini_api_key)
    model = genai.GenerativeModel(
        model_name="models/gemini-1.5-pro-latest", system_instruction=system_prompt)
    answer = model.generate_content(prompt)
    return answer.text


db = load_chroma_collection(path="./RAG/contents", name="rag_experiment")


class QueryModel(BaseModel):
    query: str


@app.post("/generate")
async def get_ayurveda_solution(query: QueryModel):
    try:
        answer = generate_answer(db, query.query)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
