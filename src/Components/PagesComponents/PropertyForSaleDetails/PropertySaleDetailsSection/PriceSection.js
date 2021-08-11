import React from "react";
import { useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";

const PriceSection = () => {
  const { Data } = useSelector(selectPropertySaleDetails);

  return (
    <div className="w-full h-full bg-littlelightgray flex  justify-between lg:items-center items-start mt-6 lg:mt-0">
      <div className="lg:w-2/4 w-full flex  justify-start items-center lg:mx-4 mx-2 my-5">
        <div className="w-7 lg:w-auto">
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <p className="text-lg lg:text-xl text-lightgray whitespace-nowrap">
            Asking Price
          </p>
          <p className="text-xl lg:text-2xl font-medium">
            {" "}
            &#8377; {Data?.total_price}{" "}
          </p>
        </div>
      </div>
      <div className="lg:w-2/4 w-full flex justify-start items-center lg:mx-4 mx-2 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <p className="text-lg lg:text-xl text-lightgray whitespace-nowrap">
            Booking Price
          </p>
          <p className="text-xl lg:text-2xl font-medium">
            {" "}
            &#8377; {Data?.booking_amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
