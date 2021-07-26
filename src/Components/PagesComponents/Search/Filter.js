import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import queryString from "query-string";

const Filter = ({ PropertyFor }) => {
  const [NoOfBedroom, setNoOfBedroom] = useState();
  const [ParentPropertyType, setParentPropertyType] = useState();
  const [AreaMin, setAreaMin] = useState();
  const [AreaMax, setAreaMax] = useState();
  const [BudgetMin, setBudgetMin] = useState();
  const [BudgetMax, setBudgetMax] = useState();

  const [isVerified, setisVerified] = useState(false);
  const [iswithPhoto, setiswithPhoto] = useState(false);
  const [FurnishedStatus, setFurnishedStatus] = useState();
  const [PARAMS, setPARAMS] = useState();

  const { search } = useLocation();

  const { property_for, locality_id, parent_type, property_type } =
    queryString.parse(search);

  const history = useHistory();

  console.log(PropertyFor);

  useEffect(() => {
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

    if (locality_id) {
      params.append("locality_id", locality_id);
    } else {
      params.delete("locality_id");
    }

    if (property_type) {
      params.append("property_type", property_type);
    } else {
      params.delete("property_type");
    }
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
  }, [
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
  ]);

  const HandleApplyFilter = () => {
    history.push({ pathname: "/search", search: PARAMS });
  };

  const Option = ({ Value, title }) => (
    <option className="text-black" value={Value}>
      {title}
    </option>
  );

  return (
    <div className="w-3/12 relative ">
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
                  className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
                >
                  <option defaultChecked hidden value="">
                    Min
                  </option>
                  <Option Value="2500" title="2500" />
                  <Option Value="5000" title="5000" />
                  <Option Value="10000" title="10000" />
                  <Option Value="20000" title="20000" />
                  <Option Value="30000" title="30000" />
                  <Option Value="40000" title="40000" />
                  <Option Value="50000" title="50000" />
                  <Option Value="60000" title="60000" />
                  <Option Value="70000" title="70000" />
                  <Option Value="80000" title="80000" />
                  <Option Value="90000" title="90000" />
                  <Option Value="100000" title="1 Lac" />
                  <Option Value="120000" title="1.2 Lac" />
                  <Option Value="140000" title="1.4 Lac" />
                  <Option Value="160000" title="1.6 Lac" />
                  <Option Value="180000" title="1.8 Lac" />
                  <Option Value="200000" title="2 Lac" />
                  <Option Value="250000" title="2.5 Lac" />
                  <Option Value="300000" title="3 Lac" />
                  <Option Value="350000" title="3.5 Lac" />
                  <Option Value="400000" title="4 Lac" />
                  <Option Value="500000" title="5 Lac" />
                </select>
                <select
                  onChange={(e) => setBudgetMax(e.target.value)}
                  value={BudgetMax}
                  className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
                >
                  <option defaultChecked hidden value="">
                    Max Budget
                  </option>
                  <Option Value="5000" title="5000" />
                  <Option Value="10000" title="10000" />
                  <Option Value="20000" title="20000" />
                  <Option Value="30000" title="30000" />
                  <Option Value="40000" title="40000" />
                  <Option Value="50000" title="50000" />
                  <Option Value="60000" title="60000" />
                  <Option Value="70000" title="70000" />
                  <Option Value="80000" title="80000" />
                  <Option Value="90000" title="90000" />
                  <Option Value="100000" title="1 Lac" />
                  <Option Value="120000" title="1.2 Lac" />
                  <Option Value="140000" title="1.4 Lac" />
                  <Option Value="160000" title="1.6 Lac" />
                  <Option Value="180000" title="1.8 Lac" />
                  <Option Value="200000" title="2 Lac" />
                  <Option Value="250000" title="2.5 Lac" />
                  <Option Value="300000" title="3 Lac" />
                  <Option Value="350000" title="3.5 Lac" />
                  <Option Value="400000" title="4 Lac" />
                  <Option Value="500000" title="5 Lac" />
                  <Option Value="600000" title="6 Lac" />
                </select>
              </div>
            ) : (
              <div className="flex w-full justify-between my-4">
                <select
                  onChange={(e) => setBudgetMin(e.target.value)}
                  value={BudgetMin}
                  className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
                >
                  <option selected hidden value="100000000">
                    Min
                  </option>
                  <Option Value="1000000" title="10 Lacs" />
                  <Option Value="2000000" title="20 Lacs" />
                  <Option Value="3000000" title="30 Lacs" />
                  <Option Value="4000000" title="40 Lacs" />
                  <Option Value="5000000" title="50 Lacs" />
                  <Option Value="6000000" title="60 Lacs" />
                  <Option Value="7000000" title="70 Lacs" />
                  <Option Value="8000000" title="80 Lacs" />
                  <Option Value="9000000" title="90 Lacs" />
                  <Option Value="10000000" title="1 Cr" />
                  <Option Value="15000000" title="1.5 Cr" />
                  <Option Value="20000000" title="2 Cr" />
                  <Option Value="30000000" title="3 Cr" />
                  <Option Value="40000000" title="4 Cr" />
                  <Option Value="50000000" title="5 Cr" />
                  <Option Value="60000000" title="6 Cr" />
                  <Option Value="70000000" title="7 Cr" />
                  <Option Value="80000000" title="8 Cr" />
                </select>
                <select
                  onChange={(e) => setBudgetMax(e.target.value)}
                  value={BudgetMax}
                  className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2"
                >
                  <option defaultChecked hidden value="">
                    Max Budget
                  </option>
                  <Option Value="1500000" title="15 Lacs" />
                  <Option Value="2500000" title="25 Lacs" />
                  <Option Value="3500000" title="35 Lacs" />
                  <Option Value="4500000" title="45 Lacs" />
                  <Option Value="5500000" title="55 Lacs" />
                  <Option Value="6500000" title="65 Lacs" />
                  <Option Value="7500000" title="75 Lacs" />
                  <Option Value="8500000" title="85 Lacs" />
                  <Option Value="9500000" title="95 Lacs" />
                  <Option Value="15000000" title="1.5 Cr" />
                  <Option Value="25000000" title="2.5 Cr" />
                  <Option Value="35000000" title="3.5 Cr" />
                  <Option Value="45000000" title="4.5 Cr" />
                  <Option Value="55000000" title="5.5 Cr" />
                  <Option Value="65000000" title="6.5 Cr" />
                  <Option Value="75000000" title="7.5 Cr" />
                  <Option Value="85000000" title="8.5 Cr" />
                  <Option Value="90000000" title="9 Cr" />
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
                }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-2`}
              >
                <p>+ 1 RK/1BHK</p>
              </div>

              <div
                onClick={() => setNoOfBedroom(2)}
                className={`${
                  NoOfBedroom === 2
                    ? "bg-blue border-blue text-white"
                    : "border-widgetborder text-widgetborder"
                }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-2`}
              >
                <p>+ 2BHK</p>
              </div>
              <div
                onClick={() => setNoOfBedroom(3)}
                className={`${
                  NoOfBedroom === 3
                    ? "bg-blue border-blue text-white"
                    : "border-widgetborder text-widgetborder"
                }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-2`}
              >
                <p>+ 3BHK</p>
              </div>
              <div
                onClick={() => setNoOfBedroom(4)}
                className={`${
                  NoOfBedroom === 4
                    ? "bg-blue border-blue text-white"
                    : "border-widgetborder text-widgetborder"
                }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-2`}
              >
                <p>+ 4BHK</p>
              </div>
              <div
                onClick={() => setNoOfBedroom(5)}
                className={`${
                  NoOfBedroom === 5
                    ? "bg-blue border-blue text-white"
                    : "border-widgetborder text-widgetborder"
                }  mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md   text-sm font-medium px-2`}
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
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
              >
                <p> + Industrial</p>
              </div>

              <div
                onClick={() => setParentPropertyType("commercial")}
                className={` ${
                  ParentPropertyType === "commercial"
                    ? "bg-blue text-white"
                    : "border-widgetborder text-widgetborder"
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
              >
                <p> + Commercial</p>
              </div>
              <div
                onClick={() => setParentPropertyType("residential")}
                className={` ${
                  ParentPropertyType === "residential"
                    ? "bg-blue text-white"
                    : "border-widgetborder text-widgetborder"
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
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
                onChange={() => setiswithPhoto(!isVerified)}
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
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
              >
                <p> + Unfurnished</p>
              </div>

              <div
                onClick={() => setFurnishedStatus("Semi-Furnished")}
                className={` ${
                  FurnishedStatus === "Semi-Furnished"
                    ? "bg-blue text-white"
                    : "border-widgetborder text-widgetborder"
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
              >
                <p> + Semifurnished</p>
              </div>
              <div
                onClick={() => setFurnishedStatus("Furnished")}
                className={` ${
                  FurnishedStatus === "Furnished"
                    ? "bg-blue text-white"
                    : "border-widgetborder text-widgetborder"
                } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
              >
                <p> + Furnished</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={HandleApplyFilter}
              className="text-white font-medium bg-green w-full h-12 mt-2 rounded-sm"
            >
              APPLY FILTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
