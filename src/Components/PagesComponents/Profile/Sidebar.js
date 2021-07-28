import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SiMarketo } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { RiBuilding2Fill, RiLogoutCircleRLine } from "react-icons/ri";
import { MdMonetizationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SIGNOUT } from "../../../Redux/_features/_userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="w-72 bg-white shadow h-screen sticky top-4">
      <div className="w-full h-full p-6 flex flex-col items-start">
        <div className="w-full flex-col flex justify-center items-center mb-3">
          <div className="w-48 h-48 bg-green rounded-full my-3 mb-4">
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
        <SidebarItem
          Name="Account Settings"
          To="/profile/account"
          Icon={FaUserCircle}
        />
        <SidebarItem
          Name="Listings"
          To="/profile/listings"
          Icon={RiBuilding2Fill}
        />
        <SidebarItem
          Name="Home Loan"
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
