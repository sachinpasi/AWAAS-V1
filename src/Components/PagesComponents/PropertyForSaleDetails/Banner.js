import React from "react";
import { MdLocationOn } from "react-icons/md";

import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";

const Banner = () => {
  const { Data } = useSelector(selectPropertySaleDetails);
  console.log(Data);

  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/propertysale/bg.png)",
      }}
      className="w-full object-cover bg-no-repeat h-72"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full"
      >
        <div className="  relative lg:w-80vw w-90vw mx-auto h-full flex flex-col items-start justify-center">
          <p
            style={{
              textShadow: "2px 3px 5px #000",
            }}
            className="text-white lg:text-5xl text-4xl tracking-tight font-medium uppercase"
          >
            {Data?.title}
          </p>
          <div className="flex justify-center items-center py-4 ">
            <div className="flex justify-center items-center">
              <MdLocationOn className="text-blue text-3xl font-medium" />
              <p className="text-white lg:text-lg text-base font-medium whitespace-nowrap">
                {Data?.locality_name}, {Data?.city}
              </p>{" "}
            </div>
            {/* {Data?.parent?.rera && ( */}
            <div className="mx-4">
              <img src="/assets/images/propertysale/rera.svg" alt="" />
            </div>
            {/* )} */}
          </div>
          <nav
            className=" flex items-center overflow-x-scroll scrollbar-hide justify-start h-20 w-full bg-white shadow-lg absolute lg:-bottom-10
           rounded top-full mt-4 lg:mt-0"
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
    <p className="text-lg text-darkgray font-medium cursor-pointer whitespace-nowrap">
      {Name}
    </p>
  </a>
);

// const NavItem = ({ Name, To }) => (
//   <div className="mx-6">
//     <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
//   </div>
// );
