import React from "react";
import Markdown from "react-markdown";

export default function GemniResponseChat({ markdown }) {
  return <Markdown className={"markdown font-poppins leading-5"}>{markdown}</Markdown>;
}
