import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";

import SearchWidget from "./SearchWidget";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import MobileSearchWidget from "./MobileSearchWidget";

const Banner = ({ setisLoading }) => {
  const [Data, setData] = useState([]);
  const [BannerURL, setBannerURL] = useState("");
  const [MobileBannerURL, setMobileBannerURL] = useState("");

  SwiperCore.use([Autoplay, Pagination, Navigation]);

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
    <>
      <section
        style={{
          height: "580px",
        }}
        className="hidden lg:flex flex-col w-full relative"
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
              interval={6000}
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
                        {item?.library.slice(0, 5).map((thumb, index) => (
                          <div
                            key={index}
                            onClick={() => setBannerURL(thumb)}
                            className="mx-1 w-36 border-4 rounded-sm border-white shadow-2xl cursor-pointer
                      "
                          >
                            {/* {console.log(thumb)} */}
                            {/* {thumb} */}
                            <img
                              className="object-cover h-20 w-auto  "
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

      <section className="w-full h-full lg:hidden">
        <div className="w-full h-full pt-20">
          <Swiper
            onSlideChange={() => setMobileBannerURL("")}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
          >
            {Data?.map((item, index) => (
              <SwiperSlide
                key={index}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                className="w-full h-full  flex flex-col items-start "
              >
                <div className="w-90vw mx-auto h-auto  flex-col flex justify-center items-start">
                  <p className="text-darkgray text-3xl font-medium">
                    {item.title}
                  </p>
                  <div className="flex justify-start items-center py-1">
                    <MdLocationOn className="text-blue text-2xl font-medium" />
                    <p className="text-darkgray text-lg font-medium">
                      {item?.locality}, {item?.city}
                    </p>
                  </div>
                </div>
                <div className="w-full h-280px my-2">
                  {MobileBannerURL ? (
                    <img src={MobileBannerURL} alt="" />
                  ) : (
                    <img src={item.banner_image_path} alt="" />
                  )}
                </div>
                <div className=" w-90vw mx-auto flex justify-start flex-wrap items-center ">
                  {item?.library.slice(0, 3).map((thumb, index) => (
                    <div
                      key={index}
                      onClick={() => setMobileBannerURL(thumb)}
                      className="m-1 h-16 w-1/4  rounded-sm   cursor-pointer
                      "
                    >
                      <img
                        className="object-cover w-auto border-2 "
                        key={index}
                        src={thumb}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <MobileSearchWidget />
      </section>
    </>
  );
};

export default Banner;
