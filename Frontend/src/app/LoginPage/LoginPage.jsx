import React, { useEffect } from "react";
import LoginForm from "../../features/Login/LoginForm";
import LeafSvg from "../../components/LeafSvg";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuth } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigation("/home");
    }
  }, [isAuth, navigation]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-backgroundGreen relative ">
      <LeafSvg />
      <div className="relative z-50">
        <LoginForm />
      </div>
    </div>
  );
}
