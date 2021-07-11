import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaUserCircle,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const HomeNav = () => {
  return (
    <nav className="w-full h-auto absolute z-10">
      <div className="w-full h-11 border-b-1 border-navborder">
        <div className="customContainer mx-auto   h-full flex justify-between items-center">
          <div className="w-auto h-full flex justify-center items-center">
            <SocialIcon To="/" Icon={FaFacebookF} />
            <SocialIcon To="/" Icon={FaLinkedinIn} />
            <SocialIcon To="/" Icon={FaTwitter} />
            <SocialIcon To="/" Icon={FaYoutube} Br />
          </div>
          <div className="w-auto h-full flex justify-center items-center">
            <a
              href="mailto:"
              className="flex justify-center items-center px-4 border-l-1 border-navborder h-full"
            >
              <HiMail className="text-white text-2xl" />
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="text-white text-base pl-1 -mt-1"
              >
                assist@awaasonline.com
              </p>
            </a>
            <a
              href="tel:"
              className="flex justify-center items-center border-l-1 border-r-1 px-4 border-navborder h-full"
            >
              <FaWhatsapp className="text-white text-2xl" />
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="text-white text-base pl-1 -mt-1"
              >
                +91-999-639-8965
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="customContainer mx-auto py-2 h-full  flex justify-between items-center">
        <div className="w-auto h-auto">
          <img className="w-44" src="/assets/images/logo/logo.svg" alt="" />
        </div>
        <div className="w-auto h-auto flex justify-between items-center">
          <NavItem Name="Post Property Free" To="/" />
          <NavItem Name="Home Loan" To="/home-loans" />
          <NavItem Name="Investment Assistance" To="/investment-assist" />
          <NavItem Name="Awaas Assist" To="/awaas-assist" />
          <NavItem Name="Vastu / Legal" To="/" />
          <NavAuthItem Name="Login" To="/login" />
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;

const SocialIcon = ({ Icon, Br, To }) => (
  <Link
    to={To}
    className={`w-11 h-full flex justify-center items-center border-l-1 border-navborder ${
      Br && "border-r-1"
    } `}
  >
    <Icon className="text-white text-xl" />
  </Link>
);

const NavItem = ({ Name, To }) => (
  <Link className="w-auto" to={To}>
    <p
      style={{
        textShadow: "2px 3px 5px #000",
      }}
      className="text-white text-base px-2"
    >
      {Name}
    </p>
  </Link>
);

const NavAuthItem = ({ Name, To }) => (
  <Link
    className="w-auto bg-blue flex justify-center items-center py-1 px-4 rounded shadow-md ml-2 "
    to={To}
  >
    <FaUserCircle className="text-white text-xl" />
    <p className="text-white text-lg pl-1 ">{Name}</p>
  </Link>
);
