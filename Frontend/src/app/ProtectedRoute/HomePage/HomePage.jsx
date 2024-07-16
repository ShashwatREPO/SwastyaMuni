import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import LeafSvg from "../../../components/LeafSvg";
import ChatField from "../../../features/ChatSpace/components/ChatField";
import ChatSpace from "../../../features/ChatSpace/ChatSpace";
import axios from "axios";

export default function HomePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUserInfo = async () => {
    try {
      const token = await localStorage.getItem("token");
      if (token === null) return console.log("token not found");
      const response = await axios.post(
        "http://localhost:3000/protected/userInfo",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      setFullName(response.data.Name);
      setEmail(response.data.Email);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col   bg-backgroundGreen relative">
      <LeafSvg />
      <NavBar fullName={fullName} email={email} />
      <ChatSpace />
    </div>
  );
}
