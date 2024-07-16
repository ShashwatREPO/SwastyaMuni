import { LoaderCircle, SendHorizonal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { getGemniResponse } from "../Api/chatApi";

export default function ChatField({ inputChat , setSpinnerStatus , spinnerStatus }) {
  const inputRef = useRef();
  const [currentWidth, setCurrentWidth] = useState();

  const updateWidth = () => {
    if (inputRef.current) {
      setCurrentWidth(inputRef.current.offsetWidth);
      console.log(currentWidth);
    } else {
      console.log("inputRef.current is not defined");
    }
  };

  const handleInput = async () => {
    if (inputRef.current) {
      const message = inputRef.current.innerText;
      if (message !== "") {
        inputChat((prevState) => [...prevState, message]);
        inputRef.current.innerText = "";
        setSpinnerStatus(true);
        try {
          const result = await getGemniResponse(message);
          inputChat((prevState) => [...prevState, result]);
        } catch (e) {
          console.log(e);
        } finally {
          setSpinnerStatus(false);
        }
      }
    }
  };

  const handleKeyDown = (e)=>{
    if(e.key == "Enter"){
      e.preventDefault();
      handleInput();
    }
  }

  useEffect(() => {
    updateWidth();
  }, []);

  return (
    <div className="flex  px-4 max-w-[700px] w-full bottom-0 left-1/2 gap-2 items-end min-w-96 transform -translate-x-1/2 -translate-y-5 absolute ">
      <div className="bg-white  py-2 px-4 gap-2 rounded-3xl justify-between border-2 border-DarkGreen border-opacity-5 font-poppins flex flex-grow items-end ">
        <div
          ref={inputRef}
          className={` max-h-36 overflow-y-auto w-full border-transparent  focus:ring-0 focus:outline-0 empty:text-gray-400 empty:before:content-['Ask_Query']`}
          style={{ maxWidth: currentWidth }}
          contentEditable
          onKeyDown={handleKeyDown}
        ></div>
        {spinnerStatus ? (
          <LoaderCircle className="size-6 animate-spin" />
        ) : (
          <SendHorizonal className="size-6 " onClick={handleInput} />
        )}
      </div>

      <div className="bg-accentGreen rounded-full flex-shrink-0 size-8 lg:hidden md:hidden transform -translate-y-2 "></div>
    </div>
  );
}
