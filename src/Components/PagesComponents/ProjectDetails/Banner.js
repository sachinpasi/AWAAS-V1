import React from "react";
import { MdLocationOn } from "react-icons/md";

const Banner = ({ Data }) => {
  // const imgurl = JSON.parse(Data?.parent.banner_image);
  // console.log("https://codeiator.com/" + imgurl[0]);

  return (
    <section
      // style={{
      //   background: `url(https://codeiator.com/` + imgurl[0] + `)`,
      // }}
      className="w-full h-96"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-full"
      >
        <div className=" relative customContainer h-full flex flex-col justify-end items-start text-5xl text-white">
          <p className="text-white text-5xl tracking-tight">
            {Data?.parent.title}
          </p>
          <div className="flex justify-center items-center py-4 mb-16">
            <div className="flex justify-center items-center">
              <MdLocationOn className="text-blue text-3xl font-medium" />
              <p className="text-white text-lg font-medium">
                {Data?.parent.locality}, {Data?.parent.city}
              </p>{" "}
            </div>
            {Data?.parent.rera && (
              <div className="mx-4">
                <img src="/assets/images/projectdetails/rera.svg" alt="" />
              </div>
            )}
          </div>
          <nav
            className="flex items-center justify-start h-20 w-full bg-white shadow-lg absolute -bottom-10
           rounded"
          >
            <NavItem Name="Overview" />
            <NavItem Name="Configuration" />
            <NavItem Name="Gallery" />
            <NavItem Name="Book Now" />
            <NavItem Name="Download Brochure" />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;

const NavItem = ({ Name }) => (
  <div className="mx-6">
    <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
  </div>
);
