import React from "react";

export default function FormField({
  text = "test",
  placeholder = "test",
  onchange,
  password = false
}) {
  return (
    <div className="flex flex-col  font-poppins  ">
      <h1 className="text-DarkGreen  text-sm">{text}</h1>
      <input
        type={password ? "password" : "" }
        placeholder={placeholder}
        onChange={onchange}
        className="bg-white px-4 py-2 max-w-96 text-DarkGreen min-w-80 rounded-md border-2 border-opacity-10 border-DarkGreen placeholder-DarkGreen placeholder-opacity-35 "
      />
    </div>
  );
}
