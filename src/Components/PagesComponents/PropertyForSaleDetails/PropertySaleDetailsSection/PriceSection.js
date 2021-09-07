import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import {
  selectUpdatePropertySlice,
  SET_UPDATE_PROPERTY_SLICE,
} from "../../../../Redux/_features/_UpdatePropertySlice";
import { MdModeEdit } from "react-icons/md";
import { useLocation } from "react-router-dom";
import PricingModal from "../../../Verfiy/Property/PricingModal";

const PriceSection = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const [isPricingEditOpen, setisPricingEditOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="w-full h-full bg-littlelightgray flex  justify-between lg:items-center items-start mt-6 lg:mt-0 relative">
      <div className="lg:w-2/4 w-full flex  justify-start items-center lg:mx-4 mx-2 my-5 ">
        <div className="w-7 lg:w-auto">
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <h4 className="text-lg lg:text-xl text-lightgray whitespace-nowrap">
            Asking Price
          </h4>

          <h5 className="text-xl lg:text-2xl font-medium">
            {" "}
            &#8377; {Data?.total_price}{" "}
          </h5>
        </div>
      </div>
      {location.pathname === `/profile/property/listings/${id}` && (
        <div
          onClick={() => setisPricingEditOpen(!isPricingEditOpen)}
          className="absolute right-4 bg-green text-white font-semibold  px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
        >
          <MdModeEdit className="text-xl -mb-0.5 mr-0.5" />
          <p>Edit Princing</p>
        </div>
      )}

      <PricingModal
        isPricingEditOpen={isPricingEditOpen}
        setisPricingEditOpen={setisPricingEditOpen}
        setisAnyThingUpdated={setisAnyThingUpdated}
        isAnyThingUpdated={isAnyThingUpdated}
        Property_For={Data?.property_for}
      />
      <div className="lg:w-2/4 w-full flex justify-start items-center lg:mx-4 mx-2 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <h4 className="text-lg lg:text-xl text-lightgray whitespace-nowrap">
            Booking Price
          </h4>

          <h5 className="text-xl lg:text-2xl font-medium">
            {" "}
            &#8377; {Data?.booking_amount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
