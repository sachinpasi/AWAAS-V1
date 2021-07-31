import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
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

const Step2 = () => {
  const CurrentStep = useSelector(selectCurrentStep);
  const PostProperty = useSelector(selectPostProperty);
  const [LocalityList, setLocalityList] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostPropertyId);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const HandleNext = () => {
    dispatch(SET_CURRENT_STEP(3));
  };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(1));
  };

  const HandleStep2Submit = async (data) => {
    console.log(data);
    const res = await axios.post(
      `${API}/property/store-location`,
      {
        ...data,
        city: "Panipat",
        id: TableId,
        purchase_type: "Resale",
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    if (res.status === 200) {
      HandleNext();
    }
  };

  const FetchLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    FetchLocality();
  }, []);
  return (
    <div className="w-full h-full flex justify-between ">
      <SideImage />
      <form
        onSubmit={handleSubmit(HandleStep2Submit)}
        className="w-65percent flex flex-col items-start justify-between border-1  min-h-70vh h-full p-8 py-6"
      >
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />

          {CurrentStep === 2 && (
            <div className="py-6 w-full h-full flex flex-col justify-between">
              {PostProperty?.Property_Type === "land" && (
                <>
                  <div className="flex justify-center items-start flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      className="border-1 h-11  px-2 text-lg w-72 my-1"
                      type="text"
                      placeholder="City"
                      defaultValue="Panipat"
                      disabled
                    />

                    <input
                      {...register("project_name", { required: true })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Colony / Society"
                      id="apart"
                    />

                    <select
                      {...register("locality_id", { required: true })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Locality"
                      id="locality"
                      required=""
                      aria-required="true"
                    >
                      <option selected hidden>
                        Locality
                      </option>
                      {LocalityList.map((item) => (
                        <option
                          key={item.id}
                          className="capitalize"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>

                    <input
                      {...register("plot_no", { required: true })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Plot No."
                      id="plotNo"
                    />
                  </div>
                </>
              )}
              {PostProperty?.Property_Type === "flat" && (
                <>
                  <div className="flex justify-center items-start flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      {...register("city", {
                        required: true,
                      })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="City"
                      id="city"
                      value="Panipat"
                      disabled
                    />

                    <input
                      {...register("project_name", { required: true })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Colony / Society"
                      id="apart"
                    />

                    <select
                      {...register("locality_id", {
                        required: true,
                      })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Locality"
                      id="locality"
                    >
                      <option selected hidden>
                        Locality
                      </option>
                      {LocalityList.map((item) => (
                        <option
                          key={item.id}
                          className="capitalize"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <input
                      // {...register("project_name", { required: true })}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Unit No"
                      id="apart"
                    />
                  </div>
                </>
              )}

              {PostProperty?.Property_Type === "villa" && (
                <>
                  <div className="flex justify-center items-start flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="City"
                      id="city"
                      value={"Panipat"}
                      disabled
                    />

                    <input
                      {...register("project_name")}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Colony / Society"
                      id="apart"
                    />

                    <select
                      {...register("locality_id")}
                      className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                      type="text"
                      placeholder="Locality"
                      id="locality"
                    >
                      <option selected hidden>
                        Locality
                      </option>
                      {LocalityList.map((item) => (
                        <option
                          key={item.id}
                          className="capitalize"
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {PostProperty?.Property_Type === "farmhouse" && (
                <div className="flex justify-center items-start flex-col">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <input
                    {...register("project_name", {
                      required: true,
                    })}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    name=""
                    type="text"
                    placeholder="Colony / Society"
                    id="apart"
                  />

                  <select
                    {...register("locality_id", {
                      required: true,
                    })}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Locality"
                    id="locality"
                  >
                    <option selected hidden>
                      Locality
                    </option>
                    {LocalityList.map((item) => (
                      <option
                        key={item.id}
                        className="capitalize"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {PostProperty?.Property_Type === "floor" && (
                <div className="flex justify-center items-start flex-col">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <input
                    {...register("project_name")}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Colony / Society"
                    id="apart"
                  />

                  <select
                    {...register("locality_id")}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Locality"
                    id="locality"
                  >
                    <option selected hidden>
                      Locality
                    </option>
                    {LocalityList.map((item) => (
                      <option
                        key={item.id}
                        className="capitalize"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <input
                    {...register("unit_no")}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Unit No."
                    id="houseNo"
                  ></input>
                </div>
              )}

              {PostProperty?.Property_Type === "office" && (
                <div className="flex justify-center items-start flex-col">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    name="propertyname"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("project_name")}
                    type="text"
                    placeholder="Colony / Society"
                    id="apart"
                  />

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("project")}
                    type="text"
                    placeholder="Project / Township / Mall"
                    id="apart"
                  />

                  <select
                    {...register("locality_id")}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Locality"
                    id="locality"
                  >
                    <option selected hidden>
                      Locality
                    </option>
                    {LocalityList.map((item) => (
                      <option
                        key={item.id}
                        className="capitalize"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("unit_no")}
                    type="text"
                    placeholder="Unit No."
                    id="houseNo"
                  ></input>
                </div>
              )}

              {PostProperty?.Property_Type === "shop" && (
                <div className="flex justify-center items-start flex-col">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("project_name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Colony / Society"
                    id="apart"
                  />

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("project")}
                    type="text"
                    placeholder="Project / Township / Mall"
                    id="apart"
                  />

                  <select
                    {...register("locality_id", {
                      required: true,
                    })}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Locality"
                    id="locality"
                  >
                    <option selected hidden>
                      Locality
                    </option>
                    {LocalityList.map((item) => (
                      <option
                        key={item.id}
                        className="capitalize"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("shop_no", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Shop No."
                    id="houseNo"
                  />
                </div>
              )}

              {(PostProperty?.Property_Type === "factory" ||
                PostProperty?.Property_Type === "warehouse") && (
                <div className="flex justify-center items-start flex-col">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    name="propertyname"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    {...register("project_name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Project /  SEZ / Industrial Area"
                    id="project"
                    required=""
                  />

                  <select
                    {...register("locality_id", {
                      required: true,
                    })}
                    className="border-1 h-11  px-2 text-lg w-72 my-1 placeholder-gray-600"
                    type="text"
                    placeholder="Locality"
                    id="locality"
                  >
                    <option selected hidden>
                      Locality
                    </option>
                    {LocalityList.map((item) => (
                      <option
                        key={item.id}
                        className="capitalize"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
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

export default Step2;
