import axios from "axios";

export const OtpBeforePass = async ({ email, FinalOtp }) => {
  try {
    const respond = await axios.post(
      "http://localhost:3000/auth/resetPassword",
      {
        email,
        otp: FinalOtp,
      }
    );

    if (respond.status === 200) {
      console.log("otp valid");
      return true;
    } else {
      console.log("otp invalid");
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
