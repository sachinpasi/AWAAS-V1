import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { API } from "../../../../API";
import Fuse from "fuse.js";
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
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

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
    control,
  } = useForm();

  const HandleNext = () => {
    dispatch(SET_CURRENT_STEP(3));
  };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(1));
  };

  const HandleStep2Submit = async (data) => {
    // console.log(data);
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

  const options = LocalityList.sort()
    .reverse()
    .map((_) => ({
      name: _.name,
      value: _.id,
    }));

  function fuzzySearch(options) {
    const fuse = new Fuse(options, {
      keys: ["name", "groupName", "items.name"],
      threshold: 0.3,
    });

    return (value) => {
      if (!value.length) {
        return options;
      }

      return fuse.search(value);
    };
  }

  // console.log(errors);

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
        className="lg:w-65percent w-full flex flex-col items-start justify-between border-1  min-h-70vh h-full lg:p-8  py-6"
      >
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />

          {CurrentStep === 2 && (
            <div className="py-6 w-full h-full flex flex-col justify-between px-4">
              {PostProperty?.Property_Type === "land" && (
                <>
                  <div className="flex justify-center lg:items-start items-center flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      className="border-1 h-11  px-2 text-lg w-72 my-1.5 "
                      type="text"
                      placeholder="City"
                      defaultValue="Panipat"
                      disabled
                    />
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("project_name", { required: true })}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.project_name?.type === "required" &&
                          "border-red"
                        }`}
                        type="text"
                        name="project_name"
                        placeholder=" "
                      />
                      <label
                        for="project_name"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Colony / Society
                      </label>
                    </div>
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                      <div
                        className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                          errors?.locality_id?.type === "required" &&
                          "border-red"
                        }`}
                      >
                        <Controller
                          name="locality_id"
                          control={control}
                          {...register("locality_id", { required: true })}
                          render={({ field: { onChange } }) => (
                            <SelectSearch
                              options={options}
                              placeholder="Locality / Area / Sector "
                              filterOptions={fuzzySearch}
                              search
                              onChange={(selected) => onChange(selected)}
                            />
                          )}
                        />
                      </div>
                      {/* <label
                        for="locality_id"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Locality / Area / Sector
                      </label> */}
                    </div>

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("plot_no", { required: true })}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.plot_no?.type === "required" && "border-red"
                        }`}
                        type="text"
                        placeholder=" "
                        id="plotNo"
                      />
                      <label
                        for="project_name"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Plot No
                      </label>
                    </div>
                  </div>
                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.plot_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </>
              )}
              {PostProperty?.Property_Type === "flat" && (
                <>
                  <div className="flex justify-center lg:items-start items-center flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      {...register("city")}
                      className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                      type="text"
                      placeholder="City"
                      id="city"
                      value="Panipat"
                      disabled
                    />

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("project_name", { required: true })}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.project_name?.type === "required" &&
                          "border-red  "
                        }`}
                        type="text"
                        placeholder=" "
                        id="apart"
                      />
                      <label
                        for="project_name"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Colony / Society
                      </label>
                    </div>

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                      <div
                        className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                          errors?.locality_id?.type === "required" &&
                          "border-red"
                        }`}
                      >
                        <Controller
                          name="locality_id"
                          control={control}
                          {...register("locality_id", { required: true })}
                          render={({ field: { onChange } }) => (
                            <SelectSearch
                              options={options}
                              placeholder="Locality / Area / Sector "
                              filterOptions={fuzzySearch}
                              search
                              onChange={(selected) => onChange(selected)}
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        // {...register("plot_no", { required: true })}
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.plot_no?.type === "required" && "border-red  "
                        }`}
                        type="text"
                        placeholder=" "
                        id="plotNo"
                      />
                      <label
                        for="project_name"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Unit No
                      </label>
                    </div>
                  </div>
                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.plot_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </>
              )}

              {PostProperty?.Property_Type === "villa" && (
                <>
                  <div className="flex justify-center lg:items-start items-center flex-col ">
                    <h4 className="text-2xl font-medium  uppercase mb-4">
                      {" "}
                      Location Details
                    </h4>

                    <input
                      className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                      type="text"
                      placeholder="City"
                      id="city"
                      value={"Panipat"}
                      disabled
                    />

                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                      <input
                        {...register("project_name", { required: true })}
                        className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.project_name?.type === "required" &&
                          "border-red  "
                        }`}
                        type="text"
                        name="project_name"
                        placeholder=" "
                        id="apart"
                      />
                      <label
                        for="project_name"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Colony / Society
                      </label>
                    </div>
                    <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                      <div
                        className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                          errors?.locality_id?.type === "required" &&
                          "border-red"
                        }`}
                      >
                        <Controller
                          name="locality_id"
                          control={control}
                          {...register("locality_id", { required: true })}
                          render={({ field: { onChange } }) => (
                            <SelectSearch
                              options={options}
                              placeholder="Locality / Area / Sector "
                              filterOptions={fuzzySearch}
                              search
                              onChange={(selected) => onChange(selected)}
                            />
                          )}
                        />
                      </div>
                      {/* <label
                        for="locality_id"
                        className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                      >
                        Locality / Area / Sector
                      </label> */}
                    </div>

                    <div className="">
                      {(errors?.locality_id?.type === "required" ||
                        errors?.project_name?.type === "required" ||
                        errors?.plot_no?.type === "required") && (
                        <p className="text-red mx-1 text-sm ">
                          * Please fill all the fields.
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {PostProperty?.Property_Type === "farmhouse" && (
                <div className="flex justify-center lg:items-start items-center flex-col ">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project_name", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project_name?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      name="project_name"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Colony / Society
                    </label>
                  </div>
                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                    <div
                      className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                        errors?.locality_id?.type === "required" && "border-red"
                      }`}
                    >
                      <Controller
                        name="locality_id"
                        control={control}
                        {...register("locality_id", { required: true })}
                        render={({ field: { onChange } }) => (
                          <SelectSearch
                            options={options}
                            placeholder="Locality / Area / Sector "
                            filterOptions={fuzzySearch}
                            search
                            onChange={(selected) => onChange(selected)}
                          />
                        )}
                      />
                    </div>
                    {/* <label
                      for="locality_id"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Locality / Area / Sector
                    </label> */}
                  </div>
                </div>
              )}
              {PostProperty?.Property_Type === "floor" && (
                <div className="flex justify-center lg:items-start items-center flex-col ">
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

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project_name", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project_name?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      name="project_name"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Colony / Society
                    </label>
                  </div>
                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5 ">
                    <div
                      className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                        errors?.locality_id?.type === "required" && "border-red"
                      }`}
                    >
                      <Controller
                        name="locality_id"
                        control={control}
                        {...register("locality_id", { required: true })}
                        render={({ field: { onChange } }) => (
                          <SelectSearch
                            options={options}
                            placeholder="Locality / Area / Sector "
                            filterOptions={fuzzySearch}
                            search
                            onChange={(selected) => onChange(selected)}
                          />
                        )}
                      />
                    </div>
                    {/* <label
                      for="locality_id"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Locality / Area / Sector
                    </label> */}
                  </div>

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("unit_no", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.unit_no?.type === "required" && "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      name="unit_no"
                    ></input>
                    <label
                      for="unit_no"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Unit No
                    </label>
                  </div>

                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.unit_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {PostProperty?.Property_Type === "office" && (
                <div className="flex justify-center lg:items-start items-center flex-col ">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                    name="propertyname"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled
                  />

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project_name", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project_name?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      name="project_name"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Colony / Society
                    </label>
                  </div>

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project?.type === "required" && "border-red  "
                      }`}
                      {...register("project", { required: true })}
                      type="text"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Project / Township / Mall
                    </label>
                  </div>

                  <div
                    className={`border-1 h-11  text-lg w-72 my-1 placeholder-gray-600 ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      control={control}
                      {...register("locality_id", { required: true })}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector"
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                        />
                      )}
                    />
                  </div>

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("unit_no", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent  ${
                        errors?.unit_no?.type === "required" && "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      id="houseNo"
                    ></input>
                    <label
                      for="Unit No"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Unit No
                    </label>
                  </div>

                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.unit_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {PostProperty?.Property_Type === "shop" && (
                <div className="flex justify-center lg:items-start items-center flex-col ">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled
                  />

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project_name", { required: true })}
                      className={`block border-1 p-4 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project_name?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Colony / Society
                    </label>
                  </div>

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project?.type === "required" && "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      id="apart"
                    />
                    <label
                      for="project"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Project / Township / Mall
                    </label>
                  </div>

                  <div
                    className={`border-1 h-11  text-lg w-72 my-1 placeholder-gray-600 ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      control={control}
                      {...register("locality_id", { required: true })}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector"
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                        />
                      )}
                    />
                  </div>

                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("shop_no", { required: true })}
                      className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.shop_no?.type === "required" && "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      id="plotNo"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Shop No
                    </label>
                  </div>

                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.plot_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {(PostProperty?.Property_Type === "factory" ||
                PostProperty?.Property_Type === "warehouse") && (
                <div className="flex justify-center lg:items-start items-center flex-col ">
                  <h4 className="text-2xl font-medium  uppercase mb-4">
                    {" "}
                    Location Details
                  </h4>

                  <input
                    className="border-1 h-11  px-2 text-lg w-72 my-1.5 placeholder-gray-600"
                    name="propertyname"
                    type="text"
                    placeholder="City"
                    id="city"
                    value="Panipat"
                    disabled=""
                  />
                  <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                    <input
                      {...register("project_name", { required: true })}
                      className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.project_name?.type === "required" &&
                        "border-red  "
                      }`}
                      type="text"
                      placeholder=" "
                      id="project"
                    />
                    <label
                      for="project_name"
                      className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                    >
                      Project / SEZ / Industrial Area
                    </label>
                  </div>

                  <div
                    className={`border-1 h-11  text-lg w-72 my-1 placeholder-gray-600 ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      control={control}
                      {...register("locality_id", { required: true })}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector"
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                        />
                      )}
                    />
                  </div>
                  <div className="">
                    {(errors?.locality_id?.type === "required" ||
                      errors?.project_name?.type === "required" ||
                      errors?.plot_no?.type === "required") && (
                      <p className="text-red mx-1 text-sm ">
                        * Please fill all the fields.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="w-full   flex flex-col lg:flex-row justify-end lg:items-end items-center px-4 lg:px-0">
          <button
            onClick={HandlePrevious}
            className="lg:w-44 w-full h-12 bg-blue text-xl font-medium text-white my-2 rounded-full lg:rounded-none lg:mx-2"
          >
            Previous
          </button>
          <button
            type="submit"
            className="lg:w-44 w-full h-12 bg-blue text-xl font-medium text-white my-2 rounded-full lg:rounded-none hover:bg-extradarkblue "
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
