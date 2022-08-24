import React from "react";

function Heading({ text = "" }) {
  return <div
  className="bg-fixed bg-cover overflow-auto w-full h-64 md:h-96 flex justify-center items-center font-bold text-2xl"
  style={{
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLP3XAiNVAU_XLKEDwBhGAv-DuYxfDbntqQ&usqp=CAU')",
  }}
>
  <h1 className="text-[#131022]">{text}</h1></div>;
}

export default Heading;
