import axios from "axios";

export const NewPassword = async ({ email, otp, password, navigator }) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/resetPassword",
      { email, otp, password }
    );

    if (response.status === 200) {
      navigator("/login");
    }
  } catch (e) {
    console.log(e);
  }
};
