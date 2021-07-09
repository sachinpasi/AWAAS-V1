import React from "react";
import { MdLocationOn } from "react-icons/md";

import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";

const Banner = () => {
  const { Data } = useSelector(selectPropertyRentDetails);
  console.log(Data);

  return (
    <section
      style={{
        background: "url(/assets/images/propertysale/bg.png)",
      }}
      className="w-full object-cover bg-no-repeat h-72"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full"
      >
        <div className="  relative customContainer w-full h-full flex flex-col items-start justify-center">
          <p
            style={{
              textShadow: "2px 3px 5px #000",
            }}
            className="text-5xl text-white tracking-tight capitalize "
          >
            {Data?.title}
          </p>
          <div className="flex justify-center items-center py-4 ">
            <div className="flex justify-center items-center">
              <MdLocationOn className="text-blue text-3xl font-medium" />
              <p className="text-white text-lg font-medium">
                {Data?.locality}, {Data?.city}
              </p>{" "}
            </div>
            {/* {Data?.parent?.rera && ( */}
            <div className="mx-4">
              <img src="/assets/images/projectdetails/rera.svg" alt="" />
            </div>
            {/* )} */}
          </div>
          <nav
            className="flex items-center justify-start h-20 w-full bg-white shadow-lg absolute -bottom-10
           rounded"
          >
            <NavItemLink To="#configuration" Name="Configuration" />
            <NavItemLink To="#description" Name="Description" />
            <NavItemLink To="#amenities" Name="Amenities" />
            <NavItemLink To="#gallery" Name="Gallery" />
            <NavItemLink To="#get_callback" Name="Get Callback" />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;

const NavItemLink = ({ Name, To }) => (
  <a href={To} className="mx-6">
    <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
  </a>
);

// const NavItem = ({ Name, To }) => (
//   <div className="mx-6">
//     <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
//   </div>
// );
