import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { API } from "../../../API";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";

const ConfigurationModal = ({
  isConfigurationEditOpen,
  setisConfigurationEditOpen,
  setisAnyThingUpdated,
  Property_For,
  isAnyThingUpdated,
}) => {
  const [Data, setData] = useState([]);
  const location = useLocation();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const SellData = useSelector(selectPropertySaleDetails);
  const RentData = useSelector(selectPropertyRentDetails);
  const [PossessionState, setPossessionState] = useState({
    UnderConstruction: undefined,
    ReadyToMove: undefined,
  });

  useEffect(() => {
    if (Property_For === "rent") {
      setData(RentData?.Data);
    }
    if (Property_For === "sell") {
      setData(SellData?.Data);
    }
  }, [SellData, RentData, Property_For]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const HandleConfigurationEdit = async (data) => {
    const res = await axios.post(
      `${API}/property/edit`,
      { ...data, id: Data?.p_id },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      setisAnyThingUpdated(!isAnyThingUpdated);
      setisConfigurationEditOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setisConfigurationEditOpen(!isConfigurationEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isConfigurationEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-500px  bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isConfigurationEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setisConfigurationEditOpen(!isConfigurationEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
        <form
          onSubmit={handleSubmit(HandleConfigurationEdit)}
          className="w-full h-full flex justify-between flex-col "
        >
          <div>
            <h4 className="text-2xl font-medium  uppercase mb-3">
              Update Configuration Details
            </h4>
            {Data?.property_type === "land" && (
              <>
                <div className="flex justify-center lg:items-start  flex-col px-2 lg:px-0 mt-8 ">
                  <div className="flex w-full">
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.plot_area?.type === "required" && "border-red"
                        }`}
                        type="text"
                        {...register("plot_area")}
                        placeholder=" "
                        defaultValue={Data?.plot_area}
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Plot Area
                      </label>
                    </div>

                    <select
                      {...register("plot_area_type")}
                      className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1.5 mx-2 placeholder-gray-600"
                      id="plot-area-type"
                    >
                      <option>sq-fts</option>
                      <option>sq-yards</option>
                      <option>sq-mts</option>
                    </select>
                  </div>

                  <div className="flex w-full">
                    <div
                      className={`border-1 h-11   text-lg lg:w-72 w-2/5 my-1.5 mr-2 placeholder-gray-600 ${
                        errors?.road_connectivity?.type === "required" &&
                        "border-red  "
                      }`}
                    >
                      <Controller
                        control={control}
                        {...register("road_connectivity")}
                        render={({ field: { onChange } }) => (
                          <select
                            className=" h-10 px-2  text-lg lg:w-full w-2/5  placeholder-gray-600"
                            onChange={(e) => onChange(e.target.value)}
                            defaultValue={Data?.road_connectivity}
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
                      className="border-1 h-11  px-2 text-lg lg:w-52 w-2/5 my-1.5  placeholder-gray-600"
                      id="plot-length-type"
                    >
                      <option value="mts">mtrs</option>
                      <option value="ft">ft</option>
                    </select>
                  </div>

                  <div className="flex">
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("plot_length")}
                        defaultValue={Data?.plot_length}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.length?.type === "required" && "border-red"
                        }`}
                        type="text"
                        id="plot-length"
                        placeholder=" "
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Length
                      </label>
                    </div>

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
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("plot_breadth")}
                        defaultValue={Data?.plot_breadth}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.width?.type === "required" && "border-red"
                        }`}
                        type="text"
                        id="plot-breadth"
                        placeholder=" "
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Width
                      </label>
                    </div>

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

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.total_floor?.type === "required" && "border-red"
                      }`}
                      type="text"
                      {...register("total_floors")}
                      defaultValue={Data?.total_floors}
                      placeholder=" "
                    ></input>
                    <label
                      for=""
                      className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Basement + Floors Allowed
                    </label>
                  </div>

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

            {Data?.property_type === "flat" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col px-2 lg:px-0 ">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bhk?.type === "required" && "border-red"
                          }`}
                          type="text"
                          {...register("bhk")}
                          placeholder=" "
                          defaultValue={Data?.bhk}
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          3 BHK / 2 BHK / 1 BHK
                        </label>
                      </div>

                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:ml-2">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.balconies?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("balconies")}
                          defaultValue={Data?.balconies}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Balconies
                        </label>
                      </div>
                    </div>

                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bedrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bedroom")}
                          defaultValue={Data?.bedroom}
                          placeholder=" "
                          id="bed-room"
                          required=""
                          aria-required="true"
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Bedrooms
                        </label>
                      </div>

                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:ml-2">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bathrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bathroom")}
                          defaultValue={Data?.bathroom}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Washrooms
                        </label>
                      </div>
                    </div>

                    <div className="flex w-full">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          defaultValue={Data?.carpet_area}
                          {...register("carpet_area")}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1.5 placeholder-gray-600 ml-2 "
                        {...register("carpet_area_type")}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="flex w-full">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("built_up")}
                          defaultValue={Data?.built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1.5 placeholder-gray-600 ml-2 lg:ml-0"
                        {...register("built_up_area_type")}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="flex w-full">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 my-1.5 placeholder-gray-600 ml-2 lg:ml-0"
                        {...register("super_built_up_area_type")}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="flex">
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full my-1.5 placeholder-gray-600 lg:mr-2 "
                        {...register("furnished_status")}
                        title="Furnishing Status"
                        defaultValue={Data?.furnished_status}
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.total_floor?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("total_floors")}
                          placeholder=" "
                          defaultValue={Data?.total_floors}
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Basement + Stilt + No. of Floors
                        </label>
                      </div>
                    </div>

                    <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                      <input
                        className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                          errors?.floor_no?.type === "required" && "border-red"
                        }`}
                        type="text"
                        {...register("floor_no")}
                        placeholder=" "
                        defaultValue={Data?.floor_no}
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Property Floor No.
                      </label>
                    </div>
                  </div>
                  <div className="px-2 lg:px-0 ">
                    <p className="text-xl my-2 h-11 flex items-center">
                      Possession{" "}
                    </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72 flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                    {Data?.PProperty_For === "sell" && (
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
                </div>
              </div>
            )}

            {Data?.property_type === "floor" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
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
                      <div className="flex">
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:mr-2">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg uppercase appearance-none focus:outline-none bg-transparent ${
                              errors?.bhk?.type === "required" && "border-red"
                            }`}
                            type="text"
                            {...register("bhk")}
                            placeholder=" "
                            defaultValue={Data?.bhk}
                          ></input>
                          <label
                            for=""
                            className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                          >
                            3 BHK / 2 BHK / 1 BHK
                          </label>
                        </div>
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                              errors?.balconies?.type === "required" &&
                              "border-red"
                            }`}
                            type="number"
                            min="1"
                            {...register("balconies")}
                            defaultValue={Data?.balconies}
                            placeholder=" "
                          ></input>
                          <label
                            for=""
                            className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Balconies
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-wrap">
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                              errors?.bedrooms?.type === "required" &&
                              "border-red"
                            }`}
                            type="number"
                            min="1"
                            {...register("bedroom")}
                            defaultValue={Data?.bedroom}
                            placeholder=" "
                            id="bed-room"
                            required=""
                            aria-required="true"
                          ></input>
                          <label
                            for=""
                            className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Bedrooms
                          </label>
                        </div>
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:ml-2">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                              errors?.bathrooms?.type === "required" &&
                              "border-red"
                            }`}
                            type="number"
                            min="1"
                            {...register("bathrooms")}
                            placeholder=" "
                            defaultValue={Data?.bathroom}
                          ></input>
                          <label
                            for=""
                            className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Washrooms
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("carpet_area")}
                          defaultValue={Data?.carpet_area}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("carpet_area_type")}
                        defaultValue={Data?.carpet_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("built_up_area")}
                          defaultValue={Data?.built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Built-up Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("built_up_area_type")}
                        defaultValue={Data?.built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up_area")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("super_built_up_area_type")}
                        defaultValue={Data?.super_built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="flex">
                      <div className="w-full">
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                          {...register("furnished_status")}
                          title="Furnishing Status"
                          defaultValue={Data?.furnished_status}
                        >
                          <option>Furnished</option>
                          <option>Semi-Furnished</option>
                          <option>Un-Furnished</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                              errors?.total_floor?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            {...register("total_floors")}
                            placeholder=" "
                            defaultValue={Data?.total_floors}
                            id="totalFloors"
                          ></input>
                          <label
                            for=""
                            className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                          >
                            Basement + Stilt + No. of Floors
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.floor_no?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("floor_no")}
                          placeholder=" "
                          defaultValue={Data?.floor_no}
                          id="totalFloors"
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Property Floor No.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 lg:px-0">
                    <p className="text-xl my-2">Possession </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72 flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                  {Data?.PProperty_For === "sell" && (
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
              </div>
            )}

            {Data?.property_type === "villa" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col px-2 lg:px-0 ">
                    <div className="flex">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:mr-2">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bhk?.type === "required" && "border-red"
                          }`}
                          type="text"
                          {...register("bhk")}
                          placeholder=" "
                          defaultValue={Data?.bhk}
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          3 BHK / 2 BHK / 1 BHK
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                        {...register("simplex_duplex")}
                        defaultValue={Data?.simplex_duplex}
                      >
                        <option value="simplex">Simplex</option>
                        <option value="duplex">Duplex</option>
                      </select>
                    </div>

                    <div className="flex flex-wrap">
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1.5 placeholder-gray-600"
                        {...register("house_type")}
                        defaultValue={Data?.house_type}
                      >
                        <option>Independent House</option>
                        <option>Villa</option>
                      </select>
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.balconies?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("balconies")}
                          defaultValue={Data?.balconies}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Balconies
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bedrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bedroom")}
                          defaultValue={Data?.bedroom}
                          placeholder=" "
                          id="bed-room"
                          required=""
                          aria-required="true"
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Bedrooms
                        </label>
                      </div>

                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:ml-2">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bathrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bathrooms")}
                          defaultValue={Data?.bathroom}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Washrooms
                        </label>
                      </div>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("carpet_area")}
                          defaultValue={Data?.carpet_area}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("carpet_area_type")}
                        defaultValue={Data?.carpet_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("built_up_area")}
                          defaultValue={Data?.built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Built-up Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("built_up_area_type")}
                        defaultValue={Data?.built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up_area")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("super_built_up_area_type")}
                        defaultValue={Data?.super_built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <select
                      className="border-1 h-11  px-2 text-lg lg:w-72 w-full mr-2 my-1 placeholder-gray-600"
                      {...register("furnished_status")}
                      title="Furnishing Status"
                      defaultValue={Data?.furnished_status}
                    >
                      <option>Furnished</option>
                      <option>Semi-Furnished</option>
                      <option>Un-Furnished</option>
                    </select>
                  </div>
                  <div className="px-2 lg:px-0">
                    <p className="text-xl my-2">Possession </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72 flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                  {Data?.PProperty_For === "sell" && (
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
              </div>
            )}

            {Data?.property_type === "farmhouse" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col ">
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
                    <div className="flex ">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bedrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bedroom")}
                          defaultValue={Data?.bedroom}
                          placeholder=" "
                          id="bed-room"
                          required=""
                          aria-required="true"
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Bedrooms
                        </label>
                      </div>

                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:ml-2">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.bathrooms?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("bathroom")}
                          defaultValue={Data?.bathroom}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Washrooms
                        </label>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.balconies?.type === "required" &&
                            "border-red"
                          }`}
                          type="number"
                          min="1"
                          {...register("balconies")}
                          defaultValue={Data?.balconies}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Balconies
                        </label>
                      </div>
                      <div>
                        <select
                          {...register("furnished_status")}
                          defaultValue={Data?.furnished_status}
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
                    <div className="flex  ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          type="text"
                          {...register("plot_area")}
                          defaultValue={Data?.plot_area}
                          placeholder=" "
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.plot_area?.type === "required" &&
                            "border-red"
                          }`}
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Total Plot Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        {...register("plot_area_type")}
                        defaultValue={Data?.plot_area_type}
                      >
                        <option>Sq-fts</option>
                        <option>Sq-mts</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex  ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("carpet_area")}
                          defaultValue={Data?.carpet_area}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("carpet_area_type")}
                        defaultValue={Data?.carpet_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex  ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("built_up")}
                          defaultValue={Data?.built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Built-up Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("built_up_area_type")}
                        defaultValue={Data?.built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex  ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("super_built_up_area_type")}
                        defaultValue={Data?.super_built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                  </div>
                  <div className="px-2 lg:px-0">
                    <p className="text-xl my-2">Possession </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72 flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                  {Data?.PProperty_For === "sell" && (
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
              </div>
            )}

            {Data?.property_type === "office" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                    {/* <div className="w-full">
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
                    </div> */}

                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("carpet_area")}
                          defaultValue={Data?.carpet_area}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("carpet_area_type")}
                        defaultValue={Data?.carpet_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("super_built_up_area_type")}
                        defaultValue={Data?.super_built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        {...register("furnished_status")}
                        title="Furnishing Status"
                        defaultValue={Data?.furnished_status}
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>
                    </div>

                    <div>
                      <p className="text-xl my-2">Washrooms</p>
                      <label
                        for="private"
                        className={` px-2 py-2 border-1 w-72 flex  cursor-pointer justify-start items-center my-2  ${
                          errors?.bathrooms?.type === "required" && "border-red"
                        } `}
                      >
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          value="Private Washroom"
                          defaultChecked={Data?.bathroom === "Private Washroom"}
                          id="private"
                          {...register("bathroom")}
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Private Washroom
                        </span>
                      </label>
                      <label
                        for="shared"
                        className={` px-2 py-2 border-1 w-72 flex  cursor-pointer justify-start items-center my-2  ${
                          errors?.bathrooms?.type === "required" && "border-red"
                        } `}
                      >
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          value="Shared Washroom"
                          defaultChecked={Data?.bathroom === "Shared Washroom"}
                          id="shared"
                          {...register("bathroom")}
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          Shared Washroom
                        </span>
                      </label>
                    </div>

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                      <input
                        className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                          errors?.total_floor?.type === "required" &&
                          "border-red"
                        }`}
                        type="number"
                        min="1"
                        {...register("total_floors")}
                        defaultValue={Data?.total_floors}
                        placeholder=" "
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Total Floors
                      </label>
                    </div>
                  </div>

                  <div className="px-2 lg:px-0">
                    <p className="text-xl my-2">Possession </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72 flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                  {Data?.PProperty_For === "sell" && (
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
              </div>
            )}

            {Data?.property_type === "shop" && (
              <div>
                <div className="flex">
                  <div className="flex justify-center items-start flex-col mx-2 lg:mx-0 ">
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 lg:mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.carpet_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("carpet_area")}
                          defaultValue={Data?.carpet_area}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Carpet Area
                        </label>
                      </div>
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("carpet_area_type")}
                        defaultValue={Data?.carpet_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>
                    <div className="flex w-full ">
                      <div className="outline relative h-11  lg:w-72 w-3/5 focus-within:border-blue-500 my-1.5 mr-2 ">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                            errors?.super_built_up_area?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          {...register("super_built_up")}
                          defaultValue={Data?.super_built_up}
                          placeholder=" "
                        ></input>
                        <label
                          for=""
                          className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                        >
                          Super Built-up Area
                        </label>
                      </div>

                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-2/5 lg:mr-2 my-1.5 placeholder-gray-600"
                        {...register("super_built_up_area_type")}
                        defaultValue={Data?.super_built_up_area_type}
                      >
                        <option>Sq-ft</option>
                        <option>Sq-mt</option>
                        <option>Sq-yards</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <select
                        className="border-1 h-11  px-2 text-lg lg:w-72 w-full lg:mr-2 my-1 placeholder-gray-600"
                        {...register("furnished_status")}
                        title="Furnishing Status"
                        defaultValue={Data?.furnished_status}
                      >
                        <option>Furnished</option>
                        <option>Semi-Furnished</option>
                        <option>Un-Furnished</option>
                      </select>
                    </div>

                    <div>
                      <p className="text-xl my-2">Washrooms</p>
                      <label
                        for="private"
                        className={` px-2 py-2 border-1 w-72 flex  cursor-pointer justify-start items-center my-2  ${
                          errors?.bathrooms?.type === "required" && "border-red"
                        } `}
                      >
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          value="Private Washroom"
                          id="private"
                          defaultChecked={Data?.bathroom === "Private Washroom"}
                          {...register("bathroom")}
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          {" "}
                          Private Washroom
                        </span>
                      </label>
                      <label
                        for="shared"
                        className={` px-2 py-2 border-1 w-72 flex  cursor-pointer justify-start items-center my-2  ${
                          errors?.bathrooms?.type === "required" && "border-red"
                        } `}
                      >
                        <input
                          className=" w-5 h-5 "
                          type="radio"
                          value="Shared Washroom"
                          defaultChecked={Data?.bathroom === "Shared Washroom"}
                          {...register("bathroom")}
                        />
                        <span className="text-lg ml-4 text-gray-600">
                          Shared Washroom
                        </span>
                      </label>
                    </div>

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                      <input
                        className={`block p-4 border-1 w-full h-11 text-lg  uppercase appearance-none focus:outline-none bg-transparent ${
                          errors?.floor_no?.type === "required" && "border-red"
                        }`}
                        type="number"
                        min="1"
                        {...register("total_floors")}
                        defaultValue={Data?.total_floors}
                        placeholder=" "
                      ></input>
                      <label
                        for=""
                        className="absolute top-0 text-lg bg-white px-3 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Basement / Floor No.
                      </label>
                    </div>
                  </div>
                  <div className="px-2 lg:px-0 mt-4">
                    <p className="text-xl my-2">Possession </p>
                    <label
                      for="underConstruction"
                      className={` px-2 py-2 border-1 w-72  flex  cursor-pointerjustify-start items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        id="underConstruction"
                        value="Under Construction"
                        defaultChecked={
                          Data?.possession === "Under Construction"
                        }
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
                    </label>
                    <label
                      for="Ready to move"
                      className={` px-2 py-2 border-1 w-72 flex justify-start cursor-pointer items-center my-2  ${
                        errors?.possession?.type === "required" && "border-red"
                      } `}
                    >
                      <input
                        className=" w-5 h-5 "
                        type="radio"
                        {...register("possession")}
                        value="Ready to move"
                        defaultChecked={Data?.possession === "Ready to move"}
                        onClick={(e) =>
                          setPossessionState({
                            ReadyToMove: "Ready To Move",
                          })
                        }
                      ></input>
                      <span className="text-lg ml-4 text-gray-600">
                        Ready To Move
                      </span>
                    </label>

                    {((Data?.possession === "Under Construction" &&
                      !PossessionState.ReadyToMove) ||
                      PossessionState.UnderConstruction) && (
                      <div className="flex flex-col">
                        <label className="text-xl my-2 mr-4">
                          Possession By
                        </label>
                        <select
                          className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                          id="possessionByMonth"
                          {...register("possession_month")}
                          defaultValue={Data?.possession_month}
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
                          defaultValue={Data?.possession_year}
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

                    {(Data?.possession === "Ready to move" ||
                      PossessionState.ReadyToMove) && (
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
                          defaultValue={Data?.age_of_construction}
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

                  {Data?.PProperty_For === "sell" && (
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
              </div>
            )}
          </div>
          <div className="flex justify-end items-end -mt-8 ">
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

export default ConfigurationModal;
