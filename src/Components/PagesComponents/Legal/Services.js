import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Services = () => {
  return (
    <div className="w-full h-full bg-textbg">
      <div className="customContainer py-8 flex flex-col justify-center items-center">
        <p className="text-4xl text-darkgray font-medium capitalize">
          Legal services we offer
        </p>
        <div className="my-8 grid grid-cols-3 gap-8 w-full">
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">Private Property</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">Builder</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">HUDA</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">Private Industrial</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">Govt Auth Industrial</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
          <div className="w-full shadow-md h-36 bg-white rounded flex justify-center items-center cursor-pointer hover:shadow-xl">
            <p className="text-2xl text-darkgray mx-1">Agriculture</p>
            <BsChevronDown className="text-2xl text-darkgray mt-1 mx-1 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
