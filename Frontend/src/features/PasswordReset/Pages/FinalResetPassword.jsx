import React, { useState } from "react";
import LogoSvg from "../../../components/LogoSvg";
import { NewPassword } from "../Api/NewPassword";
import { useLocation, useNavigate } from "react-router-dom";

export default function FinalResetPassword() {
  const { state } = useLocation();
  const { email, otp } = state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigator = useNavigate();

  const handleClick = async () => {
    if (password === confirmPassword) {
      NewPassword({ email, otp, password, navigator });
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-80">
      <div className="flex justify-center">
        <LogoSvg />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className=" text-3xl text-DarkGreen font-bold">Password reset</h1>
      </div>
      <div className="flex flex-col"></div>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="px-4 w-full py-2 border-DarkGreen  border-2 border-opacity-10 rounded-md placeholder:text-DarkGreen placeholder:text-opacity-20 focus:ring-0 focus:outline-none "
        placeholder="New Password"
      ></input>
      <input
        type="password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        className="px-4 w-full py-2 border-DarkGreen border-2 border-opacity-10 rounded-md placeholder:text-DarkGreen placeholder:text-opacity-20 focus:ring-0 focus:outline-none "
        placeholder="Confirm Password"
      ></input>

      <button
        className="bg-accentGreen w-full h-10 font-semibold rounded-sm font-poppins text-white"
        onClick={handleClick}
      >
        Reset
      </button>
    </div>
  );
}
