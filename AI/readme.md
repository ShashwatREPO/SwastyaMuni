# FastAPI Server

This repository contains a FastAPI server for handling Ayurvedic health advice queries.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   cd AI
   ```

2. **Create and activate a virtual environment (optional but recommended):**
   ```bash
   conda create --name kerbal python=3.10   # Create a new virtual environment (optional)
   conda activate kerbal                   # Activate the virtual environment
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create a `.env` file and add your API keys:**
   ```plaintext
   GEMINI_API_KEY=your_gemini_api_key
   API_PASSWORD=your_api_password
   ```

## Running the Server

To start the FastAPI server, use the following command:

```bash
uvicorn server:app --reload
```

This will start the server locally and automatically reload it when changes are made.

## Routes

### `/`

- **Description**: Root endpoint providing a welcome message and basic description of the API.
- **Method**: GET
- **Response**: JSON object with a welcome message and description.

Example Response:
```json
{
    "message": "Welcome to SwastyaMuni",
    "description": "This is the AI Backend for Ayurvedic health advice. Use the /generate endpoint to get personalized Ayurvedic solutions."
}
```

### `/generate`

- **Description**: Endpoint for generating Ayurvedic health advice based on a query.
- **Method**: POST
- **Body**: JSON object with a `query` field and a `password` field.
  ```json
  {
      "query": "I have headache fever and stomach pain. What should I do?",
      "password": "your_api_password"
  }
  ```
- **Response**: JSON object containing the generated advice.

Example Request:
```bash
curl -X POST "http://127.0.0.1:8000/generate" -H "Content-Type: application/json" -d "{\"query\":\"I have loose motion and stomach pain. What should I do?\", \"password\": \"your_api_password\"}"
```

Example Response:
```json
{
    "answer": "Ayurvedic advice content here..."
}
```

## Aspects and Sends

- **Aspects**: Refers to the different aspects of Ayurvedic health advice provided, including medication details, herbal composition, preparation instructions, precautions, and additional tips.
  
- **Sends**: Indicates the actionable information or advice that the server provides based on the user's query.
