import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoSvg from "../../../components/LogoSvg";
import { OtpBeforePass } from "../Api/OtpBeforePass";

export default function VerifyOTPPage({ length = 4 }) {
  const { state } = useLocation();
  const { email } = state;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const navigator = useNavigate();
  const [FinalOtp, setFinal] = useState("");
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const CombinedOtp = otp.join("");
    if (CombinedOtp.length === length) {
      setFinal(CombinedOtp);
      console.log(FinalOtp);
    }
  }, [otp]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const onSubmitOtp = async () => {
    const bool = await OtpBeforePass({ email, FinalOtp });
    if (bool == true) {
      navigator("/reset-password/new-password", { state: { email: email, otp: FinalOtp } });
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    // inputRef.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      console.log(otp.indexOf(""));
      inputRef.current[otp.indexOf("")].focus();
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-96 items-center font-poppins mb-20 px-4">
      <LogoSvg />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl  font-bold text-DarkGreen">
          Code Verification
        </h1>
        <h2 className="text-base opacity-60 text-wrap">
          Please enter the 4 digit code sent to your email {email}
        </h2>
      </div>

      <div className="flex gap-2 font-poppins">
        {otp.map((value, index) => {
          return (
            <input
              type="text"
              ref={(input) => (inputRef.current[index] = input)}
              className="size-20 border-2 text-3xl border-opacity-10 px-2 border-DarkGreen bg-gray-100 rounded-md text-center"
              value={value}
              key={index}
              placeholder="0"
              onClick={(index) => {
                handleClick(index);
              }}
              onChange={(e) => {
                handleChange(index, e);
              }}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          );
        })}
      </div>

      <div className="flex">
        <h1 className="text-accentGreen hover:cursor-pointer">Resend OTP</h1>
      </div>

      <button
        className="flex-grow bg-accentGreen w-full text-white font-poppins rounded-sm h-10"
        onClick={onSubmitOtp}
      >
        Verify OTP
      </button>
    </div>
  );
}
