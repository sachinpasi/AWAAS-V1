import React from "react";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";

const PriceSection = () => {
  const { Data } = useSelector(selectPropertyRentDetails);

  return (
    <div className="w-full h-full bg-littlelightgray flex flex-col lg:flex-row justify-between lg:items-center items-start mt-6 lg:mt-0">
      <div className="lg:w-2/4 w-full flex  justify-start items-center mx-4 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <p className="text-xl text-lightgray whitespace-nowrap">
            Monthly Rent
          </p>
          <p className="text-2xl font-medium">
            {" "}
            &#8377; {Data?.expected_rent}{" "}
          </p>
        </div>
      </div>
      <div className="lg:w-2/4 w-full flex justify-start items-center mx-4 my-5">
        <div>
          <img src="/assets/images/propertysale/price.svg" alt="" />
        </div>
        <div className="flex-col flex justify-center items-start ml-4 w-4/5">
          <p className="text-xl text-lightgray whitespace-nowrap">
            Security Deposit
          </p>
          <p className="text-2xl font-medium">
            {" "}
            &#8377; {Data?.security_amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
