import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";

const Amenities = () => {
  const { Data } = useSelector(selectPropertyRentDetails);
  // console.log(JSON.parse(Data.parent.amenities)[0][1]);
  const [AmenitiesList, setAmenitiesList] = useState([]);
  console.log(AmenitiesList);
  useEffect(() => {
    if (Data?.amenities) {
      setAmenitiesList(Data?.amenities);
    }
  }, [Data]);

  return (
    <div
      id="amenities"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Amenities</p>
      </div>
      <div className=" py-4 flex  flex-wrap">
        {AmenitiesList?.map((item, index) => (
          <div
            key={index}
            style={{
              width: "calc(100% / 4 )",
            }}
            className="flex justify-center my-4 items-center flex-col cursor-pointer"
          >
            <img
              className="object-contain w-1/5 h-auto"
              src={item.icon}
              alt=""
            />
            <p className="text-lg capitalize my-2 ">{item.name}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Amenities;
