import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../API";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import Loader from "../../Components/Preloader/Loader";
import { selectUser } from "../../Redux/_features/_userSlice";
import { GrValidate } from "react-icons/gr";

const ProfilePropertyListing = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(null);

  const [PropertyList, setPropertyList] = useState([]);
  const user = useSelector(selectUser);

  const DeleteModal = () => (
    <>
      <div
        onClick={() => setisDeleteModalOpen(null)}
        className="bg-black bg-opacity-50 fixed w-full h-screen top-0 bottom-0 right-0 left-0 z-50 r"
      ></div>

      <div className="fixed z-50 top-2/4 left-2/4 -translate-x-2/4 transform -translate-y-2/4 lg:w-500 w-90vw lg:h-60 h-80 bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center ">
        <div>
          <p className="text-darkgray font-semibold text-4xl">Are You Sure ?</p>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center mt-8 ">
          <button
            onClick={() => DeletePropertyById(isDeleteModalOpen)}
            className="px-8 w-40 py-2 bg-red rounded-3xl text-white font-medium text-xl mx-2 my-2"
          >
            Confirm
          </button>{" "}
          <button
            onClick={() => setisDeleteModalOpen(null)}
            className="px-8 w-40 py-2 bg-gray-400 rounded-3xl text-white font-medium text-xl mx-2 my-2"
          >
            Discard
          </button>
        </div>
      </div>
    </>
  );

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

  const DeletePropertyById = async (id) => {
    const res = await axios.get(`${API}/property/delete/${id}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res);
    if (res.status === 200) {
      FetchPropertyListing();
      setisDeleteModalOpen(false);
      return toast.success("Property Deleted Sucessfully");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    FetchPropertyListing();
  }, []);

  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format(" Do MMM YYYY, h:mm:ss a");
    return date;
  };
  return (
    <Layout>
      {isDeleteModalOpen && <DeleteModal />}
      <main className="w-full min-h-screen bg-white relative flex  justify-between ">
        <Sidebar />
        {isLoading && <Loader />}
        <div className="lg:w-4/5 mx-auto h-full w-90vw lg:p-8 pt-36 lg:pt-8 ">
          <div>
            <p className="text-3xl lg:w-80 w-72 border-b-2  border-green pb-4">
              Your Property Listings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 w-full justify-center items-center my-4">
            {PropertyList.map((item) => {
              const Photo = JSON.parse(item?.photos)[0];
              return (
                <div className="w-full bg-white shadow-lg lg:h-44 h-44 rounded-2xl flex justify-between items-center p-3">
                  <div className="w-3/12  h-full rounded-2xl overflow-hidden ">
                    {Photo ? (
                      <img
                        className="w-full  h-full object-center object-cover"
                        src={JSON.parse(item?.photos)[0]}
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
                          {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                          {item.property_type} for {item.property_for}
                          {item?.validated ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              class="text-xl ml-2 "
                            >
                              <path
                                fill="none"
                                stroke=""
                                stroke-width="2"
                                className="text-green"
                                d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"
                              ></path>
                            </svg>
                          ) : (
                            ""
                          )}
                        </p>

                        <span className=" inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-800">
                          {item.locality_name} - {item.city}
                        </span>
                        {item.validated === 0 && (
                          <span className="bg-yellow-300 text-xs font-medium text-white w-28 flex justify-center rounded-xl py-0.5 my-2">
                            ! Under Validation
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
                        to={`/profile/property/listings/${item.p_id}`}
                        className="w-20 lg:py-1 py-1 mr-1 bg-green border-1 border-green font-medium text-white text-center  rounded-md"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => setisDeleteModalOpen(item.p_id)}
                        className="w-20 lg:py-1 py-1 ml-1 border-1 border-red text-red font-medium   rounded-md "
                      >
                        Delete
                      </button>
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

export default ProfilePropertyListing;
