import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../../../Redux/_features/_FliterSlice";
import MultiRangeSlider from "./MultiRangeSelect/MultiRangeSlider";

const Filter = () => {
  const [BudgetMin, setBudgetMin] = useState();
  const [BudgetMax, setBudgetMax] = useState();
  const [NoOfBedroom, setNoOfBedroom] = useState();
  const [PropertyType, setPropertyType] = useState();
  const [AreaMin, setAreaMin] = useState();
  const [AreaMax, setAreaMax] = useState();
  const [isVerified, setisVerified] = useState(false);
  const [iswithPhoto, setiswithPhoto] = useState(false);
  const [FurnishedStatus, setFurnishedStatus] = useState();

  const HandleBudgetChange = (min, max) => {
    setBudgetMin(min);
    setBudgetMax(max);
  };
  const HandleAreaChange = (min, max) => {
    setAreaMin(min);
    setAreaMax(max);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SET_FILTER({
        BudgetMin,
        BudgetMax,
        NoOfBedroom,
        PropertyType,
        AreaMin,
        AreaMax,
        isVerified,
        iswithPhoto,
        FurnishedStatus,
      })
    );
  }, [
    BudgetMin,
    BudgetMax,
    NoOfBedroom,
    PropertyType,
    AreaMin,
    AreaMax,
    isVerified,
    iswithPhoto,
    FurnishedStatus,
    dispatch,
  ]);

  return (
    <div className="w-3/12 h-auto bg-white my-4 rounded shadow-xl">
      <div className="flex flex-col items-start p-4 px-5 ">
        <p className="text-3xl font-medium text-darkgray border-b-2 w-full pb-4 border-dashed">
          Fliter By
        </p>
        <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
          <p className="text-xl font-medium">Budget</p>
          <div className="w-full my-4 py-4">
            <MultiRangeSlider
              min={0}
              max={1000000000}
              onChange={({ min, max }) => HandleBudgetChange(min, max)}
            />
          </div>
          <div className="flex w-full justify-between my-4">
            <select className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <option value="">Min</option>
            </select>
            <select className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <option value="">Max Budget</option>
            </select>
          </div>
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
              onClick={() => setPropertyType("villa")}
              className={` ${
                PropertyType === "villa"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
            >
              <p> + Independent House/Villa</p>
            </div>

            <div
              onClick={() => setPropertyType("apartment")}
              className={` ${
                PropertyType === "apartment"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
            >
              <p> + Residential Apartment</p>
            </div>
            <div
              onClick={() => setPropertyType("land")}
              className={` ${
                PropertyType === "land"
                  ? "bg-blue text-white"
                  : "border-widgetborder text-widgetborder"
              } mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md  text-sm font-medium px-2`}
            >
              <p> + Residential Land</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
          <p className="text-xl font-medium">Area</p>
          <div className="w-full my-4 py-4">
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => HandleAreaChange(min, max)}
            />
          </div>
          <div className="flex w-full justify-between my-4">
            <select className="w-2/4 mr-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <option value="">Min Area</option>
            </select>
            <select className="w-2/4 ml-2 h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <option value="">Max Area</option>
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
  );
};

export default Filter;
