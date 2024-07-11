import React from "react";

export default function UserChatBubble({
  text = "setting width of a div which in inside another div and i want to set width to relative of  the parent div half"
}) {
  return (
    <div className="bg-white border-2 relative break-words font-poppins  max-w-[60%] py-2 px-4 ml-auto  border-DarkGreen border-opacity-5 rounded-3xl">
      {text}
    </div>
  );
}
