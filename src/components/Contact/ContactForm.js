import React from "react";
import { BiBuildings } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import Container from "../Container";

function ContactForm() {
  return (
    <div
      className=" bg-cover w-full h-auto"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg')",
      }}
    >
      <Container>
        <div className="flex justify-end">
          <div className=" bg-[#131022] mb-8 w-full md:w-3/4 lg:w-1/2 p-4">
            <div>
              <h1 className="font-bold text-[#6366F1]">Contact Us</h1>
              <div className="my-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <h4 className="text-[#FFFFFFb3]">
                  Are you looking for more information about Enterprise Content
                  Solutions? Send us your questions and requests. Enterprise
                  Content Solutions will not accept or consider any unsolicited
                  ideas, suggestions, proposals or materials. Thank you.
                </h4>
                <div>
                  <div className="flex my-1 items-center">
                    <BiBuildings />
                    <span className="ml-2 text-[#FFFFFFb3]">
                      Enterprise Content Solutions
                    </span>
                  </div>
                  <div className="flex my-1">
                    <GoLocation className="md:w-7 mt-1" />
                    <span className="ml-2 text-[#FFFFFFb3]">
                      8201 Norman Center Dr. Suite 150 Bloomington, MN 55437
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
              <div>
                <h1 className="font-bold text-[#6366F1]">Send us a message</h1>
                <form className="my-3">
                  <label>Name*</label>
                  <input
                    type="name"
                    className="w-full bg-[#ffffff1a] p-2 my-1 outline-0"
                    placeholder="Name"
                  />
                  <label>Email*</label>
                  <input
                    type="email"
                    className="w-full bg-[#ffffff1a] p-2 my-1 outline-0"
                    placeholder="Email"
                  />
                  <label>Please select the type of business you are in*</label>
                  <select
                    id="countries"
                    className="bg-[#ffffff1a] text-[#FFFFFFb3] outline-0 w-full p-2 my-1"
                  >
                    <option className="bg-black" defaultValue>
                      -Select-
                    </option>
                    <option className="bg-black">Entertainment</option>
                    <option className="bg-black">Technology</option>
                    <option className="bg-black">Finance</option>
                    <option className="bg-black">Media</option>
                    <option className="bg-black">
                      Retail/Merchandise
                    </option>
                    <option className="bg-black">Automotive</option>
                    <option className="bg-black">Politics</option>
                    <option className="bg-black">Other</option>
                  </select>

                  <label>Message</label>
                  <textarea
                    className="w-full bg-[#ffffff1a] p-2 my-1 outline-0"
                    rows={8}
                  />
                  <p>Enter the characters below*</p>
                  <label className="italic ">
                    To use CAPTCHA, you need Really Simple CAPTCHA plugin
                    installed.
                  </label>
                  <input
                    type="name"
                    className="w-full bg-[#ffffff1a] p-2 my-1 outline-0"
                  />

                  <button className="bg-[#6366F1] py-4 px-12 font-bold">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
