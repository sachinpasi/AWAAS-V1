import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { API } from "../../API";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import { selectUser } from "../../Redux/_features/_userSlice";
import Currency from "react-currency-formatter";
import Loader from "../../Components/Preloader/Loader";

import {
  HiOutlineShieldCheck,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";
import { RiBankLine } from "react-icons/ri";
import { GrDocument } from "react-icons/gr";

const ProfileHomeLoanDetails = () => {
  const [HomeLoanDetials, setHomeLoanDetails] = useState();
  const [isLoading, setisLoading] = useState(false);

  const user = useSelector(selectUser);
  const { id } = useParams();

  const FetchHomeLoanList = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/list-home-loan-application`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.status === 200) {
      res?.data?.data?.forEach((item) => {
        if (item.id === parseInt(id)) {
          setHomeLoanDetails(item);
          setisLoading(false);
        }
      });
    }
  };

  console.log(HomeLoanDetials);
  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format(" DD MMM YYYY");
    return date;
  };

  useEffect(() => {
    FetchHomeLoanList();
  }, []);
  return (
    <Layout>
      <main className="w-full min-h-screen bg-white relative flex  justify-between ">
        <Sidebar />
        {isLoading && <Loader />}
        <div className="w-4/5 h-full p-8 ">
          <div>
            <p className="text-3xl w-500 border-b-2  border-green pb-4">
              Home Loan Application Details
            </p>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="flex items-center justify-center my-12">
              <div
                className={`w-20 h-20 rounded-full  -mr-4 relative bg-blue flex justify-center items-center ${
                  HomeLoanDetials?.status ===
                  "We have recieved your application"
                    ? "bg-blue"
                    : ""
                }`}
              >
                <HiOutlineDocumentDuplicate
                  className={`${
                    HomeLoanDetials?.status ===
                    "We have recieved your application"
                      ? ""
                      : ""
                  } text-3xl text-white `}
                />
                <p className="font-medium uppercase text-lg absolute -bottom-10 left-2/4  transform -translate-x-2/4">
                  Received
                </p>
              </div>
              <div
                className={`w-64 h-3  ${
                  HomeLoanDetials?.status ===
                  "Document Verification Under process"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-20 h-20 -mx-4 rounded-full bg-gray-300 relative flex justify-center items-center ${
                  HomeLoanDetials?.status ===
                  "Document Verification Under process"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              >
                <HiOutlineShieldCheck
                  className={`text-4xl  ${
                    HomeLoanDetials?.status ===
                    "Document Verification Under process"
                      ? "text-white"
                      : "text-darkgray"
                  }`}
                />
                <p className="font-medium uppercase text-lg absolute -bottom-10 left-2/4  transform -translate-x-2/4 whitespace-nowrap">
                  Verfication Under Process
                </p>
              </div>{" "}
              <div
                className={`w-64 h-3  ${
                  HomeLoanDetials?.status === "Application submitted to Bank"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-20 h-20 -mx-4 rounded-full bg-gray-300 relative flex justify-center items-center ${
                  HomeLoanDetials?.status === "Application submitted to Bank"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              >
                <RiBankLine
                  className={`text-3xl text-darkgray ${
                    HomeLoanDetials?.status === "Application submitted to Bank"
                      ? "text-white"
                      : "text-darkgray"
                  }`}
                />
                <p className="font-medium uppercase text-lg absolute -bottom-10 left-2/4  transform -translate-x-2/4 whitespace-nowrap">
                  Submitted To Bank
                </p>
              </div>
              <div
                className={`w-64 h-3  ${
                  HomeLoanDetials?.status === "Loan Has Been approved"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-20 h-20 -ml-4 rounded-full bg-gray-300 relative flex justify-center items-center ${
                  HomeLoanDetials?.status === "Loan Has Been approved"
                    ? "bg-blue"
                    : "bg-gray-300"
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill={`${
                    HomeLoanDetials?.status === "Loan Has Been approved"
                      ? "#292929"
                      : ""
                  }`}
                  stroke-width="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enable-background="new 0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-4xl text-darkgray"
                >
                  <polygon
                    fill={`${
                      HomeLoanDetials?.status === "Loan Has Been approved"
                        ? "#292929"
                        : ""
                    }`}
                    points="24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"
                  ></polygon>
                  <polygon
                    fill="#ffffff"
                    points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
                  ></polygon>
                </svg>
                <p className="font-medium uppercase text-lg absolute -bottom-10 left-2/4  transform -translate-x-2/4 whitespace-nowrap">
                  Approved
                </p>
              </div>
            </div>
            <div className="w-full h-full my-8 ">
              <div className="flex items-center my-1">
                <Tag TagName="Name  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.name} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Father's Name  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.father_name} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Mother's Name  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.mother_name} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Date Of Birth  " />
                <p className="w-8">:</p>
                <TagData Data={getDate(HomeLoanDetials?.dob)} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Mobile Number  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.mobile} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Gender  " />
                <p className="w-8">:</p>
                {HomeLoanDetials?.gender === "M" && <TagData Data="Male" />}
                {HomeLoanDetials?.gender === "F" && <TagData Data="Female" />}
                {HomeLoanDetials?.gender === "O" && <TagData Data="Other" />}
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Category  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.category} />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Resident " />
                <p className="w-8">:</p>
                {HomeLoanDetials?.residential_status === "res" && (
                  <TagData Data="Resident of India" />
                )}
                {HomeLoanDetials?.residential_status === "NRI" && (
                  <TagData Data="NRI" />
                )}
                {HomeLoanDetials?.residential_status === "foreign-national" && (
                  <TagData Data="Foreign National" />
                )}
              </div>

              <div className="flex items-center my-1">
                <Tag TagName="Marital Status  " />
                <p className="w-8">:</p>
                <TagData Data={HomeLoanDetials?.marital_status} />
              </div>
              {HomeLoanDetials?.spouse_name !== null && (
                <div className="flex items-center my-1">
                  <Tag TagName="Spouse Name  " />
                  <p className="w-8">:</p>
                  <TagData Data={HomeLoanDetials?.spouse_name} />
                </div>
              )}
              <div className="flex items-center my-1">
                <Tag TagName=" Present Address " />
                <p className="w-8">:</p>
                <TagData
                  Data={`${HomeLoanDetials?.present_address_line_1}, ${HomeLoanDetials?.present_address_line_2}, ${HomeLoanDetials?.present_city}, ${HomeLoanDetials?.present_pincode}`}
                />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName=" Permanent Address " />
                <p className="w-8">:</p>
                <TagData
                  Data={`${HomeLoanDetials?.parmanent_address_line_1}, ${HomeLoanDetials?.parmanent_address_line_2}, ${HomeLoanDetials?.parmanent_city}, ${HomeLoanDetials?.parmanent_pincode}`}
                />
              </div>
              <div className="flex items-center my-1">
                <Tag TagName="Annual Income  " />
                <p className="w-8">:</p>
                <p className="text-lg ml-2 capitalize">
                  <Currency
                    quantity={HomeLoanDetials?.annual_income}
                    currency="INR"
                  />
                </p>
              </div>

              {HomeLoanDetials?.child?.length !== 0 && (
                <>
                  {HomeLoanDetials?.child?.map((item, index) => (
                    <div>
                      <p className="capitalize w-52 font-medium text-2xl my-8 border-b-2 border-blue pb-2">
                        Co-Applicant - {index + 1}
                      </p>
                      <div className="flex items-center my-1">
                        <Tag TagName="Name  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.name} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Father's Name  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.father_name} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Mother's Name  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.mother_name} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Date Of Birth  " />
                        <p className="w-8">:</p>
                        <TagData Data={getDate(item?.dob)} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Mobile Number  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.mobile} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Gender  " />
                        <p className="w-8">:</p>
                        {item?.gender === "M" && <TagData Data="Male" />}
                        {item?.gender === "F" && <TagData Data="Female" />}
                        {item?.gender === "O" && <TagData Data="Other" />}
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Category  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.category} />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Resident " />
                        <p className="w-8">:</p>
                        {item?.residential_status === "res" && (
                          <TagData Data="Resident of India" />
                        )}
                        {item?.residential_status === "NRI" && (
                          <TagData Data="NRI" />
                        )}
                        {item?.residential_status === "foreign-national" && (
                          <TagData Data="Foreign National" />
                        )}
                      </div>

                      <div className="flex items-center my-1">
                        <Tag TagName="Marital Status  " />
                        <p className="w-8">:</p>
                        <TagData Data={item?.marital_status} />
                      </div>
                      {item?.spouse_name !== null && (
                        <div className="flex items-center my-1">
                          <Tag TagName="Spouse Name  " />
                          <p className="w-8">:</p>
                          <TagData Data={item?.spouse_name} />
                        </div>
                      )}
                      <div className="flex items-center my-1">
                        <Tag TagName=" Present Address " />
                        <p className="w-8">:</p>
                        <TagData
                          Data={`${item?.present_address_line_1}, ${item?.present_address_line_2}, ${item?.present_city}, ${item?.present_pincode}`}
                        />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName=" Permanent Address " />
                        <p className="w-8">:</p>
                        <TagData
                          Data={`${item?.parmanent_address_line_1}, ${item?.parmanent_address_line_2}, ${item?.parmanent_city}, ${item?.parmanent_pincode}`}
                        />
                      </div>
                      <div className="flex items-center my-1">
                        <Tag TagName="Annual Income  " />
                        <p className="w-8">:</p>
                        <p className="text-lg ml-2 capitalize">
                          <Currency
                            quantity={item?.annual_income}
                            currency="INR"
                          />
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfileHomeLoanDetails;

const Tag = ({ TagName }) => (
  <p className="text-lg font-medium w-44 capitalize">{TagName}</p>
);
const TagData = ({ Data }) => (
  <p className="text-lg ml-2 capitalize"> {Data}</p>
);
