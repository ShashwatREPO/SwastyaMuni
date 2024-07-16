import axios from "axios";

export const getGemniResponse = async (query) => {
  try {
    const token = localStorage.getItem("token");
    if (token === null) return console.log("token not found");
    const response = await axios.post(
      "http://localhost:3000/protected/gen",
      { query },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data.result;
  } catch (e) {
    console.log(e);
  }
};
