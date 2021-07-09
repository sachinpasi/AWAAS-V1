import React from "react";
import { useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";

const PriceSection = () => {
  const { Data } = useSelector(selectPropertySaleDetails);

  return (
    <div className="w-full h-full bg-littlelightgray flex justify-between items-center">
      <div className="w-2/4 flex justify-start items-center mx-4 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4">
          <p className="text-xl text-lightgray">Asking Price</p>
          <p className="text-2xl font-medium"> &#8377; {Data?.total_price} </p>
        </div>
      </div>
      <div className="w-2/4 flex justify-start items-center mx-4 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4">
          <p className="text-xl text-lightgray">Booking Price</p>
          <p className="text-2xl font-medium">
            {" "}
            &#8377; {Data?.booking_amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
