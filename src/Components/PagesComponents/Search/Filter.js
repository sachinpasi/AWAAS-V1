import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

import queryString from "query-string";
import "./Switch.css";
import { BsFilter } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Fuse from "fuse.js";
import axios from "axios";
import { API } from "../../../API";

const Filter = ({
  PropertyFor,
  Locality,
  ParentPropertyType,
  setParentPropertyType,
  PropertyType,
  setPropertyType,
  setPropertyFor,
  setLocality,
}) => {
  const [NoOfBedroom, setNoOfBedroom] = useState();
  // const [AreaMin, setAreaMin] = useState();
  // const [AreaMax, setAreaMax] = useState();

  const [isVerified, setisVerified] = useState(false);
  const [iswithPhoto, setiswithPhoto] = useState(false);
  const [FurnishedStatus, setFurnishedStatus] = useState();
  const [PARAMS, setPARAMS] = useState();
  const [isFilterOpen, setisFilterOpen] = useState(false);
  const [isAnyThingSelected, setisAnyThingSelected] = useState(false);

  const { search } = useLocation();

  const {
    property_for,
    locality_id,
    parent_type,
    property_type,
    mini_budget,
    max_budget,
  } = queryString.parse(search);

  const history = useHistory();

  const [BudgetMin, setBudgetMin] = useState(mini_budget);
  const [BudgetMax, setBudgetMax] = useState(max_budget);
  const [LocalityList, setLocalityList] = useState([]);

  useEffect(() => {
    // if (mini_budget) {
    //   setBudgetMin(mini_budget);
    // }
    // if (max_budget) {
    //   setBudgetMax(max_budget);
    // }
    if (!max_budget) {
      // setBudgetMax(90000000);
    }
  }, [mini_budget, max_budget]);

  useEffect(() => {
    if (property_type) {
      setPropertyType(property_type);
    }
  }, [property_type]);

  useEffect(() => {
    if (parent_type) {
      setParentPropertyType(parent_type);
    }
  }, [parent_type]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (window.outerWidth >= 1024) {
      if (PropertyFor) {
        if (PropertyFor) {
          params.append("property_for", PropertyFor);
        } else {
          params.delete("property_for");
        }
      } else {
        if (property_for) {
          params.append("property_for", property_for);
        } else {
          params.delete("property_for");
        }
      }
      if (Locality) {
        if (Locality) {
          params.append("locality_id", Locality);
        } else {
          params.delete("locality_id");
        }
      } else {
        if (locality_id) {
          params.append("locality_id", locality_id);
        } else {
          params.delete("locality_id");
        }
      }

      if (PropertyType) {
        if (PropertyType) {
          params.append("property_type", PropertyType);
        } else {
          params.delete("property_type");
        }
      } else {
        if (property_type) {
          params.append("property_type", property_type);
        } else {
          params.delete("property_type");
        }
      }

      // if (mini_budget) {
      //   params.append("mini_budget", mini_budget);
      // } else {
      //   params.delete("mini_budget");
      // }

      if (BudgetMin) {
        params.append("mini_budget", BudgetMin);
      } else {
        params.delete("mini_budget");
      }
      if (BudgetMax) {
        params.append("max_budget", BudgetMax);
      } else {
        params.delete("max_budget");
      }

      if (NoOfBedroom) {
        params.append("bedroom", NoOfBedroom);
      } else {
        params.delete("bedroom");
      }
      if (ParentPropertyType) {
        params.append("parent_type", ParentPropertyType);
      } else {
        params.delete("parent_type");
      }

      if (isVerified) {
        params.append("awaas_verify", isVerified);
      } else {
        params.delete("awaas_verify");
      }
      if (iswithPhoto) {
        params.append("photos", iswithPhoto);
      } else {
        params.delete("photos");
      }
      if (FurnishedStatus) {
        params.append("furnished_status", FurnishedStatus);
      } else {
        params.delete("furnished_status");
      }

      setPARAMS(params.toString());
      history.push({ pathname: "/search", search: params.toString() });
    }
  }, [
    mini_budget,
    BudgetMin,
    property_for,
    BudgetMax,
    property_type,
    parent_type,
    locality_id,
    NoOfBedroom,
    isVerified,
    iswithPhoto,
    FurnishedStatus,
    ParentPropertyType,
    PropertyFor,
    history,
    Locality,
    PropertyType,
  ]);

  const HandleApplyFilter = () => {
    setisFilterOpen(!isFilterOpen);
    const params = new URLSearchParams();
    if (PropertyFor) {
      if (PropertyFor) {
        params.append("property_for", PropertyFor);
      } else {
        params.delete("property_for");
      }
    } else {
      if (property_for) {
        params.append("property_for", property_for);
      } else {
        params.delete("property_for");
      }
    }
    if (Locality) {
      if (Locality) {
        params.append("locality_id", Locality);
      } else {
        params.delete("locality_id");
      }
    } else {
      if (locality_id) {
        params.append("locality_id", locality_id);
      } else {
        params.delete("locality_id");
      }
    }

    if (PropertyType) {
      if (PropertyType) {
        params.append("property_type", PropertyType);
      } else {
        params.delete("property_type");
      }
    } else {
      if (property_type) {
        params.append("property_type", property_type);
      } else {
        params.delete("property_type");
      }
    }

    // if (mini_budget) {
    //   params.append("mini_budget", mini_budget);
    // } else {
    //   params.delete("mini_budget");
    // }

    if (BudgetMin) {
      params.append("mini_budget", BudgetMin);
    } else {
      params.delete("mini_budget");
    }
    if (BudgetMax) {
      params.append("max_budget", BudgetMax);
    } else {
      params.delete("max_budget");
    }

    if (NoOfBedroom) {
      params.append("bedroom", NoOfBedroom);
    } else {
      params.delete("bedroom");
    }
    if (ParentPropertyType) {
      params.append("parent_type", ParentPropertyType);
    } else {
      params.delete("parent_type");
    }

    if (isVerified) {
      params.append("awaas_verify", isVerified);
    } else {
      params.delete("awaas_verify");
    }
    if (iswithPhoto) {
      params.append("photos", iswithPhoto);
    } else {
      params.delete("photos");
    }
    if (FurnishedStatus) {
      params.append("furnished_status", FurnishedStatus);
    } else {
      params.delete("furnished_status");
    }

    setPARAMS(params.toString());
    history.push({ pathname: "/search", search: params.toString() });
  };

  const HandleResetFilter = () => {
    setNoOfBedroom(null);
    setParentPropertyType(null);
    setBudgetMax(null);
    setBudgetMin(null);
    setisVerified(false);
    setiswithPhoto(false);
    setFurnishedStatus(null);
    const params = new URLSearchParams();
    params.delete("bedroom");
    params.delete("parent_type");
    params.delete("mini_budget");
    params.delete("max_budget");
    params.delete("awaas_verify");
    params.delete("photos");
    params.delete("furnished_status");

    history.push({ pathname: "/search", search: params.toString() });
    setisFilterOpen(!isFilterOpen);
  };

  const Option = ({ Value, title }) => (
    <option className="text-black" value={Value}>
      {title}
    </option>
  );

  const FetchLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };

  const options = LocalityList.map((_) => ({
    name: _.name,
    value: _.id,
  }));

  function fuzzySearch(options) {
    const fuse = new Fuse(options, {
      keys: ["name", "groupName", "items.name"],
      threshold: 0.3,
    });

    return (value) => {
      if (!value.length) {
        return options;
      }

      return fuse.search(value);
    };
  }
  useEffect(() => {
    FetchLocality();
  }, []);

  return (
    <>
      <div
        onClick={() => setisFilterOpen(!isFilterOpen)}
        className={`w-full h-full fixed bg-black bg-opacity-30 left-0 right-0 top-0 bottom-0  ${
          isFilterOpen ? "" : "hidden"
        }`}
      ></div>
      <div
        style={{
          transition: "ease-in-out 0.2s all",
        }}
        className={` w-full h-4/5 fixed bg-white left-0 right-0  z-30  px-4 overflow-y-scroll  ${
          isFilterOpen ? "bottom-0" : "-bottom-full"
        } `}
      >
        <div className="w-full flex justify-between items-center px-4 py-2 border-b-1">
          <div
            onClick={HandleResetFilter}
            className="capitalize py-1 px-4   text-darkgray font-medium  text-sm flex justify-center items-center"
          >
            Reset
          </div>
          <div
            onClick={HandleApplyFilter}
            className="capitalize py-1 px-4    text-darkgray font-medium  text-sm flex justify-center items-center"
          >
            Apply
          </div>
        </div>
        {/* <div className="w-full h-20"></div> */}
        <div className=" h-full w-full  flex flex-col items-start mt-10 ">
          <div className="w-full flex justify-between items-center my-1">
            <input
              defaultValue="Panipat"
              disabled
              className=" w-2/4 h-10 border-1  border-widgetborder rounded-full  cursor-not-allowed my-0.5  bg-white text-base text-darkgray  px-4"
            ></input>
          </div>
          <div className="w-full flex justify-between items-center my-1">
            <div className="dropdown bg-white border-1  border-widgetborder rounded-full inline-block  relative w-7/12 h-10">
              <button
                onMouseEnter={() => setisAnyThingSelected(false)}
                // onClick={() => setisAnyThingSelected(false)}
                className="w-full h-full text-darkgray py-2 px-4 rounded justify-between inline-flex items-center"
              >
                <span className="capitalize">
                  {PropertyType ? PropertyType : "Property Type"}
                </span>
                <BsChevronDown />
              </button>

              <ul
                id="div"
                className={`${
                  isAnyThingSelected ? "" : "dropdown-content"
                }   hidden absolute z-20 w-full  text-darkgray  shadow-xl rounded-lg `}
              >
                <li className="dropdown w-full rounded-t-lg">
                  <div className="rounded-t-lg cursor-pointer hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                    Residential
                  </div>
                  <ul className="dropdown-content rounded-lg hidden absolute z-10 w-40 shadow-xl  text-darkgray left-full  -mt-10">
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("land");
                          setParentPropertyType("residential");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white rounded-t-lg cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Land / Plot
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("villa");
                          setParentPropertyType("residential");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Villa / House
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("flat");
                          setParentPropertyType("residential");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Flat / Apartment
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("floor");
                          setParentPropertyType("residential");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Floor
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("farmhouse");
                          setParentPropertyType("residential");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white rounded-b-lg cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Farmhouse
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown w-full">
                  <div className=" cursor-pointer hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                    Commercial
                  </div>
                  <ul className="dropdown-content rounded-lg overflow-hidden hidden absolute w-40 shadow-xl  text-darkgray left-full  -mt-10">
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("land");
                          setisAnyThingSelected(true);
                          setParentPropertyType("commercial");
                        }}
                        className="bg-white  cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Land / Plot
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("shop");
                          setParentPropertyType("commercial");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Shop / Showroom
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("officespace");
                          setParentPropertyType("commercial");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Officespace
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown w-full rounded-b-lg">
                  <div className=" cursor-pointer rounded-b-lg hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                    Industrial
                  </div>
                  <ul className="dropdown-content rounded-lg   overflow-hidden hidden absolute w-40 shadow-xl  text-darkgray left-full  -mt-10">
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("land");
                          setParentPropertyType("industrial");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white  cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Land / Plot
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("factory");
                          setParentPropertyType("industrial");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Factory / Builtup
                      </div>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setPropertyType("shop");
                          setParentPropertyType("industrial");
                          setisAnyThingSelected(true);
                        }}
                        className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                      >
                        Shop / Showroom
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <select
              value={PropertyFor}
              onChange={(e) => setPropertyFor(e.target.value)}
              className="w-5/12 ml-4  h-10   text-base rounded-full px-2 border-widgetborder border-1"
            >
              <option value="sell">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="w-full flex justify-center items-center my-1">
            <div className=" w-full  flex border-1  border-widgetborder rounded-full h-10  items-center  ">
              <SelectSearch
                closeOnSelect
                onChange={(selected) => setLocality(selected)}
                options={options}
                placeholder="Search For Locality / Area / Sector"
                filterOptions={fuzzySearch}
                search
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center my-1 pb-2 ">
            {PropertyFor === "rent" ? (
              <div className="flex w-full justify-between ">
                <select
                  onChange={(e) => setBudgetMin(e.target.value)}
                  value={BudgetMin}
                  className="w-2/4 mr-2 text-darkgray h-10 border-1 rounded-full border-widgetborder  text-sm font-normal px-1"
                >
                  <option defaultChecked hidden value="">
                    Min Budget (in Rs)
                  </option>
                  <Option Value="2500" title="  2500" />
                  <Option Value="5000" title="  5000" />
                  <Option Value="10000" title="  10000" />
                  <Option Value="20000" title="  20000" />
                  <Option Value="30000" title="  30000" />
                  <Option Value="40000" title="  40000" />
                  <Option Value="50000" title=" 50000" />
                  <Option Value="60000" title=" 60000" />
                  <Option Value="70000" title=" 70000" />
                  <Option Value="80000" title=" 80000" />
                  <Option Value="90000" title=" 90000" />
                  <Option Value="100000" title=" 1 Lac" />
                  <Option Value="120000" title=" 1.2 Lac" />
                  <Option Value="140000" title=" 1.4 Lac" />
                  <Option Value="160000" title=" 1.6 Lac" />
                  <Option Value="180000" title=" 1.8 Lac" />
                  <Option Value="200000" title=" 2 Lac" />
                  <Option Value="250000" title=" 2.5 Lac" />
                  <Option Value="300000" title=" 3 Lac" />
                  <Option Value="350000" title=" 3.5 Lac" />
                  <Option Value="400000" title=" 4 Lac" />
                  <Option Value="500000" title=" 5 Lac" />
                </select>
                <select
                  onChange={(e) => setBudgetMax(e.target.value)}
                  value={BudgetMax}
                  className="w-2/4 ml-2 text-darkgray h-10 border-1 rounded-full border-widgetborder  text-sm font-normal px-1"
                >
                  <option defaultChecked hidden value="">
                    Max Budget (in Rs)
                  </option>
                  <Option Value="5000" title=" 5000" />
                  <Option Value="10000" title=" 10000" />
                  <Option Value="20000" title=" 20000" />
                  <Option Value="30000" title=" 30000" />
                  <Option Value="40000" title=" 40000" />
                  <Option Value="50000" title=" 50000" />
                  <Option Value="60000" title=" 60000" />
                  <Option Value="70000" title=" 70000" />
                  <Option Value="80000" title=" 80000" />
                  <Option Value="90000" title=" 90000" />
                  <Option Value="100000" title=" 1 Lac" />
                  <Option Value="120000" title=" 1.2 Lac" />
                  <Option Value="140000" title=" 1.4 Lac" />
                  <Option Value="160000" title=" 1.6 Lac" />
                  <Option Value="180000" title=" 1.8 Lac" />
                  <Option Value="200000" title=" 2 Lac" />
                  <Option Value="250000" title=" 2.5 Lac" />
                  <Option Value="300000" title=" 3 Lac" />
                  <Option Value="350000" title=" 3.5 Lac" />
                  <Option Value="400000" title=" 4 Lac" />
                  <Option Value="500000" title=" 5 Lac" />
                  <Option Value="600000" title=" 6 Lac" />
                </select>
              </div>
            ) : (
              <div className="flex w-full justify-between items-center ">
                <select
                  onChange={(e) => setBudgetMin(e.target.value)}
                  value={BudgetMin}
                  className="w-2/4 mr-2 text-darkgray h-10 border-1 rounded-full border-widgetborder  text-sm font-normal px-2"
                >
                  <option selected hidden value="100000000">
                    Min Budget (in Rs)
                  </option>
                  <Option Value="1000000" title=" 10 Lacs" />
                  <Option Value="2000000" title=" 20 Lacs" />
                  <Option Value="3000000" title=" 30 Lacs" />
                  <Option Value="4000000" title=" 40 Lacs" />
                  <Option Value="5000000" title=" 50 Lacs" />
                  <Option Value="6000000" title=" 60 Lacs" />
                  <Option Value="7000000" title=" 70 Lacs" />
                  <Option Value="8000000" title=" 80 Lacs" />
                  <Option Value="9000000" title=" 90 Lacs" />
                  <Option Value="10000000" title=" 1 Cr" />
                  <Option Value="15000000" title=" 1.5 Cr" />
                  <Option Value="20000000" title=" 2 Cr" />
                  <Option Value="30000000" title=" 3 Cr" />
                  <Option Value="40000000" title=" 4 Cr" />
                  <Option Value="50000000" title=" 5 Cr" />
                  <Option Value="60000000" title=" 6 Cr" />
                  <Option Value="70000000" title=" 7 Cr" />
                  <Option Value="80000000" title=" 8 Cr" />
                </select>
                <select
                  onChange={(e) => setBudgetMax(e.target.value)}
                  value={BudgetMax}
                  className="w-2/4 ml-2 px-2 text-darkgray h-10 border-1 rounded-full border-widgetborder  text-sm font-normal "
                >
                  <option defaultChecked hidden value="">
                    Max Budget (in Rs)
                  </option>
                  <Option Value="1500000" title=" 15 Lacs" />
                  <Option Value="2500000" title=" 25 Lacs" />
                  <Option Value="3500000" title=" 35 Lacs" />
                  <Option Value="4500000" title=" 45 Lacs" />
                  <Option Value="5500000" title=" 55 Lacs" />
                  <Option Value="6500000" title=" 65 Lacs" />
                  <Option Value="7500000" title=" 75 Lacs" />
                  <Option Value="8500000" title=" 85 Lacs" />
                  <Option Value="9500000" title=" 95 Lacs" />
                  <Option Value="15000000" title=" 1.5 Cr" />
                  <Option Value="25000000" title=" 2.5 Cr" />
                  <Option Value="35000000" title=" 3.5 Cr" />
                  <Option Value="45000000" title=" 4.5 Cr" />
                  <Option Value="55000000" title=" 5.5 Cr" />
                  <Option Value="65000000" title=" 6.5 Cr" />
                  <Option Value="75000000" title=" 7.5 Cr" />
                  <Option Value="85000000" title=" 8.5 Cr" />
                  <Option Value="90000000" title=" 9 Cr" />
                </select>
              </div>
            )}
          </div>

          <div className="w-full flex  flex-wrap items-center  border-t-1 py-1">
            <div
              onClick={() => setNoOfBedroom(1)}
              className={`${
                NoOfBedroom === 1
                  ? "bg-blue border-blue text-white"
                  : "border-widgetborder text-widgetborder"
              }  mr-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-full  my-1   text-sm font-medium px-4`}
            >
              <p>+ 1BHK</p>
            </div>
            <div
              onClick={() => setNoOfBedroom(2)}
              className={`${
                NoOfBedroom === 2
                  ? "bg-blue border-blue text-white"
                  : "border-widgetborder text-widgetborder"
              }  mr-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-full my-1   text-sm font-medium px-4`}
            >
              <p>+ 2BHK</p>
            </div>
            <div
              onClick={() => setNoOfBedroom(3)}
              className={`${
                NoOfBedroom === 3
                  ? "bg-blue border-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-full  my-1  text-sm font-medium px-4`}
            >
              <p>+ 3BHK</p>
            </div>
            <div
              onClick={() => setNoOfBedroom(4)}
              className={`${
                NoOfBedroom === 4
                  ? "bg-blue border-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-full my-1   text-sm font-medium px-4`}
            >
              <p>+ 4BHK</p>
            </div>
            <div
              onClick={() => setNoOfBedroom(5)}
              className={`${
                NoOfBedroom === 5
                  ? "bg-blue border-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-full my-1  text-sm font-medium px-4`}
            >
              <p>+ 5BHK</p>
            </div>
          </div>
          <div className="w-full flex items-start flex-col border-t-1 border-b-1 py-2 ">
            <div className="flex items-center justify-between w-full my-2 ">
              <div className=" text-darkgray font-medium ">
                Verfied Properties
              </div>
              <label for="toogleA" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    value={isVerified}
                    checked={isVerified}
                    onChange={() => setisVerified(!isVerified)}
                    id="toogleA"
                    type="checkbox"
                    className="sr-only"
                  />

                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </div>
            <div className="flex items-center justify-between w-full my-2">
              <div className=" text-darkgray font-medium ">
                Properties with Photos
              </div>
              <label for="toogleB" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    value={iswithPhoto}
                    checked={iswithPhoto}
                    onChange={() => setiswithPhoto(!iswithPhoto)}
                    id="toogleB"
                    type="checkbox"
                    className="sr-only"
                  />

                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
              </label>
            </div>
          </div>

          <div className="w-full flex flex-wrap py-4">
            <div
              onClick={() => setFurnishedStatus("Un-Furnished")}
              className={` ${
                FurnishedStatus === "Un-Furnished"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-1 cursor-pointer flex justify-center items-center h-10 border-1 rounded-full  text-sm font-medium px-2  w-full`}
            >
              <p> + Unfurnished</p>
            </div>
            <div
              onClick={() => setFurnishedStatus("Semi-Furnished")}
              className={` ${
                FurnishedStatus === "Semi-Furnished"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-1 cursor-pointer flex justify-center items-center h-10 border-1 rounded-full  text-sm font-medium px-2  w-full`}
            >
              <p> + Semifurnished</p>
            </div>
            <div
              onClick={() => setFurnishedStatus("Furnished")}
              className={` ${
                FurnishedStatus === "Furnished"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-1 cursor-pointer flex justify-center items-center h-10 border-1 rounded-full  text-sm font-medium px-2  w-full`}
            >
              <p> + Furnished</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed lg:hidden w-full h-16 bg-white bottom-0 left-0 right-0 border-t-1 z-40">
        <div className="w-11/12 mx-auto flex items-center h-full">
          <div
            onClick={() => setisFilterOpen(!isFilterOpen)}
            className="flex items-center justify-center bg-blue px-4 text-white rounded-full"
          >
            <BsFilter className="text-3xl mr-1 -ml-2 " />
            <p className="text-xl font-medium   text-white py-1 uppercase">
              Filter
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-3/12 relative ">
        <div
          className={`w-full sticky -top-96 h-auto bg-white my-4 rounded shadow-xl  `}
        >
          <div className="flex flex-col items-start p-4 px-5 ">
            <p className="text-3xl font-medium text-darkgray border-b-2 w-full pb-4 border-dashed">
              Fliter By
            </p>
            <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">Budget</p>

              {PropertyFor === "rent" ? (
                <div className="flex w-full justify-between my-4">
                  <select
                    onChange={(e) => setBudgetMin(e.target.value)}
                    value={BudgetMin}
                    className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-xs font-medium px-2"
                  >
                    <option defaultChecked hidden value="">
                      Min Budget (in Rs)
                    </option>
                    <Option Value="2500" title="  2500" />
                    <Option Value="5000" title="  5000" />
                    <Option Value="10000" title="  10000" />
                    <Option Value="20000" title="  20000" />
                    <Option Value="30000" title="  30000" />
                    <Option Value="40000" title="  40000" />
                    <Option Value="50000" title=" 50000" />
                    <Option Value="60000" title=" 60000" />
                    <Option Value="70000" title=" 70000" />
                    <Option Value="80000" title=" 80000" />
                    <Option Value="90000" title=" 90000" />
                    <Option Value="100000" title=" 1 Lac" />
                    <Option Value="120000" title=" 1.2 Lac" />
                    <Option Value="140000" title=" 1.4 Lac" />
                    <Option Value="160000" title=" 1.6 Lac" />
                    <Option Value="180000" title=" 1.8 Lac" />
                    <Option Value="200000" title=" 2 Lac" />
                    <Option Value="250000" title=" 2.5 Lac" />
                    <Option Value="300000" title=" 3 Lac" />
                    <Option Value="350000" title=" 3.5 Lac" />
                    <Option Value="400000" title=" 4 Lac" />
                    <Option Value="500000" title=" 5 Lac" />
                  </select>
                  <select
                    onChange={(e) => setBudgetMax(e.target.value)}
                    value={BudgetMax}
                    className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-xs font-medium px-2"
                  >
                    <option defaultChecked hidden value="">
                      Max Budget (in Rs)
                    </option>
                    <Option Value="5000" title=" 5000" />
                    <Option Value="10000" title=" 10000" />
                    <Option Value="20000" title=" 20000" />
                    <Option Value="30000" title=" 30000" />
                    <Option Value="40000" title=" 40000" />
                    <Option Value="50000" title=" 50000" />
                    <Option Value="60000" title=" 60000" />
                    <Option Value="70000" title=" 70000" />
                    <Option Value="80000" title=" 80000" />
                    <Option Value="90000" title=" 90000" />
                    <Option Value="100000" title=" 1 Lac" />
                    <Option Value="120000" title=" 1.2 Lac" />
                    <Option Value="140000" title=" 1.4 Lac" />
                    <Option Value="160000" title=" 1.6 Lac" />
                    <Option Value="180000" title=" 1.8 Lac" />
                    <Option Value="200000" title=" 2 Lac" />
                    <Option Value="250000" title=" 2.5 Lac" />
                    <Option Value="300000" title=" 3 Lac" />
                    <Option Value="350000" title=" 3.5 Lac" />
                    <Option Value="400000" title=" 4 Lac" />
                    <Option Value="500000" title=" 5 Lac" />
                    <Option Value="600000" title=" 6 Lac" />
                  </select>
                </div>
              ) : (
                <div className="flex w-full justify-between items-center my-4">
                  <select
                    onChange={(e) => setBudgetMin(e.target.value)}
                    value={BudgetMin}
                    className="w-2/4 mr-0.5 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-xs font-medium px-1"
                  >
                    <option selected hidden value="100000000">
                      Min Budget (in Rs)
                    </option>
                    <Option Value="1000000" title=" 10 Lacs" />
                    <Option Value="2000000" title=" 20 Lacs" />
                    <Option Value="3000000" title=" 30 Lacs" />
                    <Option Value="4000000" title=" 40 Lacs" />
                    <Option Value="5000000" title=" 50 Lacs" />
                    <Option Value="6000000" title=" 60 Lacs" />
                    <Option Value="7000000" title=" 70 Lacs" />
                    <Option Value="8000000" title=" 80 Lacs" />
                    <Option Value="9000000" title=" 90 Lacs" />
                    <Option Value="10000000" title=" 1 Cr" />
                    <Option Value="15000000" title=" 1.5 Cr" />
                    <Option Value="20000000" title=" 2 Cr" />
                    <Option Value="30000000" title=" 3 Cr" />
                    <Option Value="40000000" title=" 4 Cr" />
                    <Option Value="50000000" title=" 5 Cr" />
                    <Option Value="60000000" title=" 6 Cr" />
                    <Option Value="70000000" title=" 7 Cr" />
                    <Option Value="80000000" title=" 8 Cr" />
                  </select>
                  <select
                    onChange={(e) => setBudgetMax(e.target.value)}
                    value={BudgetMax}
                    className="w-2/4 ml-0.5 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-xs font-medium px-1"
                  >
                    <option defaultChecked hidden value="">
                      Max Budget (in Rs)
                    </option>
                    <Option Value="1500000" title=" 15 Lacs" />
                    <Option Value="2500000" title=" 25 Lacs" />
                    <Option Value="3500000" title=" 35 Lacs" />
                    <Option Value="4500000" title=" 45 Lacs" />
                    <Option Value="5500000" title=" 55 Lacs" />
                    <Option Value="6500000" title=" 65 Lacs" />
                    <Option Value="7500000" title=" 75 Lacs" />
                    <Option Value="8500000" title=" 85 Lacs" />
                    <Option Value="9500000" title=" 95 Lacs" />
                    <Option Value="15000000" title=" 1.5 Cr" />
                    <Option Value="25000000" title=" 2.5 Cr" />
                    <Option Value="35000000" title=" 3.5 Cr" />
                    <Option Value="45000000" title=" 4.5 Cr" />
                    <Option Value="55000000" title=" 5.5 Cr" />
                    <Option Value="65000000" title=" 6.5 Cr" />
                    <Option Value="75000000" title=" 7.5 Cr" />
                    <Option Value="85000000" title=" 8.5 Cr" />
                    <Option Value="90000000" title=" 9 Cr" />
                  </select>
                </div>
              )}
            </div>

            <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">No. of Bedrooms</p>
              <div className="w-full  py-4 flex flex-wrap ">
                <div
                  onClick={() => setNoOfBedroom(1)}
                  className={`${
                    NoOfBedroom === 1
                      ? "bg-blue border-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-3`}
                >
                  <p>+ 1BHK</p>
                </div>

                <div
                  onClick={() => setNoOfBedroom(2)}
                  className={`${
                    NoOfBedroom === 2
                      ? "bg-blue border-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-3`}
                >
                  <p>+ 2BHK</p>
                </div>
                <div
                  onClick={() => setNoOfBedroom(3)}
                  className={`${
                    NoOfBedroom === 3
                      ? "bg-blue border-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-3`}
                >
                  <p>+ 3BHK</p>
                </div>
                <div
                  onClick={() => setNoOfBedroom(4)}
                  className={`${
                    NoOfBedroom === 4
                      ? "bg-blue border-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-3`}
                >
                  <p>+ 4BHK</p>
                </div>
                <div
                  onClick={() => setNoOfBedroom(5)}
                  className={`${
                    NoOfBedroom === 5
                      ? "bg-blue border-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-3`}
                >
                  <p>+ 5BHK</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">Type of Property</p>
              <div className="w-full  py-4 flex flex-col items-start ">
                <div
                  onClick={() => setParentPropertyType("industrial")}
                  className={` ${
                    ParentPropertyType === "industrial"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2 w-full`}
                >
                  <p> + Industrial</p>
                </div>

                <div
                  onClick={() => setParentPropertyType("commercial")}
                  className={` ${
                    ParentPropertyType === "commercial"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2 w-full`}
                >
                  <p> + Commercial</p>
                </div>
                <div
                  onClick={() => setParentPropertyType("residential")}
                  className={` ${
                    ParentPropertyType === "residential"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2 w-full`}
                >
                  <p> + Residential</p>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
            <p className="text-xl font-medium">Area</p>

            <div className="flex w-full justify-between my-4">
              <select
                value={AreaMin}
                onChange={(e) => setAreaMin(e.target.value)}
                className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
              >
                <option defaultChecked value="">
                  Min Area
                </option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
              <select
                value={AreaMax}
                onChange={(e) => setAreaMax(e.target.value)}
                className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
              >
                <option defaultChecked hidden value="">
                  Max Area
                </option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
                <option value="1000">1000</option>
              </select>
            </div>
          </div> */}

            <div className="flex justify-between py-4  items-center  border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">Verified properties</p>
              <label className="switch">
                <input
                  value={isVerified}
                  checked={isVerified}
                  onChange={() => setisVerified(!isVerified)}
                  type="checkbox"
                />
                <div>
                  <span></span>
                </div>
              </label>
            </div>

            <div className="flex justify-between py-4  items-center  border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">Properties with Photos</p>
              <label className="switch">
                <input
                  value={iswithPhoto}
                  checked={iswithPhoto}
                  onChange={() => setiswithPhoto(!iswithPhoto)}
                  type="checkbox"
                />
                <div>
                  <span></span>
                </div>
              </label>
            </div>

            <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
              <p className="text-xl font-medium">Furnishing Status</p>
              <div className="w-full  py-4 flex flex-col items-start ">
                <div
                  onClick={() => setFurnishedStatus("Un-Furnished")}
                  className={` ${
                    FurnishedStatus === "Un-Furnished"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2  w-full`}
                >
                  <p> + Unfurnished</p>
                </div>

                <div
                  onClick={() => setFurnishedStatus("Semi-Furnished")}
                  className={` ${
                    FurnishedStatus === "Semi-Furnished"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2  w-full`}
                >
                  <p> + Semifurnished</p>
                </div>
                <div
                  onClick={() => setFurnishedStatus("Furnished")}
                  className={` ${
                    FurnishedStatus === "Furnished"
                      ? "bg-blue text-white"
                      : "border-widgetborder text-widgetborder"
                  } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2  w-full`}
                >
                  <p> + Furnished</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                onClick={HandleResetFilter}
                className="text-white font-medium bg-lightgray w-full h-12 mt-2 rounded-sm"
              >
                RESET FILTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
