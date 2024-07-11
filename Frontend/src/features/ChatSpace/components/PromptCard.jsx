import React from "react";
import { getGemniResponse } from "../Api/chatApi";

export default function PromptCard({
  children,
  text = "test",
  prompt,
  inputChat,
  setSpinnerStatus
}) {
  const handelClick = async() => {
    if (prompt != "") {
      inputChat((prevState) => [...prevState, prompt]);
      setSpinnerStatus(true);
      try{
        const response = await getGemniResponse(prompt);
        inputChat((prevState)=>[...prevState, response]);

      }catch(e){
        console.log(e);
      }finally{
        setSpinnerStatus(false)
      }
    }
  };
  return (
    <div
      className="bg-white hover:opacity-60 hover:cursor-pointer active:opacity-90 flex flex-col font-poppins p-4 border-2 border-DarkGreen gap-2 text-[13px] md:text-sm border-opacity-10 max-w-40  md:max-w-44 rounded-xl"
      onClick={handelClick}
    >
      {children}
      {text}
    </div>
  );
}
