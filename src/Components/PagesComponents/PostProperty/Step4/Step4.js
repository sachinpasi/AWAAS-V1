import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../API";
import {
  selectPostProperty,
  selectPostPropertyId,
} from "../../../../Redux/_features/_PostPropertySlice";
import {
  selectCurrentStep,
  SET_CURRENT_STEP,
} from "../../../../Redux/_features/_PostPropertyStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import Nav from "../Nav";
import SideImage from "../SideImage";
import { convertNumberToWords } from "./ConvertToWord";

const Step4 = () => {
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
  const CurrentStep = useSelector(selectCurrentStep);
  const PostProperty = useSelector(selectPostProperty);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostPropertyId);

  const HandleNext = () => {
    dispatch(SET_CURRENT_STEP(5));
  };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(3));
  };

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
  } = useForm();

  const HandleStep4Submit = async (data) => {
    console.log(data);
    const res = await axios.post(
      `${API}/property/store-price`,
      {
        ...data,

        id: TableId,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    if (res.status === 200) {
      HandleNext();
    }
  };
  return (
    <div className="w-full h-full flex justify-between ">
      <SideImage />
      <form
        onSubmit={handleSubmit(HandleStep4Submit)}
        className="w-65percent flex flex-col items-start justify-between border-1  min-h-70vh h-full p-8 py-6"
      >
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />
          {CurrentStep === 4 && (
            <div className="py-6 w-full h-full flex flex-col justify-between">
              {PostProperty?.Property_Type === "land" &&
                PostProperty?.Property_For === "rent" && (
                  <>
                    <div className="flex justify-center items-start flex-col ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Price Details
                      </h4>
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("expected_rent")}
                          placeholder="Expected Rent"
                          value={TotalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>

                        <span className="ml-4">{ConvertedTotalAmount}</span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("security_deposit")}
                          placeholder="Security Deposit"
                          value={AdvanceAmount}
                          onChange={(e) => setAdvanceAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>
                        <span className="ml-4">
                          {ConvertedTotalAmountAdvanceAmount}
                        </span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("price_per_feet")}
                          placeholder="Rent / sq. ft"
                          value={PricePerSpace}
                          onChange={(e) => setPricePerSpace(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>
                        <span className="ml-4">
                          {ConvertedTotalAmountPricePerSpace}
                        </span>
                      </div>
                    </div>
                  </>
                )}

              {PostProperty?.Property_Type === "land" &&
                PostProperty?.Property_For === "sell" && (
                  <>
                    <div className="flex justify-center items-start flex-col ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Price Details
                      </h4>
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("total_price")}
                          placeholder="Total Price"
                          value={TotalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                        />

                        <span className="ml-4">{ConvertedTotalAmount}</span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("advanced_amount")}
                          placeholder="Booking / Advance amount"
                          value={AdvanceAmount}
                          onChange={(e) => setAdvanceAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        />
                        <span className="ml-4">
                          {ConvertedTotalAmountAdvanceAmount}
                        </span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("price_per_feet")}
                          placeholder="Price / sq. ft / sq. yard / sq. mtr"
                          value={PricePerSpace}
                          onChange={(e) => setPricePerSpace(e.target.value)}
                          onKeyUp={ConvertToWord}
                        />
                        <span className="ml-4">
                          {ConvertedTotalAmountPricePerSpace}
                        </span>
                      </div>
                    </div>
                  </>
                )}

              {(PostProperty.Property_Type === "floor" ||
                PostProperty.Property_Type === "villa" ||
                PostProperty.Property_Type === "flat" ||
                PostProperty.Property_Type === "office" ||
                PostProperty.Property_Type === "shop" ||
                PostProperty.Property_Type === "factory" ||
                PostProperty.Property_Type === "warehouse") &&
                PostProperty?.Property_For === "sell" && (
                  <>
                    <div className="flex justify-center items-start flex-col ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Price Details
                      </h4>
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("total_price")}
                          placeholder="Total Price"
                          value={TotalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                        />

                        <span className="ml-4">{ConvertedTotalAmount}</span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("advanced_amount")}
                          placeholder="Booking / Advance amount"
                          value={AdvanceAmount}
                          onChange={(e) => setAdvanceAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        />
                        <span className="ml-4">
                          {ConvertedTotalAmountAdvanceAmount}
                        </span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>
                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("price_per_feet")}
                          placeholder="Price / sq. ft / sq. yard / sq. mtr"
                          value={PricePerSpace}
                          onChange={(e) => setPricePerSpace(e.target.value)}
                          onKeyUp={ConvertToWord}
                        />
                        <span className="ml-4">
                          {ConvertedTotalAmountPricePerSpace}
                        </span>
                      </div>
                    </div>
                  </>
                )}

              {(PostProperty.Property_Type === "floor" ||
                PostProperty.Property_Type === "villa" ||
                PostProperty.Property_Type === "flat" ||
                PostProperty.Property_Type === "office" ||
                PostProperty.Property_Type === "shop" ||
                PostProperty.Property_Type === "factory" ||
                PostProperty.Property_Type === "warehouse") &&
                PostProperty?.Property_For === "rent" && (
                  <>
                    <div className="flex justify-center items-start flex-col ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Price Details
                      </h4>
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("expected_rent")}
                          placeholder="Expected Rent"
                          value={TotalAmount}
                          onChange={(e) => setTotalAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>

                        <span className="ml-4">{ConvertedTotalAmount}</span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("security_deposit")}
                          placeholder="Security Deposit"
                          value={AdvanceAmount}
                          onChange={(e) => setAdvanceAmount(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>
                        <span className="ml-4">
                          {ConvertedTotalAmountAdvanceAmount}
                        </span>
                      </div>{" "}
                      <div className="flex justify-start items-center">
                        <p className="mr-4">&#8377;</p>

                        <input
                          className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                          type="text"
                          {...register("price_per_feet")}
                          placeholder="Rent / sq. ft"
                          value={PricePerSpace}
                          onChange={(e) => setPricePerSpace(e.target.value)}
                          onKeyUp={ConvertToWord}
                          required=""
                          aria-required="true"
                        ></input>
                        <span className="ml-4">
                          {ConvertedTotalAmountPricePerSpace}
                        </span>
                      </div>
                    </div>
                  </>
                )}
            </div>
          )}
        </div>
        <div className="w-full   flex justify-end items-end">
          <button
            onClick={HandlePrevious}
            className="w-44 h-12 bg-blue text-xl font-medium text-white"
          >
            Previous
          </button>
          <button
            type="submit"
            className="w-44  h-12 bg-blue text-xl font-medium text-white ml-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;