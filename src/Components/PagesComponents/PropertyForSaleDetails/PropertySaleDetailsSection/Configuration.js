import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import {
  selectUpdatePropertySlice,
  SET_UPDATE_PROPERTY_SLICE,
} from "../../../../Redux/_features/_UpdatePropertySlice";

const Configuration = ({ isEditClicked }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const { location } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const key = "plot_no";

  const { total_price, booking_amount, title, locality_name, city } =
    useSelector(selectUpdatePropertySlice);

  const { register, handleSubmit } = useForm();
  const onSubmit = ({ title, locality_name, city }) => {
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
        <div
          id="configuration"
          className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
        >
          <div className="w-full border-b-1 border-projectsborder py-4 ">
            <p className="text-3xl text-darkgray ">Configuration</p>
          </div>

          <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3  lg:gap-6 gap-2 my-4 ">
            {Data?.configuration?.slice(0, 5).map((item, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(to right,#598df5, #2f5fbe)",
                }}
                className="w-full h-24 border-1 border-projectsborder rounded shadow-xl cursor-pointer  flex flex-col justify-center items-center"
              >
                <p className="text-base text-white uppercase">{item?.title}</p>
                <p className="text-2xl font-medium text-white ">
                  {item?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {location.pathname === `/profile/property/listings/${id}` && (
        <div
          id="configuration"
          className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
        >
          <div className="w-full border-b-1 border-projectsborder py-4 ">
            <p className="text-3xl text-darkgray ">Configuration</p>
          </div>

          {isEditClicked ? (
            <form
              onBlur={handleSubmit(onSubmit)}
              className="w-full h-full grid grid-cols-2 lg:grid-cols-3  lg:gap-6 gap-2 my-4 "
            >
              {Data?.configuration?.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(to right,#598df5, #2f5fbe)",
                  }}
                  className="w-full h-24 border-1 border-projectsborder rounded shadow-xl cursor-pointer  flex flex-col justify-center items-center"
                >
                  <p className="text-base text-white uppercase">
                    {item?.title}
                  </p>

                  <input
                    type="text"
                    // {...register(key)}
                    className="text-2xl font-medium text-white w-3/4 bg-transparent text-center border-b-2 "
                    defaultValue={item?.value}
                  />
                </div>
              ))}
            </form>
          ) : (
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3  lg:gap-6 gap-2 my-4 ">
              {Data?.configuration?.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(to right,#598df5, #2f5fbe)",
                  }}
                  className="w-full h-24 border-1 border-projectsborder rounded shadow-xl cursor-pointer  flex flex-col justify-center items-center"
                >
                  <p className="text-base text-white uppercase">
                    {item?.title}
                  </p>
                  <p className="text-2xl font-medium text-white ">
                    {item?.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Configuration;
