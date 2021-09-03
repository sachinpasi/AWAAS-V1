import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import {
  selectUpdatePropertySlice,
  SET_UPDATE_PROPERTY_SLICE,
} from "../../../../Redux/_features/_UpdatePropertySlice";
import { useLocation } from "react-router";
import { MdModeEdit } from "react-icons/md";
import ConfigurationModal from "../../../Verfiy/Property/ConfigurationModal";

const Configuration = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const [isConfigurationEditOpen, setisConfigurationEditOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div
      id="configuration"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 px-4 relative flex justify-between items-center">
        <p className="text-3xl text-darkgray ">Configuration</p>
        {location.pathname === `/profile/property/listings/${id}` && (
          <div
            onClick={() => setisConfigurationEditOpen(!isConfigurationEditOpen)}
            className="absolute right-0 bg-green text-white font-semibold  px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
          >
            <MdModeEdit className="text-xl -mb-0.5 mr-0.5" />
            <p>Edit Configuration</p>
          </div>
        )}
      </div>

      <ConfigurationModal
        isConfigurationEditOpen={isConfigurationEditOpen}
        setisConfigurationEditOpen={setisConfigurationEditOpen}
        setisAnyThingUpdated={setisAnyThingUpdated}
        isAnyThingUpdated={isAnyThingUpdated}
        Property_For={Data?.property_for}
      />

      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3  lg:gap-6 gap-2 my-4 ">
        {Data?.configuration?.map((item, index) => (
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
