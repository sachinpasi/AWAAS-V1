import React from "react";

import { GiVibratingSmartphone } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const HowDoesItWork = () => {
  return (
    <div
      style={{
        backgroundColor: "#e9f3fd",
      }}
      className="w-full lg:h-screen "
    >
      <div className="lg:w-80vw w-90vw h-full mx-auto flex-col flex justify-evenly items-center">
        <div className="w-full flex-col flex items-center justify-center lg:-mt-10 ">
          <p className="text-blue font-medium lg:text-5xl text-4xl capitalize my-6">
            How does it work
          </p>
          <p className="text-darkgray lg:text-xl  capitalize">
            Our Approach is customer centric
          </p>
          <p className="text-darkgray lg:text-xl  capitalize">
            so acting on our feedback is our protocol{" "}
          </p>
        </div>

        <div className="w-full flex-col lg:flex-row  flex justify-center lg:items-start items-center lg:mt-12 mt-6 mb-6">
          <div className="lg:w-1/5 flex flex-col justify-center items-center">
            <div className="bg-blue p-3 rounded-full">
              <GiVibratingSmartphone className="text-6xl text-white" />
            </div>
            <p className="uppercase font-medium text-xl my-6 ">Step 1</p>
            <p className=" text-center  tracking-wider">
              Collection of reviews from Website, Mobile and Phone calls
            </p>
          </div>
          <div className="w-1/5 lg:h-60 h-32 flex justify-center items-center">
            <BsArrowRight className="text-6xl transform rotate-90 lg:rotate-90 " />
          </div>

          <div className="lg:w-1/5 flex flex-col justify-center items-center">
            <div className="bg-blue p-3 rounded-full">
              <AiOutlineUser className="text-6xl text-white" />
            </div>
            <p className="uppercase font-medium text-xl my-6 ">Step 2</p>
            <p className=" text-center  tracking-wider">
              Our representatives may contact you to understand the issues at
              hand.
            </p>
          </div>

          <div className="w-1/5 lg:h-60 h-32 flex justify-center items-center">
            <BsArrowRight className="text-6xl transform rotate-90 lg:rotate-90 " />
          </div>

          <div className="lg:w-1/5 flex flex-col justify-center items-center">
            <div className="bg-blue p-3 rounded-full">
              <HiOutlineDocumentText className="text-6xl text-white" />
            </div>
            <p className="uppercase font-medium text-xl my-6 ">Step 3</p>
            <p className=" text-center  tracking-wider">
              Strategies are developed to rectify or improve our services to
              serve you better.
            </p>
          </div>

          <div className="w-1/5 lg:h-60 h-32 flex justify-center items-center">
            <BsArrowRight className="text-6xl transform rotate-90 lg:rotate-90 " />
          </div>

          <div className="lg:w-1/5 flex flex-col justify-center items-center">
            <div className="bg-blue p-3 rounded-full">
              <AiOutlineStar className="text-6xl text-white" />
            </div>
            <p className="uppercase font-medium text-xl my-6 ">Step 4</p>
            <p className=" text-center  tracking-wider">
              At last, our job is done when we have successfully satisfied our
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
