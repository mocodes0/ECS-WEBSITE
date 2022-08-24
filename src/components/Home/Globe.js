import React from "react";
import Container from "../Container";

function Globe() {
  return (
    <Container>
      <div className="flex">
        <div className="shrink hidden md:block">
          <img
            src="https://images.pexels.com/photos/335394/pexels-photo-335394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="global"
          />
        </div>
        <div className="bg-[#ffffff1a] w-full">
          <div className="px-12 py-10 md:px-8 md:py-2 lg:px-12 lg:py-10 text-center">
            <h1 className="text-xl md:text-lg lg:text-xl font-bold">Consumer Targeting with Surgical Precision</h1>
            <h4 className="font-semibold text-lg  md:text-base lg:text-lg mt-4  md:mt-2 lg:mt-4">DigitalDirectTARGETING</h4>
          </div>
          <div className="px-12 py-10 md:px-8 md:py-2 lg:px-12 lg:py-10 bg-[#131022]">
            <p className="my-3 md:my-1 md:text-base">Deliver banner ads directly to selected households</p>
            <p className="my-3 md:my-1 md:text-base">Ensure 99.8% accuracy in IP address to home address match</p>
            <p className="my-3 md:my-1 md:text-base">
              Leverage 800 million IP addresses matched to 200+ million postal
              locations
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Globe;
