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
      <div className="customContainer ">
        <Header Title="Properties for sale" hidden />
        <div className="w-full h-auto grid grid-cols-4 gap-4 my-4">
          {PropertyList.length !== 0 ? (
            <>
              {PropertyList.map((item) => (
                <div
                  key={item.p_id}
                  className="w-full flex flex-col justify-between items-center h-auto my-4"
                >
                  {console.log(item)}
                  <div className="w-full h-3/4 relative ">
                    {item?.photos && (
                      <img
                        className="w-full h-full object-cover"
                        src={`https://codeiator.com/awaas/public/storage/property/images/${
                          JSON.parse(item.photos)[0]
                        }`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="w-full h-3/4 bg-white flex-col flex justify-center items-start p-4">
                    <p
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="text-xl font-semibold py-2 w-full capitalize"
                    >
                      {item.bedroom && item.bedroom} {item.bedroom && "BHK"}{" "}
                      {item.property_type} For Sale
                    </p>
                    <p className="text-sm font-medium py-2">
                      {item.city} : {item.locality}
                    </p>
                    <p className="text-2xl font-semibold text-blue py-2">
                      {" "}
                      &#8377; {item.total_price}
                    </p>
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
      </div>
    </section>
  );
};

export default PropertySale;
