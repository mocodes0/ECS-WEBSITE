import React from "react";

function SubHeading({ text = "" }) {
  return (
    <div>
      <h1 className="font-bold text-2xl text-[#6366F1]">{text}</h1>
    </div>
  );
}

export default SubHeading;
