import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from "react-multilevel-dropdown";
import { Link } from "react-router-dom";

import "./Banner.css";

const Banner = () => {
  const [Data, setData] = useState([]);
  const [Thumbnails, setThumbnails] = useState([]);
  const [BannerURL, setBannerURL] = useState("");

  const [ParentPropertyType, setParentPropertyType] = useState("");
  const [CurrentTab, setCurrentTab] = useState("BUY");
  const [PropertyType, setPropertyType] = useState("Property Type");
  const [BudgetMin, setBudgetMin] = useState(0);
  const [BudgetMax, setBudgetMax] = useState(0);

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/ads-list`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  console.log(BannerURL);

  const BudgetMinItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMin(title)}
      value={Value}
    >
      {title}
    </li>
  );
  const BudgetMaxItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMax(title)}
      value={Value}
    >
      {title}
    </li>
  );

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
                    {item?.library.map((thumb, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          setBannerURL(`https://codeiator.com/${thumb}`)
                        }
                        className="mx-1 border-4 rounded-sm border-white shadow-2xl cursor-pointer
                      "
                      >
                        {/* {console.log(thumb)} */}
                        {/* {thumb} */}
                        <img
                          className="object-cover h-16 w-auto "
                          key={index}
                          src={`https://codeiator.com/${thumb}`}
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
                  disabled
                >
                  <option value="">Panipat</option>
                </select>
              </div>
              <div className="w-full h-14">
                <input
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none placeholder-darkgray "
                  name=""
                  id=""
                  placeholder="Locality"
                ></input>
              </div>
              <div className="w-full h-14">
                <div className=" border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center outline-none ">
                  <Dropdown
                    wrapperClassName="SelectWrapper"
                    buttonClassName="SelectButton"
                    menuClassName="Menu"
                    title={`${PropertyType}`}
                  >
                    <Dropdown.Item className="Item">
                      Residential
                      {/* <ArrowRight /> */}
                      <Dropdown.Submenu position="right" className="Submenu">
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Land");
                            setParentPropertyType("Residential");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Villa");
                            setParentPropertyType("Residential");
                          }}
                          className="Item"
                        >
                          Villa/House
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Flat");
                            setParentPropertyType("Residential");
                          }}
                          className="Item"
                        >
                          Flat/Apartment
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Floor");
                            setParentPropertyType("Residential");
                          }}
                          className="Item"
                        >
                          Floor
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Farmhouse");
                            setParentPropertyType("Residential");
                          }}
                          className="Item"
                        >
                          Farmhouse
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item className="Item">
                      Commercial
                      {/* <ArrowRight /> */}
                      <Dropdown.Submenu position="right" className="Submenu">
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Land");
                            setParentPropertyType("Commercial");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Shop");
                            setParentPropertyType("Commercial");
                          }}
                          className="Item"
                        >
                          Shop/Showroom
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Officespace");
                            setParentPropertyType("Commercial");
                          }}
                          className="Item"
                        >
                          Officespace
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item className="Item">
                      Industrial
                      {/* <ArrowRight /> */}
                      <Dropdown.Submenu position="right" className="Submenu">
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Land");
                            setParentPropertyType("Industrial");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Factory");
                            setParentPropertyType("Industrial");
                          }}
                          className="Item"
                        >
                          Factory/Builtup
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("Shop");
                            setParentPropertyType("Industrial");
                          }}
                          className="Item"
                        >
                          Shop/Showroom
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                  </Dropdown>
                  {/* <ArrowDown /> */}
                </div>
              </div>
              <div className="w-full h-14 border-1 ">
                <Dropdown
                  wrapperClassName="SelectWrapper"
                  buttonClassName="SelectButton"
                  menuClassName="MenuBudegt"
                  title={
                    BudgetMin || BudgetMax
                      ? `${BudgetMin} - ${BudgetMax}`
                      : "Budget"
                  }
                >
                  <Dropdown.Item className="ItemBudget">
                    <div className="w-2/4 border-r-1">
                      <ul className="list-none m-0 p-0 text-center">
                        Min
                        <BudgetMinItem Value="1000000" title="10 Lacs" />
                        <BudgetMinItem Value="2000000" title="20 Lacs" />
                        <BudgetMinItem Value="3000000" title="30 Lacs" />
                        <BudgetMinItem Value="4000000" title="40 Lacs" />
                        <BudgetMinItem Value="5000000" title="50 Lacs" />
                        <BudgetMinItem Value="6000000" title="60 Lacs" />
                        <BudgetMinItem Value="7000000" title="70 Lacs" />
                        <BudgetMinItem Value="8000000" title="80 Lacs" />
                        <BudgetMinItem Value="9000000" title="90 Lacs" />
                        <BudgetMinItem Value="10000000" title="1 Cr" />
                        <BudgetMinItem Value="15000000" title="1.5 Cr" />
                        <BudgetMinItem Value="20000000" title="2 Cr" />
                        <BudgetMinItem Value="30000000" title="3 Cr" />
                        <BudgetMinItem Value="40000000" title="4 Cr" />
                        <BudgetMinItem Value="50000000" title="5 Cr" />
                        <BudgetMinItem Value="60000000" title="6 Cr" />
                        <BudgetMinItem Value="70000000" title="7 Cr" />
                        <BudgetMinItem Value="80000000" title="8 Cr" />
                      </ul>
                    </div>
                    <div className="w-2/4">
                      <ul className="list-none m-0 p-0 text-center">
                        Max
                        <BudgetMaxItem Value="1500000" title="15 Lacs" />
                        <BudgetMaxItem Value="2500000" title="25 Lacs" />
                        <BudgetMaxItem Value="3500000" title="35 Lacs" />
                        <BudgetMaxItem Value="4500000" title="45 Lacs" />
                        <BudgetMaxItem Value="5500000" title="55 Lacs" />
                        <BudgetMaxItem Value="6500000" title="65 Lacs" />
                        <BudgetMaxItem Value="7500000" title="75 Lacs" />
                        <BudgetMaxItem Value="8500000" title="85 Lacs" />
                        <BudgetMaxItem Value="9500000" title="95 Lacs" />
                        <BudgetMaxItem Value="15000000" title="1.5 Cr" />
                        <BudgetMaxItem Value="25000000" title="2.5 Cr" />
                        <BudgetMaxItem Value="35000000" title="3.5 Cr" />
                        <BudgetMaxItem Value="45000000" title="4.5 Cr" />
                        <BudgetMaxItem Value="55000000" title="5.5 Cr" />
                        <BudgetMaxItem Value="65000000" title="6.5 Cr" />
                        <BudgetMaxItem Value="75000000" title="7.5 Cr" />
                        <BudgetMaxItem Value="85000000" title="8.5 Cr" />
                        <BudgetMaxItem Value="90000000" title="9 Cr" />
                      </ul>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
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
