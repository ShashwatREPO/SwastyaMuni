import React, { useState } from "react";
import FormField from "../../components/FormField";
import LogoSvg from "../../components/LogoSvg";
import DividerOr from "../../components/DividerOr";
import SignUpWithGooglebtn from "../../components/SignUpWithGooglebtn";
import Linkbtn from "../../components/Linkbtn";
import { useNavigate } from "react-router-dom";
import { login } from "./Api/LoginApi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handelClick = () => {
    login({ email, password, navigation });
  };

  return (
    <div className="flex flex-col w-full items-center gap-5">
      <LogoSvg />
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-4">
          <FormField
            text="Email address"
            placeholder="Email Address"
            onchange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormField
            text="Password"
            placeholder="Password"
            password={true}
            onchange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex w-full font-poppins text-sm justify-end">
          <h1
            className="hover:cursor-pointer opacity-55"
            onClick={() => {
              navigation("/reset-password/");
            }}
          >
            Forget Password?
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        <button
          className="bg-accentGreen text-center py-2 font-poppins text-white w-80 rounded-sm"
          onClick={handelClick}
        >
          Login
        </button>

        <DividerOr />

        <SignUpWithGooglebtn />
      </div>
      <Linkbtn
        text="Don't have an account?"
        link="Register"
        onclick={() => navigation("/")}
      />
    </div>
  );
}
