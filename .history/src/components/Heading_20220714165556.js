import React from "react";

function Heading({ text = "" }) {
  return <div
  className="bg-fixed bg-cover overflow-auto w-full h-64 md:h-96 flex justify-center items-center font-bold text-2xl"
  style={{
    backgroundImage:
      "url('https://thumbs.dreamstime.com/t/vector-banner-design-circuit-board-illustration-abstract-modern-futuristic-engineering-technology-background-futuristic-digital-139044319.jpg')",
  }}
>
  <h1 className="text-[#131022] text-white	uppercase">{text}</h1></div>;
}

export default Heading;
