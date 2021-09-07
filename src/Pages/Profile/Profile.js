import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import { BsBookmarksFill } from "react-icons/bs";
import { MdHelp, MdMonetizationOn } from "react-icons/md";
import { FaProjectDiagram, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiBuilding2Fill, RiBuilding2Line } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/_features/_userSlice";
import { API } from "../../API";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [isLoading, setisLoading] = useState(false);

  const [PropertyList, setPropertyList] = useState([]);
  const [ProjectList, setProjectList] = useState([]);
  const [HomeLoanList, setHomeLoanList] = useState([]);
  const user = useSelector(selectUser);

  const FetchPropertyListing = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/property/user-list`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res);
    if (res.status === 200) {
      setPropertyList(res.data.data);
      setisLoading(false);
    }
  };
  const FetchHomeLoanList = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/list-home-loan-application`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.status === 200) {
      setHomeLoanList(res.data.data);
      setisLoading(false);
    }
  };

  const FetchProjectListing = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/projects/user-list`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res);
    if (res.status === 200) {
      setProjectList(res.data.data);
      setisLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    FetchPropertyListing();
    FetchProjectListing();
    FetchHomeLoanList();
  }, []);
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>Overview | Awaasonline</title>
        )
        <meta name="description" content="" />
      </Helmet>
      <main className=" hidden w-full min-h-screen bg-white relative lg:flex items-start justify-between ">
        <Sidebar />
        <div className="w-4/5 h-full p-8 mt-4">
          <div className="w-full flex justify-between items-center">
            <Link
              to="/profile/property/listings"
              className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
            >
              <div className="w-full flex items-center justify-between">
                <RiBuilding2Line className="text-6xl text-darkblue" />
                <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-20 bg-darkgray p-2 rounded-full">
                  {PropertyList?.length}
                </p>
              </div>
              <div className="w-full flex-col flex items-start">
                <h3 className="text-3xl font-medium text-darkgray py-2  ">
                  Property Listing
                </h3>
              </div>
            </Link>

            {user.accountType === 0 && (
              <Link
                to="/profile/projects/listings"
                className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
              >
                <div className="w-full flex items-center justify-between">
                  <FaProjectDiagram className="text-6xl text-darkblue" />
                  <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-20 bg-darkgray p-2 rounded-full">
                    {ProjectList?.length}
                  </p>
                </div>
                <div className="w-full flex-col flex items-start">
                  <h3 className="text-3xl font-medium text-darkgray py-2  ">
                    Project Listing
                  </h3>
                </div>
              </Link>
            )}
            {user.accountType === 1 && (
              <Link
                to="/profile/home-loan"
                className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
              >
                <div className="w-full flex items-center justify-between">
                  <MdMonetizationOn className="text-6xl text-darkblue" />
                  <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-20 bg-darkgray p-2 rounded-full">
                    {HomeLoanList?.length}
                  </p>
                </div>
                <div className="w-full flex-col flex items-start">
                  <h3 className="text-3xl font-medium text-darkgray py-2  ">
                    Home Loan
                  </h3>
                </div>
              </Link>
            )}
            <a
              href="/awaas-assist#instant-assistance"
              className="w-1/3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
            >
              <div className="w-full">
                <MdHelp className="text-6xl text-darkblue" />
              </div>
              <div className="w-full flex-col flex items-start">
                <h3 className="text-3xl font-medium text-darkgray py-2  ">
                  Help
                </h3>
              </div>
            </a>
          </div>
        </div>
      </main>

      <main className=" lg:hidden w-full min-h-screen bg-white relative  items-center justify-between pt-16 pb-12 ">
        <Sidebar />
        <div className="lg:w-4/5 w-full h-full p-8 mt-4">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <Link
              to="/profile/property/listings"
              className="w-full h-48 mb-3 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
            >
              <div className="w-full flex items-center justify-between">
                <RiBuilding2Line className="text-6xl text-darkgray" />
                <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-5 bg-darkgray p-2 rounded-full">
                  {PropertyList?.length}
                </p>
              </div>
              <div className="w-full flex-col flex items-start">
                <p className="text-3xl font-medium text-darkgray py-2  ">
                  Property Listing
                </p>
              </div>
            </Link>

            {user.accountType === 0 && (
              <Link
                to="/profile/projects/listings"
                className="w-full my-3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
              >
                <div className="w-full flex items-center justify-between">
                  <FaProjectDiagram className="text-6xl text-darkgray" />
                  <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-5 bg-darkgray p-2 rounded-full">
                    {ProjectList?.length}
                  </p>
                </div>
                <div className="w-full flex-col flex items-start">
                  <p className="text-3xl font-medium text-darkgray py-2  ">
                    Project Listing
                  </p>
                </div>
              </Link>
            )}

            {user.accountType === 1 && (
              <Link
                to="/profile/projects/listings"
                className="w-full my-3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
              >
                <div className="w-full flex items-center justify-between">
                  <MdMonetizationOn className="text-6xl text-darkgray" />
                  <p className="text-3xl w-16 text-white flex justify-center items-center h-16 font-medium mr-5 bg-darkgray p-2 rounded-full">
                    {HomeLoanList?.length}
                  </p>
                </div>
                <div className="w-full flex-col flex items-start">
                  <p className="text-3xl font-medium text-darkgray py-2  ">
                    Home Loan
                  </p>
                </div>
              </Link>
            )}

            <a
              href="/awaas-assist#instant-assistance"
              className="w-full my-3 h-48 border-1 border-lightblue mx-4 rounded-3xl flex flex-col justify-center items-center p-8 cursor-pointer hover:shadow-lg transform transition-shadow"
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
    </Layout>
  );
};

export default Profile;
