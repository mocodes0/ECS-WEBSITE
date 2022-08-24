import React from "react";

import { RiWechatLine } from "react-icons/ri";
import { FaPrayingHands } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { BsPiggyBankFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";

const iconStyle = {
  width: "30px",
  height: "30px",
};

function Details({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 my-5 ">
      <div className="col-span-4 md:pr-8 md:border-r border-[#FFFFFFb3]">
        {children}
      </div>
      <div className="md:ml-8 flex flex-col items-center md:block">
        <h2 className="font-bold">MARKET SPECIALITY</h2>
        <div className="mx-2 my-4 sm:mx-0 grid grid-cols-2 gap-3.5 ">
          <RiWechatLine style={iconStyle} />
          <FaPrayingHands style={iconStyle} />
          <ImAirplane style={iconStyle} />
          <BsPiggyBankFill style={iconStyle} />
          <AiOutlineShoppingCart style={iconStyle} />
          <BiFirstAid style={iconStyle} />
        </div>
      </div>
    </div>
  );
}

export default Details;
