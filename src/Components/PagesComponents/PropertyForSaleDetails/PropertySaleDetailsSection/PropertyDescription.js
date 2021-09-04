import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import DescriptionModal from "../../../Verfiy/Property/DescriptionModal";

const PropertyDescription = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const [isDescriptionEditOpen, setisDescriptionEditOpen] = useState(false);

  const location = useLocation();
  const { id } = useParams();

  return (
    <div
      id="description"
      className="w-full h-full border-1 border-projectsborder rounded px-4 mt-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 px-4 relative flex justify-between items-center">
        <p className="text-3xl text-darkgray "> Property Description</p>
        {location.pathname === `/profile/property/listings/${id}` && (
          <div
            onClick={() => setisDescriptionEditOpen(!isDescriptionEditOpen)}
            className="absolute right-0 bg-green text-white font-semibold  px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
          >
            <MdModeEdit className="text-xl -mb-0.5 mr-0.5" />
            <p>Edit Description</p>
          </div>
        )}

        <DescriptionModal
          isDescriptionEditOpen={isDescriptionEditOpen}
          setisAnyThingUpdated={setisDescriptionEditOpen}
        />
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
