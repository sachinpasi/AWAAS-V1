import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Header = ({ Title }) => {
  return (
    <div className="w-full flex flex-col justify-between items-start ">
      <div className="w-full flex justify-between items-center border-b-1 border-gray-300 py-4">
        <p className="uppercase text-3xl font-semibold">{Title}</p>
        <div className="flex items-center justify-center">
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border-1 border-blue">
            <BsChevronLeft className=" text-xl text-blue" />
          </div>
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border-1 mx-1 border-blue">
            <BsChevronRight className=" text-xl text-blue" />
          </div>
        </div>
      </div>
      <span
        style={{
          borderBottom: "4px solid #4D81E8",
        }}
        className="w-36  -mt-0.5 "
      ></span>
    </div>
  );
};

export default Header;
