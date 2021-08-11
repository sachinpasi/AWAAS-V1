import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../API";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import Loader from "../../Components/Preloader/Loader";
import { selectUser } from "../../Redux/_features/_userSlice";

const ProfileProjectListing = () => {
  const [isLoading, setisLoading] = useState(false);
  const [ProjectList, setProjectList] = useState([]);
  const user = useSelector(selectUser);
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

  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format(" Do MMM YYYY, h:mm:ss a");
    return date;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchProjectListing();
  }, []);

  return (
    <Layout>
      <main className="w-full min-h-screen bg-white relative flex  justify-between ">
        <Sidebar />
        {isLoading && <Loader />}
        <div className="lg:w-4/5 mx-auto h-full w-90vw lg:p-8 pt-36 lg:pt-8 ">
          <div>
            <p className="text-3xl w-80 border-b-2  border-green pb-4">
              Your Projects Listings
            </p>
          </div>
          {/* <div className="flex flex-col">
            <div className=" my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Project Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Project Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Rera
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Locality - City
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Posted On
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {ProjectList.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap  ">
                            <div className="flex items-center ">
                              <div className="">
                                <div className="text-sm font-medium text-gray-900  ">
                                  {item.project_id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="text-sm text-gray-900">
                              {item.rera}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-800">
                              {item.locality} - {item.city}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {getDate(item.created_at)}
                          </td>
                          <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              to={`/profile/projects/listings/${item.id}`}
                              className="text-white font-medium py-2 px-6 bg-green rounded"
                            >
                              View Details
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
         */}

          <div className="grid lg:grid-cols-2 gap-4 w-full justify-center items-center my-4">
            {ProjectList.map((item) => {
              const Photo = item?.banner_image_path;

              return (
                <div
                  key={item.id}
                  className="w-full bg-white shadow-lg lg:h-40 h-44 rounded-2xl flex justify-between items-center p-3"
                >
                  <div className="w-3/12  h-full rounded-2xl overflow-hidden ">
                    {Photo ? (
                      <img
                        className="w-full  h-full object-center object-cover"
                        src={Photo}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-full h-full object-center object-cover"
                        src="/assets/images/search/palceholder.jpg"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="w-9/12 h-full lg:pl-4 pl-2 lg:py-2 flex flex-col justify-between">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                      <div className=" flex-col flex text-gray-900">
                        <p className="text-base lg:text-lg font-medium uppercase flex items-center">
                          {item.title}
                          {item?.validated ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              className="text-xl ml-2 "
                            >
                              <path
                                fill="none"
                                stroke=""
                                strokeWidth="2"
                                className="text-green"
                                d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"
                              ></path>
                            </svg>
                          ) : (
                            ""
                          )}
                        </p>

                        <span className=" inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-800">
                          {item.locality} - {item.city}
                        </span>
                        {item.validated === 0 && (
                          <span className="bg-yellow-300 text-xs font-medium text-white w-28 flex justify-center rounded-xl py-0.5 my-2">
                            Under Validation
                          </span>
                        )}
                      </div>
                      <div className=" flex-col flex items-end ">
                        <p className="text-sm">Posted on</p>
                        <p className=" whitespace-nowrap text-sm  text-gray-500">
                          {getDate(item.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end w-full items-center">
                      <Link
                        to={`/profile/projects/listings/${item.id}`}
                        className="w-20 lg:py-1 py-1 mr-1 bg-green border-1 border-green font-medium text-white text-center  rounded-md"
                      >
                        View
                      </Link>
                      {/* <button
                        onClick={() => setisDeleteModalOpen(item.p_id)}
                        className="w-20 lg:py-1 py-1 ml-1 border-1 border-red text-red font-medium   rounded-md "
                      >
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfileProjectListing;
