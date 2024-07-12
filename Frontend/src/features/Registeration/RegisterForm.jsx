import React, { useState } from "react";
import FormField from "../../components/FormField";
import LogoSvg from "../../components/LogoSvg";
import DividerOr from "../../components/DividerOr";
import SignUpWithGooglebtn from "../../components/SignUpWithGooglebtn";
import Linkbtn from "../../components/Linkbtn";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "./Api/RegistrationApi";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const HandleSubmit = () => {
    console.log(password);
    RegisterUser({fullName, email, password, navigation});
  };

  return (
    <div className="flex flex-col w-full items-center gap-6">
      <LogoSvg />
      <div className="flex flex-col gap-4">
        <FormField
          text="Full name"
          placeholder="Full Name"
          onchange={(e) => {
            setFullName(e.target.value);
          }}
        />
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

      <div className="flex flex-col gap-5 ">
        <button
          className="bg-accentGreen text-center py-2 font-poppins text-white w-80 rounded-sm"
          onClick={HandleSubmit}
        >
          Register
        </button>

        <DividerOr />

        <SignUpWithGooglebtn />
      </div>
      <Linkbtn
        text="Already have an account?"
        link="Login"
        onclick={() => navigation("login")}
      />
    </div>
  );
}
