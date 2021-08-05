import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import Dropdown from "react-multilevel-dropdown";
import { FaDownload } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../Redux/_features/_ProjectDetailsSlice";
import "./Banner.css";
import { useEffect } from "react";
import Loader from "../../Common/Loader";

const Banner = () => {
  const { Data } = useSelector(selectProjectDetails);

  return (
    <>
      <section
        style={{
          background: `url(${Data?.parent?.banner_image_path})  `,
          height: "27.5rem",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.2)",
          }}
          className="w-full h-full"
        >
          <div className=" relative customContainer h-full flex flex-col justify-end items-start text-5xl text-white">
            <p
              style={{
                textShadow: "2px 3px 5px #000",
              }}
              className="text-white text-5xl tracking-tight"
            >
              {Data?.parent?.title}
            </p>
            <div className="flex justify-center items-center py-4 mb-16">
              <div className="flex justify-center items-center">
                <MdLocationOn className="text-blue text-3xl font-medium" />
                <p className="text-white text-lg font-medium">
                  {Data?.parent?.locality}, {Data?.parent?.city}
                </p>{" "}
              </div>
              {Data?.parent?.rera && (
                <div className="mx-4">
                  <img src="/assets/images/projectdetails/rera.svg" alt="" />
                </div>
              )}
            </div>
            <nav
              className="flex items-center justify-start h-20 w-full bg-white shadow-lg absolute -bottom-10
           rounded"
            >
              <NavItemLink To="#overview" Name="Overview" />
              <NavItemLink To="#configuration" Name="Configuration" />
              <NavItemLink To="#gallery" Name="Gallery" />
              <NavItem Name="Book Now" />

              <div className="mx-6 flex justify-center items-center">
                {/* <p className="text-lg text-darkgray font-medium cursor-pointer">
                    Download Brochure
                  </p> */}

                <Dropdown
                  wrapperClassName="buttonwrapper"
                  buttonClassName="dropdownbutton"
                  menuClassName="menu"
                  title="Download Brochure"
                >
                  <Dropdown.Item className="item">
                    <a
                      className="flex justify-between items-center"
                      href={`${
                        Data.parent?.brochure && Data.parent?.brochure[0]?.icon
                      }`}
                    >
                      {Data?.parent?.brochure &&
                        Data?.parent?.brochure[0]?.title}
                      <FaDownload className="ml-4 " />
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

const NavItemLink = ({ Name, To }) => (
  <a href={To} className="mx-6">
    <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
  </a>
);

const NavItem = ({ Name, To }) => (
  <div className="mx-6">
    <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
  </div>
);
