import axios from "axios";
import Fuse from "fuse.js";
import { MdClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import { API } from "../../../../API";
import { SET_POST_PROJECT_ID } from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step1 = () => {
  const [LocalityList, setLocalityList] = useState([]);
  const [PossessionState, setPossessionState] = useState({
    UnderConstruction: undefined,
    ReadyToMove: undefined,
  });

  const user = useSelector(selectUser);

  const [BannerImg, setBannerImg] = useState(null);
  const [ProjectLogo, setProjectLogo] = useState(null);
  const [DeveloperLogo, setDeveloperLogo] = useState(null);
  const [BannerImgPrev, setBannerImgPrev] = useState(null);
  const [ProjectLogoPrev, setProjectLogoPrev] = useState(null);
  const [DeveloperLogoPrev, setDeveloperLogoPrev] = useState(null);

  const HandleBannerImgChange = (e) => {
    setBannerImg(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setBannerImgPrev(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const HandleProjectLogoChange = (e) => {
    setProjectLogo(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setProjectLogoPrev(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };
  const HandleDeveloperLogoChange = (e) => {
    setDeveloperLogo(e.target.files[0]);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setDeveloperLogoPrev(fileArray);
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const RenderPhotos = (source) => {
    return source?.map((photo) => {
      return (
        <img
          className="w-full h-full object-cover rounded-xl"
          src={photo}
          key={photo}
          alt=""
        />
      );
    });
  };

  const dispatch = useDispatch();

  const HandleContinue = () => {
    dispatch(SET_CURRENT_STEP(2));
  };

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const HandleStep1Submit = async (data) => {
    console.log(data);
    const {
      aboutDeveloper,
      description,
      developerName,
      possession,
      possessionByMonth,
      possessionByYear,
      projectLocality,
      projectTitle,
      rera,
      ageOfConstruction,
    } = data;
    const formData = new FormData();

    formData.append("logo", ProjectLogo);
    formData.append("developerlogo", DeveloperLogo);
    formData.append("projectCity", "Panipat");
    formData.append("projectTitle", projectTitle);
    formData.append("developerName", developerName);
    formData.append("rera", rera);
    formData.append("projectLocality", projectLocality);
    formData.append("bannerImg", BannerImg);
    formData.append("aboutDeveloper", aboutDeveloper);
    formData.append("description", description);

    formData.append("possession", possession);
    formData.append("possessionByMonth", possessionByMonth);
    formData.append("possessionByYear", possessionByYear);
    formData.append("ageOfConstruction", ageOfConstruction);

    const res = await axios.post(`${API}/projects/store`, formData, {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    if (res.status === 200) {
      console.log(res);
      dispatch(SET_POST_PROJECT_ID(res.data.data.id));
      HandleContinue();
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
      value: _.name,
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

  console.log(errors);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    FetchLocality();
  }, []);

  const BannnerImageField = register("bannerImg", { required: true });
  const ProjectLogoField = register("logo", { required: true });
  const DeveloperLogoField = register("developerlogo", { required: true });

  return (
    <form
      onSubmit={handleSubmit(HandleStep1Submit)}
      className="w-full h-full flex flex-col items-center "
    >
      <div className="w-full flex flex-col items-start justify-between border-1  lg:p-8 p-2 py-6 mt-12 lg:mt-0">
        <div className="w-full h-full flex flex-col items-start justify-start relative">
          <p className="text-3xl font-medium uppercase">Project Details</p>
          <div className="flex justify-between w-full">
            <div className="lg:w-3/4 w-full flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col items-start my-4 w-full">
                <input
                  className="border-1 h-11  px-4  text-lg lg:w-80 w-full my-1.5 placeholder-gray-600"
                  type="text"
                  defaultValue="Panipat"
                  disabled
                />
                <div className="outline relative h-11  w-80 focus-within:border-blue-500 my-1.5">
                  <input
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.projectTitle?.type === "required" && "border-red"
                    }`}
                    placeholder=" "
                    type="text"
                    {...register("projectTitle", { required: true })}
                  />
                  <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                    Project Title
                  </label>
                </div>
                <div className="outline relative h-11  w-80 focus-within:border-blue-500 my-1.5">
                  <input
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.developerName?.type === "required" && "border-red"
                    }`}
                    placeholder=" "
                    type="text"
                    {...register("developerName", { required: true })}
                  />
                  <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                    Developer Title
                  </label>
                </div>

                <div className="outline relative h-11  w-80 focus-within:border-blue-500 my-1.5">
                  <input
                    className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                      errors?.rera?.type === "required" && "border-red"
                    }`}
                    placeholder=" "
                    type="text"
                    {...register("rera", { required: true })}
                  />
                  <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                    RERA Number
                  </label>
                </div>

                <div className="outline relative h-11  w-80 focus-within:border-blue-500 my-1.5">
                  <div
                    className={`border-1 h-11  text-lg w-full  placeholder-gray-600   ${
                      errors?.projectLocality?.type === "required" &&
                      "border-red"
                    }`}
                  >
                    <Controller
                      name="projectLocality"
                      control={control}
                      {...register("projectLocality", { required: true })}
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
                <div className="px-2 lg:px-0 ">
                  <p className="text-xl my-2">Possession </p>
                  <label
                    for="underConstruction"
                    className={` px-2 py-2 border-1 w-80 flex  cursor-pointerjustify-start items-center cursor-pointer my-2  ${
                      errors?.possession?.type === "required" && "border-red"
                    } `}
                  >
                    <input
                      className=" w-5 h-5  "
                      type="radio"
                      {...register("possession", {
                        required: true,
                      })}
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
                  </label>
                  <label
                    for="Ready to move"
                    className={` px-2 py-2 border-1 w-80 flex justify-start cursor-pointer items-center my-2   ${
                      errors?.possession?.type === "required" && "border-red"
                    } `}
                  >
                    <input
                      id="Ready to move"
                      className=" w-5 h-5 "
                      type="radio"
                      {...register("possession", {
                        required: true,
                      })}
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
                  </label>

                  {PossessionState.UnderConstruction && (
                    <div className="flex flex-col">
                      <label className="text-xl my-2 mr-4">Possession By</label>
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
                    <div div className="flex flex-col" id="possessionDetails2">
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
              </div>

              <div className="flex flex-col items-start my-4 w-full">
                <div className="outline relative h-28 lg:w-96 w-full focus-within:border-blue-500 my-1.5">
                  <textarea
                    className={`block px-4 py-2 border-1 w-full h-28 text-lg appearance-none placeholder-black focus:outline-none bg-transparent ${
                      errors?.description?.type === "required" && "border-red"
                    }`}
                    placeholder="About The Project "
                    {...register("description", { required: true })}
                  />
                </div>

                <div className="outline relative h-28 lg:w-96 w-full focus-within:border-blue-500 my-1.5">
                  <textarea
                    className={`block px-4 py-2 border-1 w-full h-28 text-lg appearance-none placeholder-black focus:outline-none bg-transparent ${
                      errors?.aboutDeveloper?.type === "required" &&
                      "border-red"
                    }`}
                    placeholder="Developer Description"
                    {...register("aboutDeveloper", { required: true })}
                  />
                </div>

                <div className="flex justify-start my-2 w-full ">
                  <label
                    className={`customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl ${
                      errors?.bannerImg?.type === "required"
                        ? "border-red"
                        : "border-lightgray"
                    } `}
                  >
                    <svg
                      class="w-8 h-8 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    Choose Banner Image
                    <input
                      type="file"
                      {...BannnerImageField}
                      onChange={(e) => HandleBannerImgChange(e)}
                    />
                  </label>
                </div>
                <div className="flex justify-start my-2 w-full ">
                  <label
                    className={`customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl ${
                      errors?.logo?.type === "required"
                        ? "border-red"
                        : "border-lightgray"
                    } `}
                  >
                    <svg
                      class="w-8 h-8 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    Choose Project Logo
                    <input
                      type="file"
                      {...ProjectLogoField}
                      onChange={HandleProjectLogoChange}
                    />
                  </label>
                </div>
                <div className="flex justify-start my-2 w-full">
                  <label
                    className={`customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl ${
                      errors?.developerlogo?.type === "required"
                        ? "border-red"
                        : "border-lightgray"
                    } `}
                  >
                    <svg
                      class="w-8 h-8 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    Choose Developer Logo
                    <input
                      type="file"
                      {...DeveloperLogoField}
                      onChange={HandleDeveloperLogoChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-1/5 flex-col items-start">
              {BannerImg && (
                <div className="my-3">
                  <p className="text-lg">Banner Image Preview</p>
                  <div className="w-40 h-20  my-2 relative ">
                    {/* <div
                      onClick={() => setBannerImg(null)}
                      className="absolute -right-2 -top-2 text-xl p-0.5 text-red bg-white rounded-full flex justify-center items-center shadow cursor-pointer hover:scale-95 transform"
                    >
                      <MdClose />
                    </div> */}
                    {RenderPhotos(BannerImgPrev)}
                  </div>
                </div>
              )}
              {ProjectLogo && (
                <div className="my-2">
                  <p className="text-lg">Project Logo Preview</p>
                  <div className="w-40 h-20  my-2 relative ">
                    {/* <div
                      onClick={() => setProjectLogo(null)}
                      className="absolute -right-2 -top-2 text-xl p-0.5 text-red bg-white rounded-full flex justify-center items-center shadow cursor-pointer hover:scale-95 transform"
                    >
                      <MdClose />
                    </div> */}
                    {RenderPhotos(ProjectLogoPrev)}
                  </div>
                </div>
              )}

              {DeveloperLogo && (
                <div className="my-3">
                  <p className="text-lg">Developer Logo Preview</p>
                  <div className="w-40 h-20  my-2 relative ">
                    {/* <div
                      onClick={() => setDeveloperLogo(null)}
                      className="absolute -right-2 -top-2 text-xl p-0.5 text-red bg-white rounded-full flex justify-center items-center shadow cursor-pointer hover:scale-95 transform"
                    >
                      <MdClose />
                    </div> */}
                    {RenderPhotos(DeveloperLogoPrev)}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex my-4">
            <button
              className="bg-blue text-white flex justify-center items-center  h-10 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step1;
