import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const loaction = useLocation();
  return (
    <nav className="w-full h-14 flex justify-center items-center ">
      <div className=" w-full mx-6 flex justify-between items-center h-full">
        <Link to="/" className="w-44">
          <img src="/assets/images/logo/logo2.svg" alt="" />
        </Link>
        <div className="w-auto h-full flex justify-center items-center">
          <NavItem Name="Post Property Free" />
          <NavItem
            Active={loaction.pathname === "/home-loans"}
            Name="Home Loan"
            To="/home-loans"
          />
          <NavItem
            Active={loaction.pathname === "/investment-assist"}
            Name="Investment Assistance"
            To="/investment-assist"
          />
          <NavItem
            Active={loaction.pathname === "/awass-assist"}
            Name="Awaas Assist"
            To="/awass-assist"
          />
          <NavAuthItem To="/" Name="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavItem = ({ Name, To, Active }) => (
  <Link to={To} className="mx-2 h-full flex justify-center items-center">
    <p
      className={`flex justify-center items-center  text-base font-medium  h-full tracking-tight ${
        Active ? "text-blue border-b-2 border-blue" : "text-navtext"
      }`}
    >
      {Name}
    </p>
  </Link>
);

const NavAuthItem = ({ Name, To }) => (
  <Link
    className="w-auto bg-blue flex justify-center items-center py-1 px-6 rounded shadow-md ml-2 "
    to="/"
  >
    <FaUserCircle className="text-white text-lg" />
    <p className="text-white text-base pl-1 ">{Name}</p>
  </Link>
);
