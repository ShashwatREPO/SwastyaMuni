import axios from "axios";



export const getGemniResponse = async (query) => {
  try {
    const token = localStorage.getItem('token');
    if(token === null) return console.log("token not found");
    const response = await axios.post("http://localhost:3000/protected/gen", {query , password : "sfhseiufgbhjsebfwe849378932y5r9@(#^$!@&#^!$^(!$ribfIUGWEIYRFGIKUJFBYU*IFGWEIYRFGIsfhseiufgbhjsebfwe849378932y5r9@(#^$!@&#^!$^(!$ribfIUGWEIYRFGIKUJFBYU*IFGWEIYRFGI"} , {headers : {"Authorization" : `Bearer ${token}`}});
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
