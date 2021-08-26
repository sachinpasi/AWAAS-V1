import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaUserCircle,
  FaLinkedinIn,
  FaProjectDiagram,
} from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { ImHammer2 } from "react-icons/im";
import {
  HiMail,
  HiMenu,
  HiMenuAlt1,
  HiMenuAlt2,
  HiOutlineHome,
  HiUser,
} from "react-icons/hi";
import Login from "../../PagesComponents/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SIGNOUT } from "../../../Redux/_features/_userSlice";
import { RiBankLine, RiBuilding2Line } from "react-icons/ri";
import {
  MdAssistantPhoto,
  MdClose,
  MdExplore,
  MdMonetizationOn,
} from "react-icons/md";
import axios from "axios";
import { API } from "../../../API";
import { useEffect } from "react";

const HomeNav = () => {
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const user = useSelector(selectUser);
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isSideOpen, setisSideOpen] = useState(false);
  const [BookmarkList, setBookmarkList] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

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

  const FetchBookmarkList = async () => {
    const res = await axios.get(`${API}/bookmark-list`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res.data);
    setBookmarkList(res.data.data);
  };

  useEffect(() => {
    FetchBookmarkList();
  }, []);

  return (
    <>
      <nav className="w-full h-auto absolute  z-10">
        <div className="w-full hidden lg:flex  p-4 lg:p-0 lg:h-11 border-b-1 border-navborder">
          <div className="customContainer mx-auto   h-full flex-col lg:flex-row flex  justify-between items-center">
            <div className="w-auto h-full flex justify-center items-center">
              <SocialIcon
                To="https://www.facebook.com/Awaasonline-111674134300495"
                Icon={FaFacebookF}
              />
              <SocialIcon
                To="https://www.instagram.com/awaasonline/"
                Icon={FaInstagram}
              />
              <SocialIcon
                To="https://twitter.com/awaasonline"
                Icon={FaTwitter}
              />
              <SocialIcon
                To="https://www.linkedin.com/in/awaas-online-5b5826208/"
                Icon={FaLinkedinIn}
              />
              <SocialIcon
                To="https://www.youtube.com/channel/UC5iFENaN18NSmbjyDHnRe0A"
                Icon={FaYoutube}
                Br
              />
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
                href="tel:999-639-8965"
                className="flex justify-center items-center border-l-1 border-r-1 p-2 lg:py-0  lg:px-4 border-navborder h-full"
              >
                <FaWhatsapp className="text-white text-2xl" />

                <p
                  style={{
                    textShadow: "2px 3px 5px #000",
                  }}
                  className="hidden lg:flex text-white text-base pl-1 -mt-1"
                >
                  +91-999-639-8965
                </p>
              </a>
              <div className="flex justify-center items-center">
                <HiMenu
                  onClick={() => setisSideOpen(!isSideOpen)}
                  style={{
                    textShadow: "2px 3px 5px #000",
                  }}
                  className="absolute right-6 text-2xl text-white cursor-pointer "
                />

                <div
                  style={{
                    transition: "0.3s ease all",
                  }}
                  onClick={() => setisSideOpen(!isSideOpen)}
                  className={` ${
                    isSideOpen ? "" : "hidden"
                  } w-full h-screen bg-black bg-opacity-50 fixed left-0 bottom-0 top-0 right-0`}
                ></div>
                <div
                  style={{
                    transition: "0.3s ease all",
                  }}
                  className={`${
                    isSideOpen ? "right-0" : "-right-full"
                  } w-80 h-screen bg-white fixed  bottom-0 top-0 p-4`}
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
        </div>

        <div className="customContainer mx-auto py-2 h-full hidden  lg:flex justify-between items-center">
          <div className="w-auto h-auto">
            <img className="w-44" src="/assets/images/logo/logo.svg" alt="" />
          </div>
          <div className="w-auto h-auto flex justify-between items-center">
            <div onClick={HandlePostProperty} className="w-auto cursor-pointer">
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="text-white text-base px-2"
              >
                Post Property Free
              </p>
            </div>
            {user.accountType === 0 && (
              <div
                onClick={HandlePostProject}
                className="w-auto cursor-pointer"
              >
                <p
                  style={{
                    textShadow: "2px 3px 5px #000",
                  }}
                  className="text-white text-base px-2"
                >
                  Post Project
                </p>
              </div>
            )}
            <NavItem Name="Home Loan" To="/home-loans" />
            <NavItem Name="Investment Assistance" To="/investment-assist" />
            <NavItem Name="Awaas Assist" To="/awaas-assist" />
            <NavItem Name="Vastu" To="/vastu" />{" "}
            <NavItem Name="Legal" To="/legal" />
            {user.isLoggedIn ? (
              <Link
                to="/profile/overview"
                className="w-auto bg-blue flex justify-center items-center py-1 px-4 rounded shadow-md ml-2 cursor-pointer "
              >
                <FaUserCircle className="text-white text-xl" />
                <p className="text-white text-lg pl-1 ">Profile</p>
              </Link>
            ) : (
              <div
                onClick={() => setisLoginModalOpen(true)}
                className="w-auto bg-blue flex justify-center items-center py-1 px-4 rounded shadow-md ml-2 cursor-pointer "
              >
                <FaUserCircle className="text-white text-xl" />
                <p className="text-white text-lg pl-1 ">Login</p>
              </div>
            )}
          </div>
        </div>
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
            />
            <MobileNavItem
              Icon={FaProjectDiagram}
              Name="Post Project "
              To="/post-project"
            />
            <MobileNavItem
              Icon={MdMonetizationOn}
              Name="Home Loan "
              To="/home-loan"
            />{" "}
            <MobileNavItem
              Icon={RiBankLine}
              Name="Investment Assistance"
              To="/investment-assist"
            />{" "}
            <MobileNavItem Icon={MdExplore} Name="Vastu" To="/vastu" />{" "}
            <MobileNavItem Icon={ImHammer2} Name="Legal" To="/legal" />
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

export default HomeNav;

const SocialIcon = ({ Icon, Br, To }) => (
  <a
    href={To}
    target="_blank"
    className={`w-11 h-full flex justify-center items-center border-l-1 border-navborder ${
      Br && "border-r-1"
    } `}
  >
    <Icon className="text-white text-xl" />
  </a>
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
