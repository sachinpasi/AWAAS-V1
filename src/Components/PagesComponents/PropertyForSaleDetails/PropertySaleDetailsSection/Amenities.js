import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import AmenitiesModal from "../../../Verfiy/Property/AmenitiesModal";

const Amenities = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  // console.log(JSON.parse(Data.parent.amenities)[0][1]);
  const [AmenitiesList, setAmenitiesList] = useState([]);
  const [isAmenitiesEditOpen, setisAmenitiesEditOpen] = useState(false);
  console.log(AmenitiesList);

  const location = useLocation();
  const { id } = useParams();
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
      <div className="w-full border-b-1 border-projectsborder py-4 px-4 relative flex justify-between items-center">
        <h3 className="text-3xl text-darkgray ">Amenities</h3>
        {location.pathname === `/profile/property/listings/${id}` && (
          <div
            onClick={() => setisAmenitiesEditOpen(!isAmenitiesEditOpen)}
            className="absolute right-0 bg-green text-white font-semibold  px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
          >
            <MdModeEdit className="text-xl -mb-0.5 mr-0.5" />
            <h6>Edit Amenities</h6>
          </div>
        )}

        <AmenitiesModal
          setisAmenitiesEditOpen={setisAmenitiesEditOpen}
          isAmenitiesEditOpen={isAmenitiesEditOpen}
          setisAnyThingUpdated={setisAnyThingUpdated}
          isAnyThingUpdated={isAnyThingUpdated}
          Property_For={Data?.property_for}
        />
      </div>
      <div className=" py-4 lg:flex  flex-wrap grid-cols-2 grid  ">
        {AmenitiesList?.map((item, index) => (
          <div
            key={index}
            className="flex lg:w-1/4 w-full justify-center my-4 items-center flex-col cursor-pointer"
          >
            <img
              className="object-contain lg:w-1/5 w-2/6 h-auto"
              src={item.icon}
              alt=""
            />
            <h5 className="lg:text-lg text-sm capitalize my-2 whitespace-nowrap ">
              {item.name}
            </h5>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Amenities;
