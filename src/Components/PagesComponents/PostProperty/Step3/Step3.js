import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

const Step3 = () => {
  const [PossessionState, setPossessionState] = useState({
    UnderConstruction: undefined,
    ReadyToMove: undefined,
  });

  const CurrentStep = useSelector(selectCurrentStep);
  const PostProperty = useSelector(selectPostProperty);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostPropertyId);

  const HandleNext = () => {
    dispatch(SET_CURRENT_STEP(4));
  };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(2));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const HandleStep3Submit = async (data) => {
    console.log(data);
    const res = await axios.post(
      `${API}/property/store-details`,
      {
        ...data,
        id: TableId,
        purchase_type: "Resale",
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    if (res.status === 200) {
      console.log(res.data.data);
      HandleNext();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full flex justify-between ">
      <SideImage />
      <form
        onSubmit={handleSubmit(HandleStep3Submit)}
        className="lg:w-65percent w-full flex flex-col items-start justify-between border-1  lg:min-h-70vh h-full lg:p-8  py-6"
      >
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />
          {CurrentStep === 3 && (
            <div className="py-6 w-full h-full flex flex-col justify-between ">
              {PostProperty?.Property_Type === "land" && (
                <>
                  <div className="flex justify-center lg:items-start  flex-col px-2 lg:px-0 ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      Area Details
                    </h4>
                    <div className="flex w-full">
                      <input
                        className={`border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600 ${
                          errors?.plot_area?.type === "required" &&
                          "border-red  "
                        }`}
                        type="text"
                        {...register("plot_area", { required: true })}
                        placeholder="Plot Area"
                        required=""
                        aria-required="true"
                      ></input>

                      <select
                        {...register("plot_area_type")}
                        className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1 mx-2 placeholder-gray-600"
                        id="plot-area-type"
                      >
                        <option>sq-fts</option>
                        <option>sq-yards</option>
                        <option>sq-mts</option>
                        <option>Marla</option>
                        <option>bighas</option>
                        <option>acres</option>
                        <option>hectares</option>
                      </select>
                    </div>

                    <div className="flex w-full">
                      <div
                        className={`border-1 h-11   text-lg lg:w-72 w-2/5 my-1 mr-2 placeholder-gray-600 ${
                          errors?.road_connectivity?.type === "required" &&
                          "border-red  "
                        }`}
                      >
                        <Controller
                          control={control}
                          {...register("road_connectivity", {
                            required: true,
                          })}
                          render={({ field: { onChange } }) => (
                            <select
                              className=" h-10 px-2  text-lg lg:w-full w-2/5  placeholder-gray-600"
                              onChange={(e) => onChange(e.target.value)}
                            >
                              <option selected hidden>
                                Road Connectivity
                              </option>
                              <option value="9">09</option>
                              <option value="12">12</option>
                              <option value="18">18</option>
                              <option value="24">24</option>
                              <option value="60">60</option>
                            </select>
                          )}
                        />
                      </div>

                      <select
                        // {...register("length_width_type")}
                        className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1  placeholder-gray-600"
                        id="plot-length-type"
                      >
                        <option value="mts">mtrs</option>
                        <option value="ft">ft</option>
                      </select>
                    </div>

                    <div className="flex">
                      <input
                        {...register("length", {
                          required: true,
                        })}
                        className={`border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600 ${
                          errors?.length?.type === "required" && "border-red  "
                        }`}
                        type="text"
                        id="plot-length"
                        placeholder="Length"
                      ></input>
                      <select
                        {...register("length_width_type")}
                        id="length_width_type"
                        className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1 mx-2 placeholder-gray-600"
                      >
                        <option value="fts">fts</option>
                        <option value="yards">yards</option>
                        <option value="mts">mtrs</option>
                      </select>
                    </div>
                    <div className="flex">
                      <input
                        {...register("width", {
                          required: true,
                        })}
                        className={`border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600 ${
                          errors?.width?.type === "required" && "border-red  "
                        }`}
                        type="text"
                        id="plot-breadth"
                        placeholder="Width"
                      ></input>
                      <select
                        // {...register("length_width_type")}
                        id="length_width_type"
                        className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1 mx-2 placeholder-gray-600"
                      >
                        <option value="fts">fts</option>
                        <option value="yards">yards</option>
                        <option value="mts">mtrs</option>
                      </select>
                    </div>
                    <input
                      className={`border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600 ${
                        errors?.total_floor?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      {...register("total_floor", {
                        required: true,
                      })}
                      id="totalFloors"
                      placeholder="Basement + Floors Allowed"
                    ></input>
                    <div className="">
                      {(errors?.plot_area?.type === "required" ||
                        errors?.road_connectivity?.type === "required" ||
                        errors?.length?.type === "required" ||
                        errors?.width?.type === "required" ||
                        errors?.total_floor?.type === "required" ||
                        errors?.plot_area_type?.type === "required" ||
                        errors?.plot_no?.type === "required") && (
                        <p className="text-red mx-1 text-sm ">
                          * Please fill all the fields.
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {PostProperty?.Property_Type === "flat" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col px-2 lg:px-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div className="flex w-full flex-col lg:flex-row">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600"
                          type="text"
                          {...register("bhk")}
                          placeholder="3 BHK / 2 BHK / 1 BHK "
                        ></input>
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600"
                          type="number"
                          min="1"
                          {...register("balconies")}
                          placeholder="Balconies"
                          id="bal-cony"
                        />
                      </div>

                      <div className="flex w-full flex-col lg:flex-row">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600"
                          type="number"
                          {...register("bedrooms")}
                          placeholder="Bedrooms"
                          id="bed-room"
                          required=""
                          min="1"
                          aria-required="true"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600"
                          type="number"
                          {...register("bathrooms")}
                          placeholder="Washrooms"
                          id="bath-room"
                          required=""
                          min="1"
                          aria-required="true"
                        />
                      </div>

                      <div className="flex w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600"
                          type="text"
                          {...register("carpet_area")}
                          placeholder="Carpet Area"
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1 placeholder-gray-600 ml-2 lg:ml-0"
                          {...register("carpet_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <div className="flex w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600"
                          type="text"
                          {...register("built_up_area")}
                          placeholder="Built-up Area"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1 placeholder-gray-600 ml-2 lg:ml-0"
                          {...register("built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <div className="flex w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 my-1 placeholder-gray-600"
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1 placeholder-gray-600 ml-2 lg:ml-0"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600 "
                        {...register("furnished")}
                        title="Furnishing Status"
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>

                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600 "
                        type="text"
                        {...register("total_floor")}
                        placeholder="Basement + Stilt + No. of Floors"
                        id="totalFloors"
                      ></input>

                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600 "
                        type="text"
                        {...register("floor_no")}
                        placeholder="Property Floor No."
                        id="floorNo"
                      ></input>
                    </div>
                    <div className="px-2 lg:px-0">
                      <p className="text-xl my-2">Possession </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          id="underConstruction"
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            id="possessionByMonth"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}

                      {PostProperty?.PProperty_For === "sell" && (
                        <div>
                          <p className="text-xl my-2">Purchase Type</p>
                          <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                            <input
                              className=" w-5 h-5 "
                              type="radio"
                              {...register("purchase_type")}
                              value="New Booking"
                            />
                            <span className="text-lg ml-4 text-gray-600">
                              New Booking
                            </span>
                          </div>

                          <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                            <input
                              className=" w-5 h-5 "
                              type="radio"
                              {...register("purchase_type")}
                              value="Resale"
                            />
                            <span className="text-lg ml-4 text-gray-600">
                              Resale
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "villa" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col px-2 lg:px-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1 placeholder-gray-600"
                        type="text"
                        {...register("bhk")}
                        placeholder="3 BHK / 2 BHK / 1 BHK "
                      ></input>
                      <div>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                          {...register("house_type")}
                        >
                          <option>Independent House</option>
                          <option>Villa</option>
                        </select>
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("balconies")}
                          placeholder="Balconies"
                          id="bal-cony"
                          min="1"
                        />
                      </div>
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bedrooms")}
                          placeholder="Bedrooms"
                          id="bed-room"
                          required=""
                          aria-required="true"
                          min="1"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bathrooms")}
                          placeholder="Washrooms"
                          id="bath-room"
                          required=""
                          aria-required="true"
                          min="1"
                        />
                      </div>
                      <div className="flex w-full ">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("carpet_area")}
                          placeholder="Carpet Area"
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("carpet_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="flex w-full ">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("built_up_area")}
                          placeholder="Built-up Area"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="flex w-full ">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                        ></input>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                        {...register("furnished")}
                        title="Furnishing Status"
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                        {...register("simplex_duplex")}
                      >
                        <option value="simplex">Simplex</option>
                        <option value="duplex">Duplex</option>
                      </select>
                    </div>
                    <div className="mx-2 lg:mx-0">
                      <p className="text-xl my-2">Possession </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "floor" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div>
                        {/* <select
                          className="border-1 h-11  px-2 text-lg w-72 mr-2 my-1 placeholder-gray-600"
                          id="builderType"
                         
                        >
                          <option selected="" disabled>
                            Developer / Builder
                          </option>
                          <option>Developer</option>
                          <option>Private Builder</option>
                        </select> */}
                      </div>
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("bhk")}
                          placeholder="3 BHK / 2 BHK / 1 BHK "
                        ></input>
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bedrooms")}
                          placeholder="Bedrooms"
                          min="1"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bathrooms")}
                          placeholder="Washrooms"
                          min="1"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("balconies")}
                          placeholder="Balconies"
                          id="bal-cony"
                          min="1"
                        />
                      </div>
                      <div className="flex w-full ">
                        <input
                          type="text"
                          {...register("carpet_area")}
                          placeholder="Carpet Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("carpet_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="flex w-full ">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("built_up_area")}
                          placeholder="Built-up Area"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="flex w-full ">
                        <input
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("furnished")}
                          title="Furnishing Status"
                        >
                          <option>Furnished</option>
                          <option>Semi-Furnished</option>
                          <option>Un-Furnished</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("total_floor")}
                          placeholder="Basement + Stilt + No. of Floors"
                          id="totalFloors"
                        ></input>
                      </div>
                      <div className="w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("floor_no")}
                          placeholder="Property Floor No."
                          id="floorNo"
                        ></input>
                      </div>
                    </div>
                    <div className="px-2 lg:px-0">
                      <p className="text-xl my-2">Possession </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          // {...register("bedrooms")}
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "farmhouse" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>

                      <div>
                        {/* <input
                          style={{
                            background: "#EEEEEE",
                            color: "#999999",
                            cursor: "not-allowed",
                          }}
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          name="propertyname"
                          type="text"
                          placeholder="City"
                          id="city"
                          value="Farmhouse"
                          disabled
                        /> */}
                      </div>
                      <div className="flex flex-wrap">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bedrooms")}
                          placeholder="Bedrooms"
                          id="bed-room"
                          required=""
                          aria-required="true"
                          min="1"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("bathrooms")}
                          placeholder="Washrooms"
                          id="bath-room"
                          required=""
                          min="1"
                          aria-required="true"
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          type="number"
                          {...register("balconies")}
                          placeholder="Balconies"
                          id="bal-cony"
                          min="1"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          {...register("plot_area")}
                          placeholder="Total Plot Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("plot_area_type")}
                        >
                          <option>Sq-fts</option>
                          <option>Sq-mts</option>
                          <option>Sq-yards</option>
                          <option>Marla</option>
                          <option>bighas</option>
                          <option>acres</option>
                          <option>hectares</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          {...register("carpet_area")}
                          placeholder="Carpet Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("carpet_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          {...register("built_up_area")}
                          placeholder="Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div>
                        <select
                          {...register("furnished")}
                          title="Furnishing Status"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        >
                          <option>Furnished</option>
                          <option>Semi-Furnished</option>
                          <option>Un-Furnished</option>
                        </select>
                        {/* <select
                          {...register("house_type")}
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        >
                          <option>Independent House</option>
                          <option value="v">Villa </option>
                        </select> */}
                      </div>
                    </div>
                    <div>
                      <p className="text-xl my-2">Possession </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "office" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div className="w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          style={{
                            background: "#EEEEEE",
                            color: "#999999",
                            cursor: "not-allowed",
                          }}
                          type="text"
                          name=""
                          placeholder="Office Space"
                          disabled
                        ></input>
                      </div>

                      <div className="w-full flex">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          id="carpet-area"
                          placeholder="Carpet Area"
                          {...register("carpet_area")}
                        />
                        <select
                          {...register("carpet_area_type")}
                          id="carpet-type"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="w-full flex">
                        <input
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          {...register("super_built_up_area_type")}
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("furnished")}
                          title="Furnishing Status"
                        >
                          <option>Furnished</option>
                          <option>Semi-Furnished</option>
                          <option>Un-Furnished</option>
                        </select>
                      </div>

                      <div>
                        <p className="text-xl my-2">Washrooms</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            value="Private Washroom"
                            {...register("bathrooms")}
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            {" "}
                            Private Washroom
                          </span>
                        </div>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("bathrooms")}
                            id="shared"
                            value="Shared Washroom"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Shared Washroom
                          </span>
                        </div>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        type="text"
                        {...register("total_floor")}
                        placeholder="Atrium Floor / Ground Floor / Floor No."
                      ></input>
                    </div>
                    <div className="mx-2">
                      <p className="text-xl my-2">Availability Status </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "shop" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div></div>

                      <div className="flex w-full">
                        <input
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                          type="text"
                          {...register("carpet_area")}
                          placeholder="Carpet Area"
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("carpet_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="flex w-full">
                        <input
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("furnished")}
                          title="Furnishing Status"
                        >
                          <option>Furnished</option>
                          <option>Semi-Furnished</option>
                          <option>Un-Furnished</option>
                        </select>
                      </div>

                      <div>
                        <p className="text-xl my-2">Washrooms</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            value="Private Washroom"
                            {...register("bathrooms")}
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            {" "}
                            Private Washroom
                          </span>
                        </div>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            value="Shared Washroom"
                            {...register("bathrooms")}
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Shared Washroom
                          </span>
                        </div>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        type="text"
                        {...register("floor_no")}
                        placeholder="Basement / Ground Floor / Floor No."
                      ></input>
                    </div>
                    <div className="mx-2">
                      <p className="text-xl my-2">Availability Status </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "factory" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div></div>

                      <div className="w-full">
                        <div>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                            {...register("house_type")}
                          >
                            <option>Factory</option>
                            <option>Builtup</option>
                          </select>
                        </div>
                        <div className="w-full flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-3/4 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("plot_area")}
                            placeholder="Total Plot Area"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            {...register("plot_area_type")}
                          >
                            <option>Sq-ft</option>
                            <option>Sq-mt</option>
                            <option>Sq-yards</option>
                            <option>Marla</option>
                            <option>bighas</option>
                            <option>acres</option>
                            <option>hectares</option>
                          </select>
                        </div>
                        <div className="flex ">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("length")}
                            placeholder="Length"
                          ></input>
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("width")}
                            placeholder="Width"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            {...register("length_width_type")}
                          >
                            <option>feets</option>
                            <option>meters</option>
                            <option>yards</option>
                          </select>
                        </div>
                        <div className="w-full flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("carpet_area")}
                            placeholder="Carpet Area"
                          />
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            {...register("carpet_area_type")}
                          >
                            <option>Sq-ft</option>
                            <option>Sq-mt</option>
                            <option>Sq-yards</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-full flex">
                        <input
                          type="text"
                          {...register("super_built_up_area")}
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          {...register("super_built_up_area_type")}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        type="text"
                        name=""
                        {...register("floor_no")}
                        placeholder="Basement / Ground Floor / Floor No."
                      ></input>
                      <select
                        className="border-1 h-11  px-2 text-lg w-72 mr-2 my-1 placeholder-gray-600"
                        {...register("furnished")}
                        title="Furnishing Status"
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>
                    </div>
                    <div className="w-full mx-2">
                      <p className="text-xl my-2">Availability Status </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          {...register("possession")}
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_month")}
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("possession_year")}
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            {...register("age_of_construction")}
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {PostProperty?.PProperty_For === "sell" && (
                      <div>
                        <p className="text-xl my-2">Purchase Type</p>
                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="New Booking"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            New Booking
                          </span>
                        </div>

                        <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                          <input
                            className=" w-5 h-5 "
                            type="radio"
                            {...register("purchase_type")}
                            value="Resale"
                          />
                          <span className="text-lg ml-4 text-gray-600">
                            Resale
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              )}

              {PostProperty?.Property_Type === "warehouse" && (
                <div>
                  <>
                    <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        Property Details
                      </h4>
                      <div></div>

                      <div>
                        <div>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                            {...register("house_type")}
                            aria-invalid="false"
                          >
                            <option>Warehouse</option>
                            <option>Godown</option>
                          </select>
                        </div>
                        <div className="flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("plot_area")}
                            placeholder="Total Plot Area"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            {...register("plot_area_type")}
                          >
                            <option>Sq-ft</option>
                            <option>Sq-mt</option>
                            <option>Sq-yards</option>
                          </select>
                        </div>
                        <div className="flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("length")}
                            placeholder="Length"
                          ></input>
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("width")}
                            placeholder="Width"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 lg:mr-2 my-1 placeholder-gray-600"
                            {...register("length_width_type")}
                          >
                            <option>feets</option>
                            <option>meters</option>
                            <option>yards</option>
                          </select>
                        </div>

                        <div className="w-full flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            {...register("plot_area")}
                            placeholder="Total Plot Area"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            id="area-type"
                          >
                            <option>Sq-ft</option>
                            <option>Sq-mt</option>
                            <option>Sq-yards</option>
                          </select>
                        </div>
                        <div className="w-full flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            id="lengthArea"
                            placeholder="Length"
                          ></input>
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            id="widthArea"
                            placeholder="Width"
                          ></input>
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-1/3 lg:mr-2 my-1 placeholder-gray-600"
                            id="lwtype"
                          >
                            <option>feets</option>
                            <option>meters</option>
                            <option>yards</option>
                          </select>
                        </div>

                        <div className="w-full flex">
                          <input
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 mr-2 my-1 placeholder-gray-600"
                            type="text"
                            id="carpet-area"
                            placeholder="Carpet Area"
                          />
                          <select
                            className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                            id="carpet-type"
                          >
                            <option>Sq-ft</option>
                            <option>Sq-mt</option>
                            <option>Sq-yards</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-full flex">
                        <input
                          type="text"
                          id="super-built-area"
                          placeholder="Super Built-up Area"
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-3/5 lg:mr-2 my-1 placeholder-gray-600"
                        ></input>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1 placeholder-gray-600"
                          id="super-built-type"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <input
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        type="text"
                        name=""
                        id="totalFloors"
                        placeholder="Basement / Ground Floor / Floor No."
                      ></input>
                    </div>
                    <div className="mx-2">
                      <p className="text-xl my-2">Availability Status </p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          name="possession"
                          id="underConstruction"
                          value="Under Construction"
                          onClick={(e) =>
                            setPossessionState({
                              UnderConstruction: "Under Construction",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Under Construction
                        </span>
                      </div>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          name="possession"
                          id="readyToMove"
                          value="Ready to move"
                          onClick={(e) =>
                            setPossessionState({
                              ReadyToMove: "Ready To Move",
                            })
                          }
                        ></input>
                        <span className="text-lg ml-4 text-gray-600">
                          Ready To Move
                        </span>
                      </div>
                      {PossessionState.UnderConstruction && (
                        <div className="flex flex-col">
                          <label className="text-xl my-2 mr-4">
                            Possession By
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            id="possessionByMonth"
                          >
                            <option selected="" disabled>
                              Month
                            </option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>

                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            id="possessionByYear"
                          >
                            <option selected="" disabled>
                              Year
                            </option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      )}

                      {PossessionState.ReadyToMove && (
                        <div
                          div
                          className="flex flex-col"
                          id="possessionDetails2"
                        >
                          <label className="text-xl my-2 mr-4">
                            Age of Construction
                          </label>
                          <select
                            className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                            id="ageOfConstruction"
                            aria-invalid="false"
                          >
                            <option>New Construction</option>
                            <option>Less than 5 years old</option>
                            <option>5 to 10 years old</option>
                            <option>10 to 15 years old</option>
                            <option>15 to 20 years old</option>
                            <option>20 to 25 years old</option>
                            <option>25 to 30 years old</option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="mx-2">
                      <p className="text-xl my-2">Purchase Type</p>
                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          name="purchaseType"
                          id="underConstruction"
                          value="New Booking"
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          New Booking
                        </span>
                      </div>

                      <div className=" px-2 py-2 border-1 w-72 flex justify-start items-center my-2 ">
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          name="purchaseType"
                          id="readyToMove"
                          value="Resale"
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          Resale
                        </span>
                      </div>
                    </div>
                  </>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-full   flex lg:flex-row flex-col  lg:justify-end justify-center lg:items-end items-center px-2 lg:px-0">
          <button
            onClick={HandlePrevious}
            className="lg:w-44 w-full  h-12 bg-blue text-xl font-medium text-white rounded-full lg:rounded-none my-1 lg:my-0"
          >
            Previous
          </button>
          <button
            type="submit"
            className="lg:w-44 w-full  h-12 bg-blue text-xl font-medium text-white lg:ml-2 rounded-full lg:rounded-none my-1 lg:my-0"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
