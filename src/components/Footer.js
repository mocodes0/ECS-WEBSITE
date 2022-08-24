import React from "react";
import { BiBuildings } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";

import { RiWechatLine } from "react-icons/ri";
import { FaPrayingHands } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { BsPiggyBankFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";

import Container from "./Container";

const iconStyle = {
  width: "30px",
  height: "30px",
};

function Footer() {
  return (
    <div>
      <div className="bg-[#ffffff1a] py-8">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="hidden lg:block"></div>
            <div>
              <h2 className="font-bold">CONTACT INFO</h2>
              <div className="mx-2 my-4 sm:mx-0">
                <div className="flex my-1 items-center">
                  <BiBuildings />
                  <span className="ml-2 text-[#FFFFFFb3]">
                    Enterprise Content Solutions
                  </span>
                </div>
                <div className="flex my-1">
                  <GoLocation className=" mt-1" />
                  <span className="ml-2 text-[#FFFFFFb3]">
                    Toronto, ON, Canada
                  </span>
                </div>
                <div className="flex my-1 items-center">
                  <BsEnvelope />
                  <span className="ml-2 cursor-pointer text-[#FFFFFFb3] duration-300 hover:text-[#6366F1]">
                    ecsinfo@ecsimage.com
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block"></div>
            <div>
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
        </Container>
      </div>
      <div className="bg-[#131022] py-3">
        <Container>
          © 2022 · ECS-Image All Rights Reserved, Developed by{" "}
          <span className="text-[#6366F1] font-bold italic">
            <a target={"_blank"} rel="noreferrer" href="http://www.mayonity.com/">Mayonity</a>
          </span>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
