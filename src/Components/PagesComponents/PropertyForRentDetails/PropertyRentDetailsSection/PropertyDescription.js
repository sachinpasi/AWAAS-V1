import React from "react";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";

const PropertyDescription = () => {
  const { Data } = useSelector(selectPropertyRentDetails);

  return (
    <div
      id="description"
      className="w-full h-full border-1 border-projectsborder rounded px-4 mt-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray "> Property Description</p>
      </div>
      <div className="py-4">
        <p className="text-base text-darkgray  leading-7 pb-4">
          {Data?.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyDescription;
