import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [Data, setData] = useState([]);
  const [Thumbnails, setThumbnails] = useState([]);
  const [BannerURL, setBannerURL] = useState("");

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/list`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  console.log(BannerURL);
  const FetchThumbnails = async () => {
    const res = await axios.get(`${API}/projects/id/16`);
    console.log(res.data.data);
    if (res.status === 200) {
      setThumbnails(res.data.data.library);
    }
  };

  useEffect(() => {
    FetchData();
    FetchThumbnails();
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
        <Carousel
          dynamicHeight={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={false}
          onChange={() => setBannerURL("")}
        >
          {Data?.map((item) => (
            <div
              to={`/projects/${item?.id}`}
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
                  src={`https://codeiator.com/${
                    JSON.parse(item.banner_image)[0]
                  }`}
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
                    top: "40%",
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
                  <div className="flex justify-start items-center py-2">
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
                  <div className=" flex justify-start items-center w-1/3  my-4 ">
                    {Thumbnails?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          setBannerURL(`https://codeiator.com/${item}`)
                        }
                        className="mx-1 border-4 rounded-sm border-white shadow-2xl cursor-pointer
                      "
                      >
                        <img
                          className="object-cover h-16 w-auto "
                          key={index}
                          src={`https://codeiator.com/${item}`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div>
        <div className="customContainer h-full flex justify-center items-start flex-col relative ">
          <div className=" h-36 absolute -bottom-24 w-full bg-white rounded shadow-lg flex justify-center items-center flex-col">
            <div className="w-3/4 mx-auto flex justify-center items-center my-2">
              <NavItem Name="buy" Active />
              <NavItem Name="Rent" />
              <NavItem Name="Projects" />
              <NavItem Name="SELL / LIST" />
            </div>

            <div className="w-11/12 mx-auto flex justify-center items-center my-2">
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none "
                  name=""
                  id=""
                >
                  <option value="">Panipat</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none "
                  name=""
                  id=""
                >
                  <option value="">Locality</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none "
                  name=""
                  id=""
                >
                  <option value="">Property Type</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-1  w-full h-full flex items-center justify-center px-4 outline-none "
                  name=""
                  id=""
                >
                  <option value="">Budget</option>
                </select>
              </div>
            </div>

            <div className="w-11/12 mx-auto flex justify-center items-center my-2">
              <button
                className="cursor-pointer h-14 w-52 bg-blue text-1xl font-medium text-white  flex justify-center items-center"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

const NavItem = ({ Name, Active }) => (
  <div
    style={{
      marginRight: "0.05rem",
      marginLeft: "0.05rem",
    }}
    className={` cursor-pointer h-14 w-full  flex justify-center items-center ${
      Active ? `bg-blue shadow-lg` : `bg-lightblue`
    }`}
  >
    <p className="text-white text-lg uppercase font-medium">{Name}</p>
  </div>
);
