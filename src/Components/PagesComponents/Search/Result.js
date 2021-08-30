import React, { useState } from "react";
import axios from "axios";
import { API } from "../../../API";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../../Redux/_features/_FliterSlice";
import Loader from "../../Preloader/Loader";

const Result = ({ PropertyFor }) => {
  const [SearchResult, setSearchResult] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { search } = useLocation();
  const {
    parentProperty,
    propertyType,
    property_for,
    // locality,
    parent_type,
    bedroom,
    property_type,
    awaas_verify,
    photos,
    furnished_status,
    mini_area,
    max_area,
    max_budget,
    mini_budget,
    locality_id,
  } = queryString.parse(search);

  const Filter = useSelector(selectFilter);
  let cancelToken;

  const FetchQuery = async () => {
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();
    try {
      setisLoading(true);
      const res = await axios.get(
        `${API}/property/search`,
        {
          params: {
            parent_type: parent_type,
            property_for: property_for,
            // city: "panipat",
            locality_id: locality_id,
            photos: photos,
            bedroom: bedroom,
            awaas_verify: awaas_verify,
            furnished_status: furnished_status,
            mini_area: mini_area,
            max_area: max_area,
            mini_budget: mini_budget,
            max_budget: max_budget,
            property_type: property_type,
          },
        },
        { cancelToken: cancelToken.token }
      );
      // console.log(res);
      setSearchResult(res.data.data);
      if (res.status === 200) {
        setisLoading(false);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    FetchQuery();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [
    Filter,
    bedroom,
    property_type,
    photos,
    awaas_verify,
    furnished_status,
    property_for,
    max_area,
    mini_area,
    mini_budget,
    max_budget,
    parent_type,
    locality_id,
  ]);
  return (
    <div className="lg:w-72percent w-full min-h-screen  h-auto flex flex-col items-start  my-4">
      {/* <p className="text-sm text-widgetborder ">Home > Property in Panipat</p> */}
      {isLoading && <Loader />}
      <p className="text-2xl text-darkgray my-2 leading-8 capitalize">
        {SearchResult?.length} results |{parentProperty} | {propertyType} for
        {property_for === "buy" && " sale"} in Panipat Above {mini_budget} with
        Photo
      </p>
      <div className="w-full h-full flex flex-col ">
        {SearchResult.map((item, index) => (
          <div
            //
            key={index}
            className="bg-white lg:h-64 w-full lg:p-4 p-2 rounded-md shadow-md border-b-4 border-blue  my-4"
          >
            <div className="w-full  h-full flex">
              {item.photos === null ? (
                <img
                  className="h-full w-30percent object-cover rounded"
                  src="/assets/images/search/palceholder.jpg"
                  alt=""
                />
              ) : (
                <img
                  className="h-full w-30percent object-cover rounded"
                  // src="/assets/images/search/1.jpg"
                  src={`${JSON.parse(item?.photos)}`}
                  alt=""
                />
              )}

              <div className="lg:ml-4 ml-2 w-70percent flex flex-col ">
                <div className="w-full lg:my-2 my-1 flex flex-col items-start border-b-1 border-dashed border-navborder lg:pb-2">
                  <h5 className="lg:text-base text-sm  text-widgetborder capitalize ">
                    {item?.city}
                  </h5>
                  <h3 className="lg:text-2xl text-xl lg:py-1  font-medium text-darkgray capitalize">
                    {item?.title}
                  </h3>
                  <div className="flex my-1 flex-wrap justify-between w-full lg:w-3/4">
                    {item?.configuration.map((item, index) => (
                      <div key={index} className="flex flex-col  lg:w-auto ">
                        <h5 className="lg:text-sm text-xs text-blue capitalize">
                          {item?.title}
                        </h5>
                        <p
                          className="font-medium lg:text-lg text-sm
                         capitalize"
                        >
                          {item?.title === "price" && <span>&#8377; </span>}
                          {item?.val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <span className=" line-clamp-1 text-xs mb-2 lg:text-base  capitalize w-11/12 text-widgetborder">
                    {item?.description}
                  </span>
                </div>
                <div className="flex h-full justify-between items-center w-full">
                  <p className="lg:text-base text-xs text-blue font-medium capitalize flex flex-col lg:flex-row">
                    <span>Posted On - </span> {item?.date}
                  </p>

                  <Link
                    to={`property/${item.property_for}/${item.p_id}`}
                    className="bg-green rounded lg:px-4 px-3 lg:py-2 py-1 font-medium lg:text-base text-sm text-white"
                  >
                    View Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
