import React from "react";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";

import Header from "../../../Common/Header";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../../../API";

const PropertyRent = () => {
  const [PropertyList, setPropertyList] = useState([]);

  const FetchPropertyList = async () => {
    const res = await axios.get(`${API}/property/list/rent`);

    if (res.status === 200) {
      setPropertyList(res.data.data);
    }
  };

  // const GetImgUrl = (str) => {
  //   var list = str.split(",");
  //   return list;
  // };

  useEffect(() => {
    FetchPropertyList();
  }, []);
  return (
    <section className="w-full h-full  bg-textbg py-4 ">
      <div className="w-80vw mx-auto  hidden lg:grid">
        <Header Title="Properties for Rent" hidden />
        <div className="w-full h-auto grid grid-cols-2 gap-8 mt-10">
          {PropertyList.length !== 0 ? (
            <>
              {PropertyList.slice(0, 2).map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex justify-between items-center h-72 my-4"
                >
                  {/* {console.log(item)} */}
                  <Link
                    to={`/property/${item.property_for}/${item.p_id}`}
                    style={{
                      width: "60%",
                    }}
                    className="h-3/4 relative "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={item?.photos && JSON.parse(item?.photos)[0]}
                      alt="banner_img"
                    />
                  </Link>
                  <div
                    style={{
                      width: "40%",
                    }}
                    className="w-2/4 h-3/4 bg-white flex-col flex justify-center items-start p-4"
                  >
                    <h3
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Rent
                    </h3>
                    <h4 className="text-sm font-medium py-2 capitalize">
                      At {item.locality_name}, {item.city}
                    </h4>
                    <h5 className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.expected_rent}
                    </h5>
                    <Link
                      className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                      to={`/property/${item.property_for}/${item.p_id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex justify-end w-full py-4">
          <Link
            to="/search?property_for=rent"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More..
          </Link>
        </div>
      </div>

      <div className="w-90vw mx-auto lg:hidden">
        <Header Title="Properties for Rent" />
        <div className="w-full h-auto ">
          {PropertyList.length !== 0 ? (
            <OwlCarousel loop items={1} nav={true}>
              {PropertyList.map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex flex-col justify-between items-center my-4"
                >
                  <Link
                    to={`/property/${item.property_for}/${item.p_id}`}
                    className="w-full relative h-60 "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={item?.photos && JSON.parse(item?.photos)[0]}
                      alt="banner_img"
                    />
                  </Link>
                  <div className="w-full h-2/4 bg-white flex-col flex justify-center items-start p-4">
                    <h3
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Rent
                    </h3>
                    <h4 className="text-sm font-medium py-2 capitalize">
                      At {item.locality_name}, {item.city}
                    </h4>
                    <h5 className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.expected_rent}
                    </h5>
                    <Link
                      className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                      to={`/property/${item.property_for}/${item.p_id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="flex justify-end w-full py-4">
          <Link
            to="/search?property_for=rent"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More..
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyRent;
