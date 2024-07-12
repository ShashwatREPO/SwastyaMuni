import axios from "axios";

export const login = async ( {email, password, navigation} ) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    if (res) {
      localStorage.getItem("token", res.data.token);
    }
    console.log("login confirmed");
    navigation("/home");
  } catch (e) {}
};
