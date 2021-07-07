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
        <Header Title="Properties for Rent" hidden />
        <div className="w-full h-auto grid grid-cols-2 gap-8 my-10">
          {PropertyList.length !== 0 ? (
            <>
              {PropertyList.slice(0, 4).map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex justify-between items-center h-72 my-4"
                >
                  <div className="w-2/4 h-3/4 relative ">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://codeiator.com/${GetImgUrl(item.photos)[0]}`}
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-3/4 bg-white flex-col flex justify-center items-start p-4">
                    <p
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Rent
                    </p>
                    <p className="text-sm font-medium py-2">
                      At {item.locality}, {item.city}
                    </p>
                    <p className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.expected_rent}
                    </p>
                    <Link
                      className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                      to={`property/${item.property_for}/${item.p_id}`}
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
          -
        </div>
      </div>
    </section>
  );
};

export default PropertyRent;
