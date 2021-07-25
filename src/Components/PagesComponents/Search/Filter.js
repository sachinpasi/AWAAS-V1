import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SET_FILTER } from "../../../Redux/_features/_FliterSlice";
import MultiRangeSlider from "./MultiRangeSelect/MultiRangeSlider";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = ({ PropertyFor }) => {
  const [Budget, setBudget] = useState([0, 100000000]);
  const [BudgetMinSelect, setBudgetMinSelect] = useState();
  const [BudgetMaxSelect, setBudgetMaxSelect] = useState();
  const [NoOfBedroom, setNoOfBedroom] = useState();
  const [ParentPropertyType, setParentPropertyType] = useState();
  const [Area, setArea] = useState([0, 1000]);

  const [isVerified, setisVerified] = useState(false);
  const [iswithPhoto, setiswithPhoto] = useState(false);
  const [FurnishedStatus, setFurnishedStatus] = useState();

  const HandleBudgetChange = (value) => {
    setBudget([value[0], value[1]]);
  };

  const HandleAreaChange = (value) => {
    setArea([value[0], value[1]]);
  };

  const history = useHistory();

  // useEffect(() => {
  //   setBudget([BudgetMinSelect]);
  // }, [BudgetMinSelect, BudgetMaxSelect]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (PropertyFor) {
      params.append("property_for", PropertyFor);
    } else {
      params.delete("property_for");
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

    if (Area) {
      params.append("mini_area", Area[0]);
    } else {
      params.delete("mini_area");
    }

    if (Budget) {
      params.append("mini_budget", Budget[0]);
      params.append("max_budget", Budget[1]);
    } else {
      params.delete("mini_budget");
      params.delete("max_budget");
    }

    history.push({ pathname: "/search", search: params.toString() });
  }, [
    NoOfBedroom,
    ParentPropertyType,
    history,
    isVerified,
    iswithPhoto,
    FurnishedStatus,
    PropertyFor,
    Area,
    Budget,
  ]);

  const Option = ({ Value, title }) => (
    <option className="text-black" value={Value}>
      {title}
    </option>
  );

  return (
    <div className="w-3/12 relative">
      <div className={`w-full h-auto bg-white my-4 rounded shadow-xl  `}>
        <div className="flex flex-col items-start p-4 px-5 ">
          <p className="text-3xl font-medium text-darkgray border-b-2 w-full pb-4 border-dashed">
            Fliter By
          </p>
          <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
            <p className="text-xl font-medium">Budget</p>
            <div className="w-full py-4 ">
              {PropertyFor === "rent" ? (
                <div>
                  <div>
                    <Range
                      defaultValue={[2500, 600000]}
                      value={Budget}
                      min={2500}
                      max={600000}
                      onChange={HandleBudgetChange}
                      allowCross={false}
                    />
                    <div className="flex justify-between pt-1 text-widgetborder text-sm ">
                      <p>{Budget[0]}</p>
                      <p>{Budget[1]}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Range
                    defaultValue={[0, 100000000]}
                    value={Budget}
                    min={0}
                    max={100000000}
                    onChange={HandleBudgetChange}
                    allowCross={false}
                  />
                  <div className="flex justify-between pt-1 text-widgetborder text-sm ">
                    <p>{Budget[0]}</p>
                    <p>{Budget[1]}</p>
                  </div>
                </div>
              )}
            </div>
            {PropertyFor === "rent" ? (
              <div className="flex w-full justify-between my-4">
                <select
                  value={Budget[0]}
                  onChange={(e) => setBudget([e.target.value, Budget[1]])}
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
                  value={Budget[1]}
                  onChange={(e) => setBudget([Budget[0], e.target.value])}
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
                  value={Budget[0]}
                  onChange={(e) => setBudget([e.target.value, Budget[1]])}
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
                  value={Budget[1]}
                  onChange={(e) => setBudget([Budget[0], e.target.value])}
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

          <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
            <p className="text-xl font-medium">Area</p>
            <div className="w-full my-4 py-4">
              <div>
                <Range
                  defaultValue={[0, 1000]}
                  value={Area}
                  min={0}
                  max={1000}
                  onChange={HandleAreaChange}
                  allowCross={false}
                />
                <div className="flex justify-between pt-1 text-widgetborder text-sm ">
                  <p>{Area[0]}</p>
                  <p>{Area[1]}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between my-4">
              <select
                value={Area[0]}
                onChange={(e) => setArea([e.target.value, Area[0]])}
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
                value={Area[1]}
                onChange={(e) => setArea([Area[0], e.target.value])}
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
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Filter;
