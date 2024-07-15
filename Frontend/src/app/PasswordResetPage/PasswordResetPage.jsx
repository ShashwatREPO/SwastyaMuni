import React from "react";
import PasswordReset from "../../features/PasswordReset/PasswordReset";
import LeafSvg from "../../components/LeafSvg";
import { Outlet } from "react-router-dom";

export default function PasswordResetPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-backgroundGreen relative ">
      <LeafSvg />
      <div className="relative z-50">
        <Outlet />
      </div>
    </div>
  );
}
