import React from "react";

function Heading({ text = "" }) {
  return <div
  className="bg-fixed bg-cover overflow-auto w-full h-64 md:h-96 flex justify-center items-center font-bold text-2xl"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
  }}
>
  <h1 className="text-[#131022]">{text}</h1></div>;
}

export default Heading;
