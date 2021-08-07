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

      <div className="fixed z-50 top-2/4 left-2/4 -translate-x-2/4 transform -translate-y-2/4 w-500 h-60 bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center ">
        <div>
          <p className="text-darkgray font-semibold text-4xl">Are You Sure ?</p>
        </div>
        <div className="flex justify-between items-center mt-8 ">
          <button
            onClick={() => DeletePropertyById(isDeleteModalOpen)}
            className="px-8 w-40 py-2 bg-red rounded-3xl text-white font-medium text-xl mx-2"
          >
            Confirm
          </button>{" "}
          <button
            onClick={() => setisDeleteModalOpen(null)}
            className="px-8 w-40 py-2 bg-gray-400 rounded-3xl text-white font-medium text-xl mx-2"
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
        <div className="lg:w-4/5 w-full h-full p-8 pt-36 lg:pt-8 ">
          <div>
            <p className="text-3xl w-80 border-b-2  border-green pb-4">
              Your Property Listings
            </p>
          </div>
          <div className="hidden flex flex-col">
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
                          Property Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Property Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                        >
                          Sell / Rent
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
                      {PropertyList.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap  ">
                            <div className="flex items-center ">
                              <div className="">
                                <div className="text-sm font-medium text-gray-900  ">
                                  {item.p_id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="">
                                <div className="text-sm font-medium capitalize text-gray-900">
                                  {item.bedroom && item.bedroom}{" "}
                                  {item.bedroom && "BHK"} {item.property_type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="text-sm text-gray-900 uppercase">
                              {item.property_for}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-800">
                              {item.locality_name} - {item.city}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {getDate(item.created_at)}
                          </td>
                          <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => setisDeleteModalOpen(item.p_id)}
                              className="text-white font-medium py-2 px-6 bg-red rounded"
                            >
                              Delete
                            </button>
                          </td>
                          <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              to={`/profile/property/listings/${item.p_id}`}
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

          <div className="grid grid-cols-2 gap-4 w-full justify-center items-center my-4">
            {PropertyList.map((item) => (
              <div className="w-full bg-green h-40 rounded-2xl flex justify-between items-center p-4">
                {console.log(item)}
                <div className="w-3/12 bg-blue h-full rounded-2xl overflow-hidden ">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={JSON.parse(item?.photos)[0]}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfilePropertyListing;
