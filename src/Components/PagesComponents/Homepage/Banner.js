import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";

const Banner = () => {
  const [Data, setData] = useState();

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/id/16`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  console.log(Data);

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      style={{
        background: `url(https://codeiator.com/${
          Data?.parent?.banner_image &&
          JSON.parse(Data?.parent?.banner_image)[0]
        })`,
        height: "580px",
        backgroundSize: "cover",
      }}
      className="w-full relative"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-full absolute z-0"
      >
        <div className="customContainer h-full flex justify-center items-start flex-col relative ">
          <div className="w-2/5">
            <p
              style={{
                lineHeight: "60px",
              }}
              className="text-white text-6xl "
            >
              {Data?.parent?.title}
            </p>
            <p className="text-white text-base pl-1 py-2"></p>

            <div className="flex justify-between items-center w-11/12 py-2">
              <div className="cursor-pointer flex justify-center items-center">
                <img
                  className="object-cover w-32 h-16 mx-1 rounded-md border-1 border-white"
                  src={`https://codeiator.com/${
                    Data?.parent_child[0]?.child[0]?.space_images &&
                    JSON.parse(Data?.parent_child[0]?.child[0].space_images)[0]
                  }`}
                  alt=""
                />
                <img
                  className="object-cover w-32 h-16 mx-1 rounded-md border-1 border-white"
                  src={`https://codeiator.com/${
                    Data?.parent_child[1]?.child[0]?.plot_images &&
                    JSON.parse(Data?.parent_child[1]?.child[0].plot_images)[0]
                  }`}
                  alt=""
                />
                <img
                  className="object-cover w-32 h-16 mx-1 rounded-md border-1 border-white"
                  src={`https://codeiator.com/${
                    Data?.parent_child[2]?.child[0]?.commercial_images &&
                    JSON.parse(
                      Data?.parent_child[2]?.child[0].commercial_images
                    )[0]
                  }`}
                  alt=""
                />
                {/* <img
                  className="object-cover w-32 h-16 mx-1 rounded-md border-1 border-white"
                  src="/assets/images/homepage/banner/4.png"
                  alt=""
                /> */}
              </div>
            </div>
          </div>

          <div className="h-36 absolute -bottom-24 w-full bg-white rounded shadow-lg flex justify-center items-center flex-col">
            <div className="w-3/4 mx-auto flex justify-center items-center my-2">
              <NavItem Name="buy" Active />
              <NavItem Name="Rent" />
              <NavItem Name="Projects" />
              <NavItem Name="SELL / LIST" />
            </div>

            <div className="w-11/12 mx-auto flex justify-center items-center my-2">
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center border-widgetborder"
                  name=""
                  id=""
                >
                  <option value="">Panipat</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center border-widgetborder"
                  name=""
                  id=""
                >
                  <option value="">Locality</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center border-widgetborder"
                  name=""
                  id=""
                >
                  <option value="">Property Type</option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-1  w-full h-full flex items-center justify-center border-widgetborder"
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
