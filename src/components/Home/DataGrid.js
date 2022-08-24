import React from "react";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineLaptop } from "react-icons/ai";
import Container from "../Container";

const iconStyle = {
  width: "50px",
  height: "50px",
};

function DataGrid() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex group bg-[#ffffff1a] flex-col items-center text-center px-4 py-12">
          <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-5 border-White">
            <FiSettings
              style={iconStyle}
              className="group-hover:stroke-[#131022]"
            />
          </div>
          <h1 className="font-medium text-lg py-2">Overview</h1>
          <div className="h-px w-12 duration-200 group-hover:w-20 bg-[#fff] mb-1"></div>
          <h5 className="text-[#FFFFFFb3]">
            ECS develops a “Clone Model” of our client’s best customers to
            target for acquisition. We employ a multi-channel and multi-touch
            communication strategy.
          </h5>
          <p className="cursor-pointer font-normal text-sm inline mt-1">
            Learn More
          </p>
        </div>

        <div className="flex group flex-col items-center text-center px-4 py-12">
          <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-5 border-White">
            <AiOutlineLaptop
              style={iconStyle}
              className="group-hover:fill-[#131022]"
            />
          </div>
          <h1 className="font-medium text-lg py-2">
            Targeting - Data and Insights
          </h1>
          <div className="h-px w-12 duration-200 group-hover:w-20 bg-[#fff] mb-1"></div>
          <h5 className="text-[#FFFFFFb3]">
            The ECS database provides the most in-depth view of individuals that
            is comprised of 264 separate source/transactional databases, 830MM
            records, 300MM individuals that can be described by over 931
            specific attributes.
          </h5>
          <p className="cursor-pointer font-normal text-sm inline mt-1">
            Learn More
          </p>
        </div>

        <div className="flex group bg-[#ffffff1a] flex-col items-center text-center px-4 py-12">
          <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-5 border-White">
            <FiDatabase
              style={iconStyle}
              className="group-hover:stroke-[#131022]"
            />
          </div>
          <h1 className="font-medium text-lg py-2">Data Driven Creative</h1>

          <div className="h-px w-12 duration-200 group-hover:w-20 bg-[#fff] mb-1"></div>
          <h5 className="text-[#FFFFFFb3]">
            ECS delivers Data-Driven-Creative in both print and eVideo built on
            the attributes of a best-customer clone and customized to each
            individual or micro-segment. Imagery, messaging and video is
            conveyed in the likeness, language and interests of the prospective
            customer with relevant offers that change behavior and generate
            conversion.
          </h5>

          <p className="cursor-pointer font-normal text-sm inline mt-1">
            Learn More
          </p>
        </div>

        <div className="flex group flex-col items-center text-center px-4 py-12">
          <div className="rounded-full border duration-200 group-hover:scale-110 group-hover:bg-[#FFF] p-5 border-White">
            <SiGoogleanalytics
              style={iconStyle}
              className="group-hover:fill-[#131022]"
            />
          </div>
          <h1 className="font-medium text-lg py-2">Performance Analytics</h1>
          <div className="h-px w-12 duration-200 group-hover:w-20 bg-[#fff] mb-1"></div>
          <h5 className="text-[#FFFFFFb3]">
            ECS Performance Analytics System provides real-time reporting
            including; mail delivery date, email views, opens, click through
            rates, time spent on the video, video/email sharing, links to client
            site(s) and exact match-back of sales to target prospect.
          </h5>
          <p className="cursor-pointer font-normal text-sm inline mt-1">
            Learn More
          </p>
        </div>
      </div>
    </Container>
  );
}

export default DataGrid;
