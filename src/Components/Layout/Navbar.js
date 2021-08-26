import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaProjectDiagram, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/_features/_userSlice";
import { MdClose, MdExplore, MdMonetizationOn } from "react-icons/md";
import { HiMenu, HiOutlineHome } from "react-icons/hi";
import { RiBankLine, RiBuilding2Line } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { ImHammer2 } from "react-icons/im";
import Login from "../PagesComponents/Login/Login";
import axios from "axios";
import { API } from "../../API";
import { BsBookmarkFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
const Navbar = ({ isBookmarkChanged }) => {
  const loaction = useLocation();
  const location = useLocation();
  const history = useHistory();
  const user = useSelector(selectUser);
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const [isSideOpen, setisSideOpen] = useState(false);
  const [BookmarkList, setBookmarkList] = useState([]);

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

  const FetchBookmarkList = async () => {
    const res = await axios.get(`${API}/bookmark-list`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res.data);
    setBookmarkList(res.data.data);
  };

  useEffect(() => {
    FetchBookmarkList();
  }, [isBookmarkChanged]);

  return (
    <>
      <nav className="w-full hidden h-14 lg:flex justify-center items-center border-b-2 border-darkblue ">
        <div className=" w-full mx-6 flex justify-between items-center h-full">
          <Link to="/" className="w-44">
            <img src="/assets/images/logo/logo2.svg" alt="" />
          </Link>
          <div className="flex items-center justify-between">
            <div className="w-auto h-full flex justify-center items-center mr-12">
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
            <div className="flex justify-center items-center">
              <HiMenu
                onClick={() => setisSideOpen(!isSideOpen)}
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="absolute right-6 text-3xl text-darkgray cursor-pointer "
              />

              <div
                style={{
                  transition: "0.3s ease all",
                }}
                onClick={() => setisSideOpen(!isSideOpen)}
                className={` ${
                  isSideOpen ? "" : "hidden"
                } w-full h-screen bg-black bg-opacity-50 z-40 fixed left-0 bottom-0 top-0 right-0`}
              ></div>
              <div
                style={{
                  transition: "0.3s ease all",
                }}
                className={`${
                  isSideOpen ? "right-0" : "-right-full"
                } w-80 h-screen bg-white fixed z-50  bottom-0 top-0 p-4`}
              >
                <GrClose
                  onClick={() => setisSideOpen(!isSideOpen)}
                  style={{
                    textShadow: "2px 3px 5px #000",
                  }}
                  className="text-2xl text-white cursor-pointer float-right "
                />

                <div className="w-11/12 mx-auto h-full mt-8">
                  <div className="flex items-center border-b-2 pb-2">
                    <BsBookmarkFill className="text-2xl mt-1 mr-3.5 text-green" />
                    <p className="text-2xl">Bookmark</p>
                  </div>
                  <div className="w-full h-full">
                    {BookmarkList.map((item, index) => (
                      <Link
                        key={index}
                        to={`/property/${item.property_for}/${item.property_id}`}
                        className="text-blue cursor-pointer flex items-center my-2 border-b-2  pb-2"
                      >
                        <img
                          src={item.single_image}
                          className="w-12 h-12 mr-2 object-cover rounded-lg"
                          alt=""
                        />
                        <p className="capitalize text-lg ">{item.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
              To="/home-loans"
              Active={location.pathname === "/home-loans"}
            />
            <MobileNavItem
              Icon={BiHelpCircle}
              Name="Awaas Assist"
              To="/awaas-assist"
              Active={location.pathname === "/awaas-assist"}
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
