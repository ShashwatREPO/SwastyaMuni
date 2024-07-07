import React from "react";

export default function Linkbtn({ text="lorem ipsum", link = "is mipsum", onclick }) {
  return (
    <p className="font-poppins text-sm flex gap-1">
      {text}
      <spam className="text-accentGreen hover:cursor-pointer " onClick={onclick}>{link}</spam>
    </p>
  );
}