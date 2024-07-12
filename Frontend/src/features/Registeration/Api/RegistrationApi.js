import axios from "axios";

export const RegisterUser = async ({
  fullName,
  email,
  password,
  navigation,
}) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/signup", {
      fullName,
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    console.log("registeration Done");
    navigation("/home");
  } catch (e) {
    console.log(e);
  }
};
