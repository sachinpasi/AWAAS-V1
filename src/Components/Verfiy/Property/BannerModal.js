import axios from "axios";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import SelectSearch from "react-select-search";
import { API } from "../../../API";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";

const BannerModal = ({ isEditOpen, setisEditOpen, setisAnyThingUpdated }) => {
  const [LocalityList, setLocalityList] = useState([]);

  const { Data } = useSelector(selectPropertySaleDetails);
  const user = useSelector(selectUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

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

  const HandleLocationDetailsSubmit = async (data) => {
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
      setisEditOpen(false);
    }
  };

  useEffect(() => {
    FetchLocality();
  }, []);

  return (
    <>
      <div
        onClick={() => setisEditOpen(!isEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-450px bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setisEditOpen(!isEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
        <form
          onSubmit={handleSubmit(HandleLocationDetailsSubmit)}
          className="w-full h-full flex justify-between flex-col "
        >
          <div>
            <h4 className="text-2xl font-medium  uppercase mb-5">
              Update Location Details
            </h4>
            {Data?.property_type === "land" && (
              <div className="flex justify-between flex-col">
                <input
                  className="border-1 h-11  px-2 text-lg w-72 my-1.5 "
                  type="text"
                  placeholder="City"
                  defaultValue="Panipat"
                  disabled
                />
                <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                  <input
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" && "border-red"
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Colony / Society
                  </label>
                </div>
                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>
                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
                </div>

                <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                  <input
                    {...register("plot_no")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.plot_no?.type === "required" && "border-red"
                    }`}
                    type="text"
                    placeholder=" "
                    id="plotNo"
                    defaultValue={Data?.plot_no}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Plot No
                  </label>
                </div>
              </div>
            )}

            {Data?.property_type === "flat" && (
              <div className="flex justify-between flex-col">
                <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                  <input
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Colony / Society
                  </label>
                </div>
                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>
                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
                </div>
                {/* <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                  <input
                    // {...register("plot_no", { required: true })}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.plot_no?.type === "required" && "border-red  "
                    }`}
                    type="text"
                    placeholder=" "
                    id="plotNo"
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Unit No
                  </label>
                </div> */}
              </div>
            )}

            {Data?.property_type === "villa" && (
              <div className="flex justify-between flex-col">
                <div className="outline relative h-11  w-72 focus-within:border-blue-500 my-1.5">
                  <input
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Colony / Society
                  </label>
                </div>
                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>
                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
                </div>
              </div>
            )}

            {Data?.property_type === "farmhouse" && (
              <div className="flex justify-between flex-col">
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
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Colony / Society
                  </label>
                </div>
                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>
                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
                </div>
              </div>
            )}

            {Data?.property_type === "floor" && (
              <div className="flex justify-between flex-col">
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
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Colony / Society
                  </label>
                </div>
                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>

                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
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
                    defaultValue={Data?.unit_no}
                  ></input>
                  <label
                    for="unit_no"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Unit No
                  </label>
                </div>
              </div>
            )}

            {Data?.property_type === "office" && (
              <div className="flex justify-between flex-col">
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
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project_name}
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
                    defaultValue={Data?.project}
                  />
                  <label
                    for="project"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Project / Township / Mall
                  </label>
                </div>

                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>

                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
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
                    defaultValue={Data?.unit_no}
                  ></input>
                  <label
                    for="unit_no"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Unit No
                  </label>
                </div>
              </div>
            )}

            {Data?.property_type === "shop" && (
              <div className="flex justify-between flex-col">
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
                    {...register("project_name")}
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    name="project_name"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project_name}
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
                    {...register("project")}
                    className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project?.type === "required" && "border-red  "
                    }`}
                    type="text"
                    placeholder=" "
                    id="apart"
                    defaultValue={Data?.project}
                  />
                  <label
                    for="project"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Project / Township / Mall
                  </label>
                </div>

                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>

                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
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
                    defaultValue={Data?.shop_no}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Shop No
                  </label>
                </div>
              </div>
            )}

            {(Data?.property_type === "factory" ||
              Data?.property_type === "warehouse") && (
              <div className="flex justify-between flex-col">
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
                    {...register("project_name")}
                    className={`block p-4 w-full border-1 h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.project_name?.type === "required" &&
                      "border-red  "
                    }`}
                    type="text"
                    placeholder=" "
                    id="project"
                    defaultValue={Data?.project_name}
                  />
                  <label
                    for="project_name"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Project / SEZ / Industrial Area
                  </label>
                </div>

                <div className="outline relative h-11 flex items-center focus-within:border-blue-500 my-1.5 ">
                  <div
                    className={`border-1 h-11  text-lg w-72  placeholder-gray-600   ${
                      errors?.locality_id?.type === "required" && "border-red"
                    }`}
                  >
                    <Controller
                      name="locality_id"
                      control={control}
                      {...register("locality_id")}
                      defaultValue={Data?.locality_id}
                      render={({ field: { onChange } }) => (
                        <SelectSearch
                          options={options}
                          placeholder="Locality / Area / Sector "
                          filterOptions={fuzzySearch}
                          search
                          onChange={(selected) => onChange(selected)}
                          value={Data?.locality_id}
                        />
                      )}
                    />
                  </div>

                  <label
                    for="locality_id"
                    className="absolute top-0 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0"
                  >
                    Locality / Area / Sector
                  </label>
                  <p className="text-lg ml-4">
                    Current Locality - {Data?.locality_name}
                  </p>
                </div>
              </div>
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

export default BannerModal;
