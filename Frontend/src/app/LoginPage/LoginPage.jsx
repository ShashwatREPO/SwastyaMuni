import React from "react";
import LoginForm from "../../features/Login/LoginForm";
import LeafSvg from "../../components/LeafSvg";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-backgroundGreen relative ">
      <LeafSvg />
      <div className="relative z-50">
        <LoginForm />
      </div>
    </div>
  );
}
