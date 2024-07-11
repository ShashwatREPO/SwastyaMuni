import { Leaf } from "lucide-react";
import React, { useState } from "react";

export default function ActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="size-8 bg-accentGreen">
        <Leaf className="text-white" />
      </div>
      {isOpen && <div className="flex flex-col"></div>}
    </div>
  );
}
