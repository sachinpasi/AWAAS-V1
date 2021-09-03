import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";

const PriceSection = () => {
  const { Data } = useSelector(selectPropertyRentDetails);
  const [isEditOpen, setisEditOpen] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  return (
    <div className="w-full h-full bg-littlelightgray flex  justify-between lg:items-center items-start mt-6 lg:mt-0">
      <div className="lg:w-2/4 w-full flex  justify-start items-center lg:mx-4 mx-2 my-5">
        <div className="w-7 lg:w-auto">
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start lg:ml-4 ml-2 w-4/5">
          <p className="lg:text-xl text-base text-lightgray whitespace-nowrap">
            Monthly Rent
          </p>
          <p className="lg:text-2xl text-xl font-medium">
            {" "}
            &#8377; {Data?.expected_rent}{" "}
          </p>
        </div>
      </div>
      {location.pathname === `/profile/property/listings/${id}` && (
        <div
          onClick={() => setisEditOpen(!isEditOpen)}
          className="absolute right-0 bg-green text-white font-semibold text-lg px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
        >
          <MdModeEdit className="text-2xl -mb-0.5" />
          <p>Edit Location</p>
        </div>
      )}
      <div className="lg:w-2/4 w-full flex justify-start items-center lg:mx-4 mx-2 my-5">
        <div className="w-7 lg:w-auto">
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start lg:ml-4 ml-2 w-4/5">
          <p className="lg:text-xl text-base text-lightgray lg:whitespace-nowrap">
            Security Deposit
          </p>
          <p className="lg:text-2xl text-xl font-medium">
            {" "}
            &#8377; {Data?.security_amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
