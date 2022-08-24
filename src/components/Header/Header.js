import React from "react";
import { VscLocation } from "react-icons/vsc";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Container from "../Container";

function Header() {
  return (
    <header className="hidden md:block border-b border-White">
      <Container>
        {" "}
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center border-r border-White p-3 cursor-pointer">
              <VscLocation />
              <span className="font-light ml-2 text-xs	">Location</span>
            </div>
            <div className="flex items-center border-r border-White p-3 cursor-pointer">
              <BsEnvelope />
              <span className="font-light ml-2 text-xs		">
                ecsinfo@ecsimage.com
              </span>
            </div>
          </div>

          <div>
            <div className="p-3 border-x border-White cursor-pointer">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
