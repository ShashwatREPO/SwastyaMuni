import React, { useRef, useState } from "react";
import LogoSvg from "../../../components/LogoSvg";
import { LogOut } from "lucide-react";

export default function NavBar() {
  const [ShowDetails, SetShowDetails] = useState(false);
  const infoRef = useRef(null);

  return (
    <div className="flex justify-between py-2 relative z-50 px-4 items-center">
      <LogoSvg small={true} />
      <div className="hidden lg:flex md:flex  items-center gap-3 font-poppins">
        <div className="size-8 bg-gray-400 rounded-full" />
        <div className="flex flex-col ">
          <p className="leading-[8px]">
            <span className="text-base">John Doe</span> <br />
            <span className="text-[12px] text-gray-400 ">
              Johndoe@gmail.com
            </span>
          </p>
        </div>
        <LogOut className="size-5" />
      </div>

      <div className="relative lg:hidden md:hidden">
        <div
          className="n bg-gray-400 rounded-full size-8"
          onClick={() => SetShowDetails(!ShowDetails)}
        ></div>

        {ShowDetails ? (
          <div
            ref={infoRef}
            className="bg-white border-2  absolute right-1/2  border-DarkGreen border-opacity-10 rounded-md py-2 px-3 flex flex-col"
          >
            <div className="flex flex-col font-poppins gap-2">
              <div className="flex flex-col  ">
                <span className="text-base ">John Doe</span>
                <span className="text-sm  text-gray-400 ">
                  Johndoe@gmail.com
                </span>
              </div>

              <LogOut className="size-4" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
