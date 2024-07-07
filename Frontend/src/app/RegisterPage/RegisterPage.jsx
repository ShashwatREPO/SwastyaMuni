import React from "react";
import LeafSvg from "../../components/LeafSvg";
import LogoSvg from "../../components/LogoSvg";
import FormField from "../../components/FormField";
import RegisterForm from "../../features/Registeration/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-backgroundGreen relative ">
      <LeafSvg />
      <div className="relative z-50">
      <RegisterForm />

      </div>
      
    
     
    </div>
  );
}
