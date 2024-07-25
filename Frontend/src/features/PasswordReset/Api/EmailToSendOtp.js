import axios from "axios";

export const EmailToSendOtp = async ({ email }) => {
  try {
    const respond = await axios.post(
      "http://localhost:3000/auth/forgotPassword",
      { email }
    );

    console.log(respond);

    if (respond.status === 200) {
      console.log("true");
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
