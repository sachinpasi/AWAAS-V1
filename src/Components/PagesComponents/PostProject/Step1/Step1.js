import axios from "axios";
import { async } from "q";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { API } from "../../../../API";
import {
  RESET_POST_PROJECT_ID,
  selectPostProjectId,
  SET_POST_PROJECT_ID,
} from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step1 = () => {
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
          className="w-full h-full object-cover"
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

    formData.append("bannerImg", BannerImg);
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

  return (
    <form
      onSubmit={handleSubmit(HandleStep1Submit)}
      className="w-full h-full flex flex-col items-center "
    >
      <div className="w-full flex flex-col items-start justify-between border-1  p-8 py-6">
        <div className="w-full h-full flex flex-col items-start justify-start relative">
          <p className="text-3xl font-medium uppercase">Project Details</p>
          <div className="flex justify-between w-full">
            <div className="w-3/4 flex justify-between">
              <div className="flex flex-col items-start my-4">
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  type="text"
                  defaultValue="Panipat"
                  disabled
                />
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  placeholder="Project Title"
                  type="text"
                  {...register("projectTitle")}
                />
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  placeholder="Developer Title"
                  type="text"
                  {...register("developerName")}
                />
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  placeholder="RERA Number"
                  type="text"
                  {...register("rera")}
                />
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  placeholder="Locality / Area"
                  type="text"
                  {...register("projectLocality")}
                />
                <div>
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
                      value="Ready To Move"
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
                      <label className="text-xl my-2 mr-4">Possession By</label>
                      <select
                        className="border-1 h-11  px-2 text-lg w-72 my-1 mr-2 placeholder-gray-600"
                        id="possessionByMonth"
                        {...register("possessionByMonth")}
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
                        {...register("possessionByYear")}
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
                        {...register("ageOfConstruction")}
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
              <div className="flex flex-col items-start my-4">
                <textarea
                  className="border-1 h-28 py-2  px-2 text-lg w-96 my-1 mb-3 placeholder-gray-600"
                  placeholder="About The Project"
                  {...register("description")}
                />
                <textarea
                  className="border-1 h-28 py-2  px-2 text-lg w-96 my-1 mt-3 placeholder-gray-600"
                  placeholder="Developer Description"
                  {...register("aboutDeveloper")}
                />
                <div className="flex justify-end my-2 w-full">
                  <label className="customfileUpload bg-blue font-medium w-60">
                    Choose Banner Image
                    <input
                      onChange={HandleBannerImgChange}
                      type="file"
                      name="file"
                    />
                  </label>
                </div>
                <div className="flex justify-end my-2 w-full ">
                  <label className="customfileUpload bg-blue font-medium w-60">
                    Choose Project Logo
                    <input
                      onChange={HandleProjectLogoChange}
                      type="file"
                      name="file"
                    />
                  </label>
                </div>
                <div className="flex justify-end my-2 w-full">
                  <label className="customfileUpload bg-blue font-medium w-60">
                    Choose Developer Logo
                    <input
                      onChange={HandleDeveloperLogoChange}
                      type="file"
                      name="file"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-1/5 flex flex-col items-start">
              {BannerImg && (
                <div className="my-2">
                  <p className="text-lg">Project Logo Preview</p>
                  <div className="w-40 h-20 border-1 my-2 ">
                    {RenderPhotos(BannerImgPrev)}
                  </div>
                </div>
              )}
              {ProjectLogo && (
                <div className="my-3">
                  <p className="text-lg">Banner Image Preview</p>
                  <div className="w-40 h-20 border-1 my-2 ">
                    {RenderPhotos(ProjectLogoPrev)}
                  </div>
                </div>
              )}

              {DeveloperLogo && (
                <div className="my-3">
                  <p className="text-lg">Developer Logo Preview</p>
                  <div className="w-40 h-20 border-1 my-2 ">
                    {RenderPhotos(DeveloperLogoPrev)}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex my-4">
            <button
              className="bg-blue text-white flex justify-center items-center  h-10 font-medium text-lg w-60 "
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
