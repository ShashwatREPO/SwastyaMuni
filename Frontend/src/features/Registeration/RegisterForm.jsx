import React from "react";
import FormField from "../../components/FormField";
import LogoSvg from "../../components/LogoSvg";
import DividerOr from "../../components/DividerOr";
import SignUpWithGooglebtn from "../../components/SignUpWithGooglebtn";
import Linkbtn from "../../components/Linkbtn";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

  const navigation = useNavigate();
  return (
    <form className="flex flex-col w-full items-center gap-6">
      <LogoSvg />
      <div className="flex flex-col gap-4">
        <FormField text="Full name" placeholder="Full Name" />
        <FormField text="Email address" placeholder="Email Address" />
        <FormField text="Password" placeholder="Password" password={true} />
      </div>

      <div className="flex flex-col gap-5 ">
        <button className="bg-accentGreen text-center py-2 font-poppins text-white w-80 rounded-sm">
          Register
        </button>

        <DividerOr />

        <SignUpWithGooglebtn />
     
      </div>
      <Linkbtn text="Already have an account?" link="Login" onclick={()=>navigation("login")} />
    </form>
  );
}
