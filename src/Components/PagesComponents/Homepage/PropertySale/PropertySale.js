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
    const res = await axios.get(`${API}/property/list/sale`);

    if (res.status === 200) {
      setPropertyList(res.data.data);
    }
  };

  const GetImgUrl = (str) => {
    var list = str.split(",");
    return list;
  };

  useEffect(() => {
    FetchPropertyList();
  }, []);

  return (
    <section className="w-full h-full  bg-textbg py-4 ">
      <div className="customContainer ">
        <Header Title="Properties for sale" />
        <div className="w-full h-auto flex justify-center items-center my-10">
          {PropertyList.length !== 0 ? (
            <OwlCarousel loop items={2} nav={true} margin={30}>
              {PropertyList.map((item) => (
                <div
                  style={{
                    height: "438px",
                  }}
                  key={item.p_id}
                  className="w-full h-full"
                >
                  <div className="w-full h-72 relative">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://codeiator.com/${GetImgUrl(item.photos)[0]}`}
                      alt=""
                    />
                    <div
                      style={{
                        background: "rgba(0, 0, 0, 0.1)",
                      }}
                      className="w-full h-full absolute top-0"
                    ></div>
                  </div>
                  <div className="w-full h-2/5 bg-white mx-auto">
                    <div className="relative p-5">
                      <p
                        style={{
                          lineHeight: "20px",
                          borderBottom: "1px solid #7070702E",
                        }}
                        className="text-xl font-semibold pb-4 capitalize  "
                      >
                        {item.property_type} For Sale
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-base font-medium capitalize text-lightgray py-2">
                          {item.city} : {item.locality}
                        </p>
                        <p className="text-2xl text-blue font-medium">
                          &#8377; {item.total_price}
                        </p>
                      </div>
                      <Link
                        className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                        to="/"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertySale;
