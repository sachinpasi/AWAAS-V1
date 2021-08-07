import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { SiMarketo } from "react-icons/si";
import { FaUserCircle, FaProjectDiagram } from "react-icons/fa";

import { RiBuilding2Line, RiLogoutCircleRLine } from "react-icons/ri";
import { MdMonetizationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SIGNOUT } from "../../../Redux/_features/_userSlice";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const { id } = useParams();
  return (
    <div
      style={{
        transition: "all 0.2s ease",
      }}
      className={`w-72  bg-white shadow h-screen lg:sticky z-10   fixed top-0 bottom-0 ${
        isSidebarOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="lg:hidden fixed top-20 left-2 bg-green rounded-full p-3 text-white ">
        {isSidebarOpen ? (
          <AiOutlineClose
            onClick={() => setisSidebarOpen(!isSidebarOpen)}
            className="text-4xl "
          />
        ) : (
          <HiOutlineMenuAlt1
            onClick={() => setisSidebarOpen(!isSidebarOpen)}
            className="text-4xl "
          />
        )}
      </div>
      <div className="w-full h-full lg:p-6 py-2 px-4  flex flex-col items-start justify-center">
        <div className="w-full flex-col flex justify-center items-center mb-3">
          <div className="lg:w-48 w-28 h-28 lg:h-48 bg-green rounded-full my-3 mb-4">
            <img src="/assets/images/profile/user.svg" alt="" />
          </div>
          <p className="text-3xl font-medium text-darkgray capitalize ">
            {user?.name}
          </p>
          {user.accountType === 0 && (
            <p className="uppercase font-medium text-green">- Builder -</p>
          )}
          {user.accountType === 1 && (
            <p className="uppercase font-medium text-green">
              - Buyer / Seller -
            </p>
          )}
        </div>
        <SidebarItem
          Name="Overview"
          Active={location.pathname === "/profile/overview"}
          To="/profile/overview"
          Icon={SiMarketo}
        />
        {/* <SidebarItem
          Name="Account Settings"
          To="/profile/account"
          Icon={FaUserCircle}
        /> */}

        <SidebarItem
          Name="Property Listings"
          Active={
            location.pathname === "/profile/property/listings" ||
            location.pathname === `/profile/property/listings/${id}`
          }
          To="/profile/property/listings"
          Icon={RiBuilding2Line}
        />
        {user.accountType === 0 && (
          <SidebarItem
            Active={
              location.pathname === "/profile/projects/listings" ||
              location.pathname === `/profile/projects/listings/${id}`
            }
            Name="Projects Listings"
            To="/profile/projects/listings"
            Icon={FaProjectDiagram}
          />
        )}

        <SidebarItem
          Name="Home Loan"
          Active={
            location.pathname === "/profile/home-loan" ||
            location.pathname === `/profile/home-loan/${id}`
          }
          To="/profile/home-loan"
          Icon={MdMonetizationOn}
        />
        <SidebarItem
          Name="Log Out"
          onClick={() => dispatch(SIGNOUT())}
          Icon={RiLogoutCircleRLine}
        />
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ Name, To, Active, Icon, onClick }) => (
  <>
    {onClick ? (
      <div
        className={`${
          Active ? "bg-blue text-white" : "text-darkgray"
        } w-full my-1.5  font-medium rounded-full py-1.5 px-4  flex justify-start items-center cursor-pointer `}
        onClick={onClick}
      >
        <div className={`${Active ? "text-white" : "text-darkgray"}`}>
          {Icon && (
            <Icon className="text-2xl flex justify-center items-center  mr-3      " />
          )}
        </div>

        <p className="text-xl ">{Name}</p>
      </div>
    ) : (
      <Link
        className={`${
          Active ? "bg-blue text-white" : "text-darkgray"
        } w-full my-1.5  font-medium rounded-full py-1.5 px-4  flex justify-start items-center `}
        to={To}
      >
        <div className={`${Active ? "text-white" : "text-darkgray"}`}>
          {Icon && (
            <Icon className="text-2xl flex justify-center items-center  mr-3      " />
          )}
        </div>

        <p className="text-xl ">{Name}</p>
      </Link>
    )}
  </>
);
