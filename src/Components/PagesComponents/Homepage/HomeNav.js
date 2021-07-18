import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaUserCircle,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Login from "../../PagesComponents/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, SIGNOUT } from "../../../Redux/_features/_userSlice";

const HomeNav = () => {
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const user = useSelector(selectUser);

  const history = useHistory();
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

  return (
    <>
      <nav className="w-full h-auto absolute z-10">
        <div className="w-full h-11 border-b-1 border-navborder">
          <div className="customContainer mx-auto   h-full flex justify-between items-center">
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
                To="/https://twitter.com/awaasonline"
                Icon={FaTwitter}
              />
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
            <NavItem Name="Vastu / Legal" To="/" />
            {user.isLoggedIn ? (
              <div
                onClick={() => dispatch(SIGNOUT())}
                className="w-auto bg-blue flex justify-center items-center py-1 px-4 rounded shadow-md ml-2 cursor-pointer "
              >
                <FaUserCircle className="text-white text-xl" />
                <p className="text-white text-lg pl-1 ">Profile</p>
              </div>
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
