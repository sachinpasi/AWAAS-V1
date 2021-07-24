import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../API";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from "react-multilevel-dropdown";
import { Link, useHistory } from "react-router-dom";

import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../Redux/_features/_userSlice";
import { SET_LOGIN_MODAL_OPEN } from "../../../Redux/_features/_LoginModalSlice";

const Banner = () => {
  const [Data, setData] = useState([]);
  const [BannerURL, setBannerURL] = useState("");
  const [LocalityList, setLocalityList] = useState([]);
  const [PARAMS, setPARAMS] = useState();
  console.log(PARAMS);
  const history = useHistory();
  const [Locality, setLocality] = useState();
  const [ParentPropertyType, setParentPropertyType] = useState("");
  const [CurrentTab, setCurrentTab] = useState("sell");
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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const HandlePostProperty = () => {
    if (user.isLoggedIn) {
      history.push("/post-property");
    } else {
      dispatch(
        SET_LOGIN_MODAL_OPEN({
          isLoginModalOpen: true,
        })
      );
    }
  };

  console.log(BannerURL);

  const BudgetMinItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMin(Value)}
      value={Value}
    >
      {title}
    </li>
  );
  const BudgetMaxItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMax(Value)}
      value={Value}
    >
      {title}
    </li>
  );

  const FetchLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };
  useEffect(() => {
    FetchLocality();
  }, []);

  useEffect(() => {
    FetchData();

    window.scrollTo(0, 0);
  }, []);

  const HandleSearch = () => {
    history.push({ pathname: "/search", search: PARAMS });
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (CurrentTab) {
      params.append("propertyFor", CurrentTab);
    } else {
      params.delete("propertyFor");
    }
    if (Locality) {
      params.append("locality", Locality);
    } else {
      params.delete("locality");
    }

    if (PropertyType !== "Property Type") {
      params.append("propertyType", PropertyType);
    } else {
      params.delete("propertyType");
    }
    if (ParentPropertyType) {
      params.append("parentProperty", ParentPropertyType);
    } else {
      params.delete("parentProperty");
    }
    if (BudgetMin) {
      params.append("min", BudgetMin);
    } else {
      params.delete("min");
    }

    if (BudgetMax) {
      params.append("max", BudgetMax);
    } else {
      params.delete("max");
    }

    setPARAMS(params.toString());
  }, [
    Locality,
    PropertyType,
    BudgetMin,
    BudgetMax,
    ParentPropertyType,
    history,
    CurrentTab,
  ]);

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
        <div className="customContainer h-full flex justify-center items-start flex-col relative ">
          <div className=" h-36 absolute -bottom-24 w-full bg-white rounded shadow-lg flex justify-center items-center flex-col">
            <div className="w-3/4 mx-auto flex justify-center items-center my-2">
              <NavItem
                Name="buy"
                Active={CurrentTab === "sell"}
                onClick={() => setCurrentTab("sell")}
              />
              <NavItem
                Name="rent"
                Active={CurrentTab === "rent"}
                onClick={() => setCurrentTab("rent")}
              />
              <NavItem Name="Projects" />
              <NavItem onClick={HandlePostProperty} Name="SELL / LIST" />
            </div>

            <div className="w-11/12 mx-auto flex justify-center items-center my-2">
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none "
                  disabled
                >
                  <option defaultChecked value="Panipat">
                    Panipat
                  </option>
                </select>
              </div>
              <div className="w-full h-14">
                <select
                  className="border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none placeholder-darkgray capitalize "
                  type="text"
                  placeholder="Locality"
                  value={Locality}
                  onChange={(e) => setLocality(e.target.value)}
                >
                  <option selected hidden>
                    Locality
                  </option>
                  {LocalityList.map((item) => (
                    <option
                      key={item.id}
                      className="capitalize"
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
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
                            setPropertyType("land");
                            setParentPropertyType("residential");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("villa");
                            setParentPropertyType("residential");
                          }}
                          className="Item"
                        >
                          Villa/House
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("flat");
                            setParentPropertyType("residential");
                          }}
                          className="Item"
                        >
                          Flat/Apartment
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("floor");
                            setParentPropertyType("residential");
                          }}
                          className="Item"
                        >
                          Floor
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("farmhouse");
                            setParentPropertyType("residential");
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
                            setPropertyType("land");
                            setParentPropertyType("commercial");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("shop");
                            setParentPropertyType("commercial");
                          }}
                          className="Item"
                        >
                          Shop/Showroom
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("officespace");
                            setParentPropertyType("commercial");
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
                            setPropertyType("land");
                            setParentPropertyType("industrial");
                          }}
                          className="Item"
                        >
                          Land/Plot
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("factory");
                            setParentPropertyType("industrial");
                          }}
                          className="Item"
                        >
                          Factory/Builtup
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setPropertyType("shop");
                            setParentPropertyType("industrial");
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
                onClick={HandleSearch}
                className="cursor-pointer h-14 w-52 bg-blue text-1xl font-medium text-white  flex justify-center items-center"
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

const NavItem = ({ Name, Active, onClick }) => (
  <div
    onClick={onClick}
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
