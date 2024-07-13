import React, { useEffect } from "react";
import Glogo from "../assets/GoogleLogo.svg";
import { useNavigate } from "react-router-dom";

export default function SignUpWithGooglebtn() {
  const navigation = useNavigate();

  const handleGoogleAuth = async () => {
    location.href = "http://localhost:3000/auth/google";
  };

  useEffect(() => {
    const handelCallback = () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (token) {
        localStorage.setItem("token", token);
        navigation("/home");
      }
    };
    handelCallback();
  }, [navigation]);

  return (
    <div
      className="py-2 flex gap-2  rounded-sm font-poppins justify-center bg-white border-DarkGreen border-2 hover:cursor-pointer border-opacity-10"
      onClick={handleGoogleAuth}
    >
      <img src={Glogo} />
      <h1 className="opacity-60"> Continue With Google</h1>
    </div>
  );
}
