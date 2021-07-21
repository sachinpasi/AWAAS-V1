import React, { useState } from "react";
import axios from "axios";
import { API } from "../../../API";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";

const Result = () => {
  const [SearchResult, setSearchResult] = useState([]);
  const { search } = useLocation();
  const { parentProperty, propertyType, locality, max, min } =
    queryString.parse(search);

  const FetchQuery = async () => {
    const res = await axios.post(`${API}/property/search`, {
      parent_type: parentProperty,
      city: "panipat",
    });
    console.log(res);
    setSearchResult(res.data.data);
  };

  useEffect(() => {
    FetchQuery();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="w-72percent  h-auto flex flex-col items-start  my-4">
      <p className="text-sm text-widgetborder ">Home > Property in Panipat</p>
      <p className="text-2xl text-darkgray my-2 leading-8 capitalize">
        {SearchResult?.length} results |{parentProperty} / {propertyType} for
        Sale in Panipat Above {min} with Photo
      </p>
      <div className="w-full h-full flex flex-col ">
        {SearchResult.map((item, index) => (
          <div
            key={index}
            className="bg-white h-64 w-full p-4 rounded-md shadow-md border-b-4 border-blue cursor-pointer my-4"
          >
            <div className="w-full  h-full flex">
              <img
                className="h-full w-30percent object-cover rounded"
                src="/assets/images/search/1.jpg"
                alt=""
              />
              <div className="ml-4 w-70percent flex flex-col ">
                <div className="w-full my-2 flex flex-col items-start border-b-1 border-dashed border-navborder pb-2">
                  <p className="text-sm  text-widgetborder capitalize ">
                    3 Bedroom Independent House in Samardha
                  </p>
                  <p className="text-2xl py-1  font-medium text-darkgray capitalize">
                    Sahib Prithvi Courtyard
                  </p>
                  <div className="flex my-1 justify-between w-3/4">
                    <div className="flex flex-col">
                      <p className="text-sm text-blue">Price</p>
                      <p className="font-medium text-lg">
                        &#8377; 39.51 - 44.51
                        <span className="font-normal ml-1 text-base text-lightgray">
                          Lac
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-blue">Area</p>
                      <p className="font-medium text-lg">
                        1320-1640
                        <span className="font-normal ml-1 text-base text-lightgray">
                          Sq.ft
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-blue">Room</p>
                      <p className="font-medium text-lg">3BHK</p>
                    </div>
                  </div>

                  <p className=" line-clamp-1 capitalize w-11/12 text-widgetborder">
                    Sahib prithvi courtyard in samardha, bhopal by sahib
                    developers is a residential project. The project offers
                    villa with perfect combination of contemporary architecture
                    and features to provide comfortable living. The villa are of
                    the following configurations: 3bhk. The area of the villa is
                    from 95.97 sq. Mt to 135.17 sq. Mt Sahib prithvi courtyard
                    offers facilities such as gymnasium.It also has...
                  </p>
                </div>
                <div className="flex h-full justify-between items-center w-full">
                  <p className="text-base text-blue font-medium capitalize">
                    Posted On - 02-july-2021 by Builder
                  </p>

                  <button className="bg-green rounded px-4 py-2 font-medium text-white">
                    Contact Builder
                  </button>
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
