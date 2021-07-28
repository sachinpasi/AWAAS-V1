import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

import SearchWidget from "./SearchWidget";

const Banner = ({ setisLoading }) => {
  const [Data, setData] = useState([]);
  const [BannerURL, setBannerURL] = useState("");

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/ads-list`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
      setisLoading(false);
    }
  };

  console.log(BannerURL);

  useEffect(() => {
    FetchData();

    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      style={{
        height: "580px",
      }}
      className="w-full relative"
    >
      <div
        style={{
          height: "580px",
        }}
        className="w-full relative "
      >
        {Data.length !== 0 && (
          <Carousel
            dynamicHeight={true}
            autoPlay={true}
            autoFocus={true}
            showThumbs={false}
            showStatus={false}
            emulateTouch={true}
            infiniteLoop={true}
            showIndicators={false}
            onChange={() => setBannerURL("")}
          >
            {Data?.map((item) => (
              <div
                key={item.id}
                style={{
                  height: "580px ",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full "
              >
                {BannerURL ? (
                  <img
                    style={{
                      maxHeight: "580px",
                    }}
                    className="object-cover h-full w-full"
                    src={BannerURL}
                    alt=""
                  />
                ) : (
                  <img
                    style={{
                      maxHeight: "580px",
                    }}
                    className="object-cover h-full w-full"
                    src={item.banner_image_path}
                    alt=""
                  />
                )}

                <div
                  style={{
                    background: "rgba(0,0,0,0.2)",
                  }}
                  className=" w-full h-full absolute top-0 "
                >
                  <div
                    style={{
                      top: "35%",
                    }}
                    className="absolute left-32 text-white z-10 flex flex-col justify-center items-start"
                  >
                    <p
                      style={{
                        textShadow: "2px 3px 5px #000",
                      }}
                      className="text-5xl  font-medium   "
                    >
                      {item.title}
                    </p>
                    <div className="flex justify-start items-center py-4">
                      <MdLocationOn className="text-blue text-3xl font-medium" />
                      <p
                        style={{
                          textShadow: "2px 3px 5px #000",
                        }}
                        className="text-white text-lg font-medium"
                      >
                        {item?.locality}, {item?.city}
                      </p>{" "}
                    </div>
                    <div className=" flex justify-start items-center  my-2 ">
                      {item?.library.map((thumb, index) => (
                        <div
                          key={index}
                          onClick={() => setBannerURL(thumb)}
                          className="mx-1 w-24 border-4 rounded-sm border-white shadow-2xl cursor-pointer
                      "
                        >
                          {/* {console.log(thumb)} */}
                          {/* {thumb} */}
                          <img
                            className="object-cover h-16 w-auto "
                            key={index}
                            src={thumb}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-full flex justify-end items-end  ">
                    <Link
                      className="border-4 border-white  text-white bg-blue text-xl font-medium rounded  px-8 py-3  mb-32 mr-20"
                      to={`/projects/${item?.id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>

      <div>
        <SearchWidget />
      </div>
    </section>
  );
};

export default Banner;
