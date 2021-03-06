import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";
import ConfigurationModal from "../../../Verfiy/Property/ConfigurationModal";

const Configuration = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertyRentDetails);

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
            <h6>Edit Configuration</h6>
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

      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-2  lg:gap-6 gap-2 my-4 ">
        {Data?.configuration?.slice(0, 5).map((item, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(to right,#598df5, #2f5fbe)",
            }}
            className="w-full h-24 border-1 border-projectsborder rounded shadow-xl cursor-pointer  flex flex-col justify-center items-center"
          >
            <h4 className="lg:text-base text-sm text-white uppercase text-center">
              {item?.title}
            </h4>
            <h5 className="text-2xl font-medium text-white capitalize">
              {item?.value}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configuration;
