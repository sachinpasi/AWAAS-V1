import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSelect/MultiRangeSlider";

const Filter = () => {
  const [SelectedFliters, setSelectedFliters] = useState({
    BudgetMin: 0,
    BudgetMax: 0,
  });
  const HandleBudgetChange = (min, max) => {
    console.log(min, max);
    // setSelectedFliters((Prev))
  };
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
            <div className=" mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p>+ 1 RK/1BHK</p>
            </div>

            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p>+ 2BHK</p>
            </div>
            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p>+ 3BHK</p>
            </div>
            <div className="mr-2 my-2  cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p>+ 4BHK</p>
            </div>
            <div className=" mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p>+ 5BHK</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
          <p className="text-xl font-medium">Type of Property</p>
          <div className="w-full  py-4 flex flex-col items-start ">
            <div className=" mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p> + Independent House/Villa</p>
            </div>

            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p> + Residential Apartment</p>
            </div>
            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
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
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
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
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>

        <div className="flex justify-between py-4  items-center  border-b-2 w-full border-dashed">
          <p className="text-xl font-medium">Properties with Photos</p>
          <label className="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>

        <div className="flex flex-col items-start py-2 border-b-2 w-full border-dashed">
          <p className="text-xl font-medium">Furnishing Status</p>
          <div className="w-full  py-4 flex flex-col items-start ">
            <div className=" mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p> + Unfurnished</p>
            </div>

            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p> + Semifurnished</p>
            </div>
            <div className="mr-2 my-2 cursor-pointer flex justify-center items-center h-10 border-1 rounded-md border-widgetborder text-widgetborder text-sm font-medium px-2">
              <p> + Furnished</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
