import React, { useState } from "react";
import axios from "axios";
import { API } from "../../../API";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../../Redux/_features/_FliterSlice";

const Result = ({ PropertyFor }) => {
  const [SearchResult, setSearchResult] = useState([]);
  const { search } = useLocation();
  const {
    parentProperty,
    propertyType,
    property_for,
    locality,
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
      const res = await axios.get(
        `${API}/property/search`,
        {
          params: {
            property_type: parent_type,
            property_for: property_for,
            city: "panipat",
            locality_id: locality,
            photos: photos,
            bedroom: bedroom,
            awaas_verify: awaas_verify,
            furnished_status: furnished_status,
            mini_area: mini_area,
            max_area: max_area,
            mini_budget: mini_budget,
            max_budget: max_budget,
          },
        },
        { cancelToken: cancelToken.token }
      );
      console.log(res);
      setSearchResult(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchQuery();
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
  ]);
  return (
    <div className="w-72percent  h-auto flex flex-col items-start  my-4">
      {/* <p className="text-sm text-widgetborder ">Home > Property in Panipat</p> */}
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
            className="bg-white h-64 w-full p-4 rounded-md shadow-md border-b-4 border-blue  my-4"
          >
            <div className="w-full  h-full flex">
              {item.single_image === null ? (
                <img
                  className="h-full w-30percent object-cover rounded"
                  src="/assets/images/search/palceholder.jpg"
                  alt=""
                />
              ) : (
                <img
                  className="h-full w-30percent object-cover rounded"
                  // src="/assets/images/search/1.jpg"
                  src={`${item.single_image}`}
                  alt=""
                />
              )}

              <div className="ml-4 w-70percent flex flex-col ">
                <div className="w-full my-2 flex flex-col items-start border-b-1 border-dashed border-navborder pb-2">
                  <p className="text-base  text-widgetborder capitalize ">
                    {item?.city}
                  </p>
                  <p className="text-2xl py-1  font-medium text-darkgray capitalize">
                    {item?.title}
                  </p>
                  <div className="flex my-1 justify-between w-3/4">
                    {item?.configuration.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="text-sm text-blue capitalize">
                          {item?.title}
                        </p>
                        <p className="font-medium text-lg capitalize">
                          {item?.title === "price" && <span>&#8377; </span>}
                          {item?.val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className=" line-clamp-1 capitalize w-11/12 text-widgetborder">
                    {item?.description}
                  </p>
                </div>
                <div className="flex h-full justify-between items-center w-full">
                  <p className="text-base text-blue font-medium capitalize">
                    Posted On - {item?.date}
                  </p>

                  <Link
                    to={`property/${item.property_for}/${item.p_id}`}
                    className="bg-green rounded px-4 py-2 font-medium text-white"
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
