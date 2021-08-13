import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaProjectDiagram, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/_features/_userSlice";
import { MdClose, MdExplore, MdMonetizationOn } from "react-icons/md";
import { HiMenu, HiOutlineHome } from "react-icons/hi";
import { RiBankLine, RiBuilding2Line } from "react-icons/ri";
import { ImHammer2 } from "react-icons/im";
import Login from "../PagesComponents/Login/Login";
const Navbar = () => {
  const loaction = useLocation();
  const location = useLocation();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);

  const MobileNavItem = ({ Name, To, Active, Icon }) => (
    <Link
      onClick={() => setisNavOpen(false)}
      to={To}
      className={`flex items-end  py-2 px-5 w-full my-1 rounded-full ${
        Active ? "bg-gray-500 text-white" : ""
      }`}
    >
      <Icon className="text-3xl mr-3" />
      <p className="text-xl font-medium">{Name}</p>
    </Link>
  );

  const HandlePostProperty = () => {
    if (user.isLoggedIn) {
      history.push("/post-property");
    } else {
      setisLoginModalOpen(true);
    }
  };

  const HandlePostProject = () => {
    if (user.isLoggedIn) {
      history.push("/post-project");
    } else {
      setisLoginModalOpen(true);
    }
  };

  return (
    <>
      <nav className="w-full hidden h-14 lg:flex justify-center items-center border-b-2 border-darkblue ">
        <div className=" w-full mx-6 flex justify-between items-center h-full">
          <Link to="/" className="w-44">
            <img src="/assets/images/logo/logo2.svg" alt="" />
          </Link>
          <div className="w-auto h-full flex justify-center items-center">
            <NavItem
              To="/post-property"
              Active={loaction.pathname === "/post-property"}
              Name="Post Property Free"
            />
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
              Active={loaction.pathname === "/awaas-assist"}
              Name="Awaas Assist"
              To="/awaas-assist"
            />
            <NavItem
              Active={loaction.pathname === "/vastu"}
              Name="Vastu"
              To="/vastu"
            />
            <NavItem
              Active={loaction.pathname === "/legal"}
              Name="Legal"
              To="/legal"
            />
            {user.isLoggedIn ? (
              <NavAuthItem To="/profile/overview" Name="Profile" />
            ) : (
              <NavAuthItem To="/" Name="Login" />
            )}
          </div>
        </div>
      </nav>

      <nav className="w-full h-auto absolute  z-50">
        <div className="lg:hidden w-full fixed z-50 flex justify-between items-center bg-white  shadow-md  ">
          <div className="py-4 pl-4">
            <img className="w-44" src="/assets/images/logo/logo2.svg" alt="" />
          </div>
          <div
            onClick={() => setisNavOpen(!isNavOpen)}
            className="fixed z-50 right-4 top-4"
          >
            {isNavOpen ? (
              <MdClose className="text-4xl text-darkgray" />
            ) : (
              <HiMenu className="text-4xl text-darkgray" />
            )}
          </div>
        </div>
        <div
          style={{
            transition: "all 0.3s ease",
          }}
          className={` lg:hidden fixed bg-white border-b-4 border-green  z-0 h-screen w-full flex justify-center items-center pt-20 ${
            isNavOpen ? "top-0" : "-top-full pb-20"
          }`}
        >
          <div className=" w-11/12 h-90percent flex-col flex   items-center">
            <MobileNavItem
              Icon={HiOutlineHome}
              Name="Home"
              Active={location.pathname === "/"}
              To="/"
            />
            {/* <MobileNavItem
              Icon={HiUser}
              Name="Profile"
              To="/profile/overview"
            /> */}
            <MobileNavItem
              Icon={RiBuilding2Line}
              Name="Post Property "
              To="/post-property"
              Active={location.pathname === "/post-property"}
            />
            <MobileNavItem
              Icon={FaProjectDiagram}
              Name="Post Project "
              To="/post-project"
              Active={location.pathname === "/post-project"}
            />
            <MobileNavItem
              Icon={MdMonetizationOn}
              Name="Home Loan "
              To="/home-loan"
              Active={location.pathname === "/home-loan"}
            />{" "}
            <MobileNavItem
              Icon={RiBankLine}
              Name="Investment Assistance"
              To="/investment-assist"
              Active={location.pathname === "/investment-assist"}
            />{" "}
            <MobileNavItem
              Icon={MdExplore}
              Name="Vastu"
              To="/vastu"
              Active={location.pathname === "/vastu"}
            />{" "}
            <MobileNavItem
              Icon={ImHammer2}
              Name="Legal"
              To="/legal"
              Active={location.pathname === "/legal"}
            />
            <div className="flex w-full justify-center  py-2 px-4 my-3 ">
              {user.isLoggedIn ? (
                <Link
                  to="/profile/overview"
                  className="w-full h-12 bg-blue font-medium text-2xl rounded-full flex justify-center items-center text-white"
                >
                  Profile
                </Link>
              ) : (
                <button
                  onClick={() => setisLoginModalOpen(true)}
                  className="w-full h-12 bg-blue font-medium text-2xl rounded-full text-white"
                >
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Login
        isLoginModalOpen={isLoginModalOpen}
        setisLoginModalOpen={setisLoginModalOpen}
      />
    </>
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
    to={To}
  >
    <FaUserCircle className="text-white text-lg" />
    <p className="text-white text-base pl-1 ">{Name}</p>
  </Link>
);
