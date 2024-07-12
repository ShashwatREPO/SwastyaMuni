import React from "react";
import Glogo from "../assets/GoogleLogo.svg";
import getGoogleUrl from "../utils/getGoogleUrl";

export default function SignUpWithGooglebtn() {
  return (
    <div
      className="py-2 flex gap-2  rounded-sm font-poppins justify-center bg-white border-DarkGreen border-2 hover:cursor-pointer border-opacity-10"
      onClick={(e) => {
        e.preventDefault();
        // getGoogleUrl();
        window.location.href = getGoogleUrl();
      }}
    >
      <img src={Glogo} />
      <h1 className="opacity-60"> Continue With Google</h1>
    </div>
  );
}
