import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import {
  selectUpdatePropertySlice,
  SET_UPDATE_PROPERTY_SLICE,
} from "../../../../Redux/_features/_UpdatePropertySlice";

const PriceSection = ({ isEditClicked }) => {
  const { Data } = useSelector(selectPropertySaleDetails);

  const { location } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { title, locality_name, city } = useSelector(selectUpdatePropertySlice);

  const { register, handleSubmit } = useForm();
  const onSubmit = ({ total_price, booking_amount }) => {
    dispatch(
      SET_UPDATE_PROPERTY_SLICE({
        title,
        locality_name,
        city,
        total_price,
        booking_amount,
      })
    );
  };

  return (
    <>
      {location.pathname !== `/profile/property/listings/${id}` && (
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
      )}

      {location.pathname === `/profile/property/listings/${id}` && (
        <form
          onBlur={handleSubmit(onSubmit)}
          className="w-full h-full bg-littlelightgray flex  justify-between lg:items-center items-start mt-6 lg:mt-0"
        >
          <div className="lg:w-2/4 w-full flex  justify-start items-center lg:mx-4 mx-2 my-5">
            <div className="w-7 lg:w-auto">
              <img src="/assets/images/propertysale/price.svg" alt="" />
            </div>
            <div className="flex-col flex justify-center items-start ml-4 w-4/5">
              <p className="text-lg lg:text-xl text-lightgray whitespace-nowrap">
                Asking Price
              </p>
              {isEditClicked ? (
                <input
                  type="text"
                  {...register("total_price")}
                  className="text-xl lg:text-2xl font-medium bg-transparent border-b-2 border-black"
                  defaultValue={Data?.total_price}
                />
              ) : (
                <p className="text-xl lg:text-2xl font-medium">
                  {" "}
                  &#8377; {Data?.total_price}{" "}
                </p>
              )}
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
              {isEditClicked ? (
                <input
                  type="text"
                  className="text-xl lg:text-2xl font-medium bg-transparent border-b-2 border-black"
                  defaultValue={Data?.booking_amount}
                  {...register("booking_amount")}
                />
              ) : (
                <p className="text-xl lg:text-2xl font-medium">
                  {" "}
                  &#8377; {Data?.booking_amount}
                </p>
              )}
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default PriceSection;
