import React from "react";
import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";

const Amenities = () => {
  const { Data } = useSelector(selectProjectDetails);
  // console.log(JSON.parse(Data.parent.amenities)[0][1]);
  return (
    <div className="w-full h-full border-1 border-projectsborder rounded px-4 my-4">
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Amenities</p>
      </div>
      <div className="py-4 flex justify-center items-center flex-wrap">
        <div className="mx-8 my-4 flex justify-center items-center flex-col">
          <img
            className="object-contain w-2/4 h-auto"
            src="/assets/images/amenities/club-house.png"
            alt=""
          />
          <p className="text-lg ">Club House</p>
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>{" "}
        <div className="mx-8 my-4">
          <img
            className="object-contain w-auto h-auto"
            src="/assets/images/amenities/clubhouse.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
