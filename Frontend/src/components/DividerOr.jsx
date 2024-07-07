import React from "react";

export default function DividerOr() {
  return (
    <div className="w-full items-center flex flex-col  opacity-20 relative">
      <div className="w-full h-[2px] bg-DarkGreen" />
      <h1 className="text-DarkGreen absolute font-poppins m-auto text-base bg-backgroundGreen px-1 py-1 -top-4 left-[50% - 4px]">
        or
      </h1>
    </div>
  );
}
