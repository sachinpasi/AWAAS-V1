import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../API";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";
import Loader from "../../Components/Preloader/Loader";
import { selectUser } from "../../Redux/_features/_userSlice";

const ProfileHomeLoan = () => {
  const [HomeLoanList, setHomeLoanList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const user = useSelector(selectUser);

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
  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format(" Do MMM YYYY, h:mm:ss a");
    return date;
  };

  useEffect(() => {
    FetchHomeLoanList();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="w-full min-h-screen bg-white relative flex  justify-between ">
        <Sidebar />
        {isLoading && <Loader />}
        <div className="lg:w-4/5 w-full h-full p-8 pt-36 lg:pt-8 ">
          <div>
            <p className="text-3xl lg:w-96 w-full border-b-2  border-green pb-4">
              Your Home Loan Application
            </p>
          </div>
          <div className="hidden  flex-col">
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
                          Application Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Mobile No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Applied On
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {HomeLoanList.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap  ">
                            <div className="flex items-center ">
                              <div className="">
                                <div className="text-sm font-medium text-gray-900  ">
                                  {item.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="flex items-center">
                              <div className="">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap ">
                            <div className="text-sm text-gray-900">
                              {item.mobile}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-800">
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {getDate(item.created_at)}
                          </td>
                          <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              to={`/profile/home-loan/${item.id}`}
                              className="text-white font-medium py-2 px-6 bg-green rounded"
                            >
                              Track Progress
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

          <div className="w-full grid my-4">
            {HomeLoanList.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white lg:h-28 my-2 rounded-xl shadow-lg lg:p-4 p-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between items-start"
              >
                <div className=" flex-col flex lg:items-center my-1">
                  <p className="uppercase text-sm font-medium ">
                    Application Id
                  </p>
                  <p className="whitespace-nowrap text-sm text-gray-500">
                    {item.id}
                  </p>
                </div>
                <div className="flex-col flex lg:items-center my-1">
                  <p className="uppercase text-sm font-medium">
                    Applicant Name
                  </p>
                  <p className="text-base text-gray-500">{item.name}</p>
                </div>

                <div className="flex-col flex lg:items-center my-1">
                  <p className="uppercase text-sm font-medium ">Status</p>
                  <span className=" inline-flex text-sm leading-5 font-semibold capitalize rounded-full bg-green-100 text-gray-500">
                    {item.status}
                  </span>
                </div>
                <div className="flex-col flex lg:items-center my-1">
                  <p className="uppercase text-sm font-medium">Applied On</p>
                  <td className="whitespace-nowrap text-sm text-gray-500">
                    {getDate(item.created_at)}
                  </td>
                </div>
                <div className=" lg:hidden flex-col flex h-10 bg-green mt-4 ">
                  <Link
                    to={`/profile/home-loan/${item.id}`}
                    className=" font-medium py-2 px-6 bg-white border-green border-1 text-green rounded hover:bg-green hover:text-white transform transition-colors"
                  >
                    Track Progress
                  </Link>
                </div>
                <div className="  hidden lg:flex text-sm font-medium">
                  <Link
                    to={`/profile/home-loan/${item.id}`}
                    className=" font-medium py-2 px-6 bg-white border-green border-1 text-green rounded hover:bg-green hover:text-white transform transition-colors"
                  >
                    Track Progress
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfileHomeLoan;
