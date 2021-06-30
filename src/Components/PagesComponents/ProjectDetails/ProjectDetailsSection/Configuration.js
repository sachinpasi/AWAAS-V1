import React from "react";

const Configuration = ({ Data }) => {
  // console.log(JSON.parse(Data?.parent_child[0].child[0].flat_floor_images)[0]);
  return (
    <div className="w-full h-full border-1 border-projectsborder rounded px-4 my-4">
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Configuration</p>
      </div>
      <div className="flex justify-start items-center py-4">
        <div className="flex justify-center items-center py-4">
          <img src="/assets/images/projectdetails/plotarea.svg" alt="" />
          <div className=" ml-4 flex justify-center items-start flex-col">
            <p className="text-sm text-lightgray leading-5">Plot Area</p>
            <p className="text-lg font-medium text-darkgray leading-5">
              1208 Sq-ft
            </p>
          </div>
        </div>
        <div className="ml-16 flex justify-center items-center py-4">
          <img src="/assets/images/projectdetails/price.svg" alt="" />
          <div className=" ml-4 flex justify-center items-start flex-col">
            <p className="text-sm text-lightgray leading-5">Price</p>
            <p className="text-lg font-medium text-darkgray leading-5">
              &#8377; 50,59,900
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-start items-center pb-4 border-b-1 border-projectsborder">
        <img
          // src={`https://codeiator.com/${
          //   JSON.parse(Data?.parent_child[0].child[0].flat_floor_images)[0]
          // }`}
          alt=""
        />
      </div>

      <div className="w-full h-full flex justify-end items-center py-4">
        <button className="bg-blue px-8 py-3 rounded text-white font-medium text-lg">
          Contact To Developer
        </button>
      </div>
    </div>
  );
};

export default Configuration;
