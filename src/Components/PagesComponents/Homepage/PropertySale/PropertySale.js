import React, { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";

import "../Projects/Project.css";
import { API } from "../../../../API";
import Header from "../../../Common/Header";
import { Link } from "react-router-dom";

const PropertySale = () => {
  const [PropertyList, setPropertyList] = useState([]);

  const FetchPropertyList = async () => {
    const res = await axios.get(`${API}/property/list/sell`);

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
      <div className="hidden w-80vw mx-auto lg:grid ">
        <Header Title="Properties for sale" hidden />

        <div className=" w-full h-450px grid grid-cols-4 gap-4 my-4">
          {PropertyList.length !== 0 ? (
            <>
              {PropertyList.map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex flex-col justify-between items-center h-450px my-4"
                >
                  <Link
                    to={`/property/${item.property_for}/${item.p_id}`}
                    className="w-full h-2/4 relative "
                  >
                    {item?.photos && (
                      <img
                        className="w-full h-full object-cover"
                        src={JSON.parse(item.photos)[0]}
                        alt="banner_img"
                      />
                    )}
                  </Link>
                  <div className="w-full h-2/4 bg-white flex-col flex justify-center items-start p-4">
                    <h3
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Sale
                    </h3>
                    <h3 className="text-sm font-medium py-2 capitalize">
                      {item.city} : {item.locality_name}
                    </h3>
                    <h4 className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.total_price}
                    </h4>
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
            to="/search?property_for=sell"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More...
          </Link>
        </div>
      </div>

      <div className="w-90vw mx-auto lg:hidden ">
        <Header Title="Properties for sale" />

        <div className=" w-full h-450px  my-4">
          {PropertyList.length !== 0 ? (
            <OwlCarousel loop items={1} nav={true}>
              {PropertyList.map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex flex-col justify-between items-center h-450px my-4"
                >
                  <div className="w-full h-2/4 relative ">
                    {item?.photos && (
                      <img
                        className="w-full h-full object-cover"
                        src={JSON.parse(item.photos)[0]}
                        alt="banner_img"
                      />
                    )}
                  </div>
                  <div className="w-full h-2/4 bg-white flex-col flex justify-center items-start p-4">
                    <h3
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Sale
                    </h3>
                    <h4 className="text-sm font-medium py-2 capitalize">
                      {item.city} : {item.locality_name}
                    </h4>
                    <h5 className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.total_price}
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
            to="/search?property_for=sell"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertySale;
