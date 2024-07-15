import React, { useState } from "react";
import LogoSvg from "../../components/LogoSvg";
import { useNavigate } from "react-router-dom";

export default function PasswordReset() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center font-poppins mb-20">
      <LogoSvg />
      <div className="flex flex-col gap-1">
        <h1 className=" text-3xl text-DarkGreen">Reset Your Password</h1>
        <h4 className="text-base opacity-75">
          Enter the email you used during login
        </h4>
      </div>

      <input
        className="px-4 w-full py-2 border-DarkGreen border-2 border-opacity-10 rounded-md placeholder:text-DarkGreen placeholder:text-opacity-20 focus:ring-0 focus:outline-none "
        placeholder="Email Address"
      ></input>

      <div className="flex w-full justify-between">
        <div
          className="bg-white text-accentGreen border-accentGreen border-[1px] rounded-sm px-4 py-1 hover:cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Back to sign in
        </div>

        <div
          className="px-4 py-1 bg-accentGreen rounded-sm text-white"
          onClick={() => {
            navigate("verify-otp");
          }}
        >
          Send OTP
        </div>
      </div>
    </div>
  );
}
