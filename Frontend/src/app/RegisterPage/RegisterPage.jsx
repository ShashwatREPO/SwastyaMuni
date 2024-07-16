import React, { useEffect } from "react";
import LeafSvg from "../../components/LeafSvg";
import LogoSvg from "../../components/LogoSvg";
import FormField from "../../components/FormField";
import RegisterForm from "../../features/Registeration/RegisterForm";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const {isAuth} = useAuth();
  const navigation = useNavigate();

  useEffect(()=>{
   if(isAuth){
    navigation("/home");
   }

  })

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-backgroundGreen relative ">
      <LeafSvg />
      <div className="relative z-50">
      <RegisterForm />

      </div>
      
    
     
    </div>
  );
}
