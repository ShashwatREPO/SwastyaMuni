import React, { useEffect, useRef, useState } from "react";
import LogoSvg from "../../../components/LogoSvg";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function NavBar({
  fullName = "John Doe",
  email = "johndoe@gmail.com",
}) {
  const [ShowDetails, SetShowDetails] = useState(false);
  const [initials, setIntials] = useState();
  const navigation = useNavigate();
  const infoRef = useRef(null);
  const {setIsAuth} = useAuth();

  const getInitials = (fullName) => {
    const nameArray = fullName.split(" ");

    const initials =
      nameArray[0].charAt(0) + nameArray[nameArray.length - 1].charAt(0);

    return initials.toUpperCase();
  };

  const handelLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    navigation("/login");
  };

  useEffect(() => {
    setIntials(getInitials(fullName));
  }, [fullName]);

  return (
    <div className="flex justify-between py-2 relative z-50 px-4 items-center">
      <LogoSvg small={true} />
      <div className="hidden lg:flex md:flex  items-center gap-3 font-poppins">
        <div className="size-8 bg-indigo-500 rounded-full flex justify-center items-center text-white">
          {initials}
        </div>
        <div className="flex flex-col ">
          <p className="leading-[8px]">
            <span className="text-base">{fullName}</span> <br />
            <span className="text-[12px] text-gray-400 ">{email}</span>
          </p>
        </div>
        <LogOut className="size-5" onClick={handelLogout} />
      </div>

      <div className="relative lg:hidden md:hidden font-poppins">
        <div
          className=" bg-indigo-500 rounded-full flex justify-center items-center text-white size-8"
          onClick={() => SetShowDetails(!ShowDetails)}
        >{initials}</div>

        {ShowDetails ? (
          <div
            ref={infoRef}
            className="bg-white border-2   absolute right-1/2  border-DarkGreen border-opacity-10 rounded-md py-2 px-3 flex flex-col"
          >
            <div className="flex flex-col  font-poppins gap-2">
              <div className="flex flex-col   ">
                <span className="text-base flex flex-grow">{fullName}</span>
                <span className="text-sm  text-gray-400 ">{email}</span>
              </div>

              <LogOut className="size-4" onClick={handelLogout} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
