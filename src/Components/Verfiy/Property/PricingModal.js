import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../API";

import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";
import { convertNumberToWords } from "../../PagesComponents/PostProperty/Step4/ConvertToWord";

const PricingModal = ({
  isPricingEditOpen,
  setisPricingEditOpen,
  setisAnyThingUpdated,
}) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const user = useSelector(selectUser);
  const [TotalAmount, setTotalAmount] = useState();
  const [AdvanceAmount, setAdvanceAmount] = useState();
  const [PricePerSpace, setPricePerSpace] = useState();

  const [ConvertedTotalAmount, setConvertedTotalAmountTotalAmount] = useState();
  const [
    ConvertedTotalAmountAdvanceAmount,
    setConvertedTotalAmountAdvanceAmount,
  ] = useState();
  const [
    ConvertedTotalAmountPricePerSpace,
    setConvertedTotalAmountPricePerSpace,
  ] = useState();
  const ConvertToWord = () => {
    if (TotalAmount > 0) {
      setConvertedTotalAmountTotalAmount(convertNumberToWords(TotalAmount));
    } else {
      setConvertedTotalAmountTotalAmount("");
    }

    if (AdvanceAmount > 0) {
      setConvertedTotalAmountAdvanceAmount(convertNumberToWords(AdvanceAmount));
    } else {
      setConvertedTotalAmountAdvanceAmount("");
    }

    if (PricePerSpace > 0) {
      setConvertedTotalAmountPricePerSpace(convertNumberToWords(PricePerSpace));
    } else {
      setConvertedTotalAmountPricePerSpace("");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const HandlePricingDetailsSubmit = async (data) => {
    const res = await axios.post(
      `${API}/property/edit`,
      { ...data, id: Data?.p_id },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      setisAnyThingUpdated(true);
      setisPricingEditOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setisPricingEditOpen(!isPricingEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isPricingEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-450px bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isPricingEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setisPricingEditOpen(!isPricingEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>

        <form
          onSubmit={handleSubmit(HandlePricingDetailsSubmit)}
          className="w-full h-full flex justify-between flex-col "
        >
          <div>
            <h4 className="text-2xl font-medium  uppercase mb-5">
              Update Pricing Details
            </h4>

            {(Data.property_type === "floor" ||
              Data.property_type === "land" ||
              Data.property_type === "farmhouse" ||
              Data.property_type === "villa" ||
              Data.property_type === "flat" ||
              Data.property_type === "office" ||
              Data.property_type === "shop" ||
              Data.property_type === "factory" ||
              Data.property_type === "warehouse") &&
              Data?.property_for === "sell" && (
                <>
                  <div className="flex justify-center items-start flex-col ">
                    <div className="flex justify-start items-center">
                      <div className="flex items-center ">
                        <p className="mr-4">&#8377;</p>
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.total_price?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            {...register("total_price")}
                            placeholder=" "
                            value={TotalAmount}
                            onChange={(e) => setTotalAmount(e.target.value)}
                            onKeyUp={ConvertToWord}
                            defaultValue={Data?.total_price}
                          />
                          <label
                            for="project_name"
                            className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Asking Price
                          </label>
                        </div>

                        <span className="ml-4">{ConvertedTotalAmount}</span>
                      </div>
                    </div>{" "}
                    <div className="flex justify-start items-center">
                      <p className="mr-4">&#8377;</p>
                      <div className="flex flex-col lg:flex-row items-center">
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.advanced_amount?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            {...register("advanced_amount")}
                            placeholder=" "
                            value={AdvanceAmount}
                            onChange={(e) => setAdvanceAmount(e.target.value)}
                            onKeyUp={ConvertToWord}
                            defaultValue={Data?.booking_amount}
                          />
                          <label
                            for="project_name"
                            className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Booking / Advance amount
                          </label>
                        </div>

                        <span className="ml-4">
                          {ConvertedTotalAmountAdvanceAmount}
                        </span>
                      </div>
                    </div>{" "}
                    <div className="flex flex-wrap justify-start items-center">
                      <div className="flex items-center ">
                        <p className="mr-4">&#8377;</p>
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.price_per_feet?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            {...register("price_per_feet")}
                            placeholder=" "
                            value={PricePerSpace}
                            onChange={(e) => setPricePerSpace(e.target.value)}
                            onKeyUp={ConvertToWord}
                            defaultValue={Data?.rent_per_feet}
                          />
                          <label
                            for="project_name"
                            className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Price / sq. ft / sq. yard / sq. mtr
                          </label>
                        </div>

                        <select
                          // {...register("length_width_type")}
                          className="border-1 h-11 ml-2   px-2 text-lg w-40  my-1  placeholder-gray-600"
                          id="plot-length-type"
                          title="Sq-ft"
                        >
                          <option>fts</option>
                          <option>yards</option>
                          <option>mtrs</option>
                        </select>
                      </div>
                      <span className="ml-4">
                        {ConvertedTotalAmountPricePerSpace}
                      </span>
                    </div>
                  </div>
                </>
              )}
          </div>

          <div className="flex justify-end items-end ">
            <button
              type="submit"
              className="bg-blue text-white font-medium py-2 px-6 rounded-full text-lg"
            >
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PricingModal;
