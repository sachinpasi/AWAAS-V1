import React from "react";
import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";

const Sidebar = () => {
  const { Data } = useSelector(selectProjectDetails);
  return (
    <div
      style={{
        height: "520px",
      }}
      className="w-full bg-blue rounded p-4 sticky top-5 "
    >
      <div
        style={{
          borderBottom: "1px solid #2F5FBE",
        }}
        className="pb-3 flex justify-start items-center h-1/5"
      >
        <div className="h-full">
          <img
            className="h-full"
            src={`https://codeiator.com/${
              JSON.parse(Data.parent.developerlogo)[0]
            }`}
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-2xl pl-4">
            {Data.parent.developerName}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-start flex-col py-2">
        <p className="text-xl text-white leading-5">Contact Developer</p>
        <p
          style={{
            color: "#B8D0FF",
          }}
          className="text-sm leading-6"
        >
          Please share you contact details
        </p>

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
