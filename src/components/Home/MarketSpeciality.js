import React from "react";
import { RiWechatLine } from "react-icons/ri";
import { FaPrayingHands } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { BsPiggyBankFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiFirstAid } from "react-icons/bi";
import Container from "../Container";

function MarketSpeciality() {
  return (
    <Container>
      <div className="my-3">
        <h1 className="text-center text-xl font-bold">Market Speciality</h1>
        <div className="flex items-start flex-wrap justify-center">
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <RiWechatLine
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Social</h2>
          </div>
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <FaPrayingHands
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Insurance</h2>
          </div>
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <ImAirplane
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Social</h2>
          </div>
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <BsPiggyBankFill
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Finance</h2>
          </div>
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <AiOutlineShoppingCart
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Retail & Merchandising</h2>
          </div>
          <div className="flex group flex-col justify-center w-32 text-center items-center mx-3 md:mx-4 my-2">
            <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-3 my-2 border-White">
              <BiFirstAid
                style={{
                  width: "70px",
                  height: "70px",
                }}
                className="group-hover:fill-[#131022] m-3"
              />
            </div>
            <div className="h-px w-10 bg-[#FFF] duration-200 group-hover:w-16 my-1"></div>
            <h2 className="font-semibold text-lg">Health Care</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MarketSpeciality;
