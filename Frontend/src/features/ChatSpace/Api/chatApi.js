import axios from "axios";



export const getGemniResponse = async (query) => {
  try {
    const response = await axios.post("http://localhost:3000/gen/generate", {query});
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
