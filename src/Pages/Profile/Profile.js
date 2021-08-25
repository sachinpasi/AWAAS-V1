import React from "react";
import { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <main className=" hidden w-full min-h-screen bg-white relative lg:flex items-start justify-between ">
        <Sidebar />
        <div className="w-4/5 h-full p-8 mt-4">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow">
              <div className="w-full">
                <FaUserCircle className="text-6xl text-darkgray" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-darkgray py-2  ">
                  Account
                </p>
              </div>
            </div>
            <div className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow">
              <div className="w-full">
                <BsBookmarksFill className="text-6xl text-darkgray" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-darkgray py-2  ">
                  Bookmark
                </p>
              </div>
            </div>
            <a
              href="/awaas-assist#instant-assistance"
              className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
            >
              <div className="w-full">
                <MdHelp className="text-6xl text-darkgray" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-darkgray py-2  ">
                  Help
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>

      <main className=" lg:hidden w-full min-h-screen bg-white relative  items-center justify-between pt-16 pb-12 ">
        <Sidebar />
        <div className="lg:w-4/5 w-full h-full p-8 mt-4">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className=" lg:w-1/3 w-full lg:h-48 h-40 bg-lightblue mx-4 my-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow">
              <div className="w-full">
                <FaUserCircle className="text-6xl text-white" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-white py-2  ">
                  Account
                </p>
              </div>
            </div>
            <div className=" lg:w-1/3 w-full lg:h-48 h-40 bg-lightblue mx-4 my-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow">
              <div className="w-full">
                <BsBookmarksFill className="text-6xl text-white" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-white py-2  ">
                  Bookmark
                </p>
              </div>
            </div>
            <div className=" lg:w-1/3 w-full lg:h-48 h-40 bg-lightblue mx-4 my-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow">
              <div className="w-full">
                <MdHelp className="text-6xl text-white" />
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-white py-2  ">Help</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
