import React from "react";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";

const Sidebar = () => {
  const { Data } = useSelector(selectPropertyRentDetails);
  return (
    <div className="w-full bg-blue rounded p-4 sticky top-5 py-8 ">
      <div
        style={{
          borderBottom: "1px solid #2F5FBE",
        }}
        className="pb-3 flex flex-col justify-center items-start h-1/5"
      >
        <p className="text-3xl text-white leading-5 mb-2">Contact Developer</p>
        <p
          style={{
            color: "#B8D0FF",
          }}
          className="text-lg leading-6"
        >
          Please share you contact details
        </p>
      </div>

      <div className="flex justify-center items-start flex-col py-2">
        <div className="flex-col flex justify-center items-start w-full my-1">
          <p className="text-white">Name</p>
          <input
            style={{
              background: "#3F74DB",
              border: "1px solid #598DF5",
            }}
            className="w-full h-9 px-2 placeholder-extralightgray my-1"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex-col flex justify-center items-start w-full my-1">
          <p className="text-white">Email Address</p>
          <input
            style={{
              background: "#3F74DB",
              border: "1px solid #598DF5",
            }}
            className="w-full h-9 px-2 placeholder-extralightgray my-1"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="flex-col flex justify-center items-start w-full my-1">
          <p className="text-white">Phone Number</p>
          <input
            style={{
              background: "#3F74DB",
              border: "1px solid #598DF5",
            }}
            className="w-full h-9 px-2 placeholder-extralightgray my-1"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <button className="w-full my-4 h-12 bg-white rounded text-lg font-medium text-blue">
          Contact To Developer
        </button>
        <div className="w-11/12 mx-auto text-lightblue">
          <p className="text-xs leading-4 text-center">
            By sending a request, you are accepting our{" "}
            <span className="text-white font-medium">Terms of Services</span>{" "}
            and <span className="text-white font-medium">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
