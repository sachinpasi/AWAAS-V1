import React from "react";
import { useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";

const Configuration = () => {
  const { Data } = useSelector(selectPropertySaleDetails);
  return (
    <div
      id="configuration"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Configuration</p>
      </div>

      <div className="w-full h-full grid grid-cols-3 gap-6 my-4 ">
        {Data?.configuration?.slice(0, 5).map((item, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(to right,#598df5, #2f5fbe)",
            }}
            className="w-full h-24 border-1 border-projectsborder rounded shadow-xl cursor-pointer  flex flex-col justify-center items-center"
          >
            <p className="text-base text-white uppercase">{item?.title}</p>
            <p className="text-2xl font-medium text-white ">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configuration;
