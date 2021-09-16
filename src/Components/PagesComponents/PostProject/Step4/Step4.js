import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { API } from "../../../../API";
import {
  selectPostProject,
  selectPostProjectId,
  SET_POST_PROJECT_PROPERTY,
} from "../../../../Redux/_features/_PostProjectSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import Loader from "../../../Preloader/Loader";

const Step4 = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [Error, setError] = useState([]);
  const [Response, setResponse] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const [TotalRequestObject, setTotalRequestObject] = useState({
    Flat: 0,
    Villa: 0,
    Sco: 0,
    Plot: 0,
    Commercial: 0,
    Office: 0,
  });
  console.log(isLoading);

  const [AddFlat, setAddFlat] = useState(false);
  const [AddVilla, setAddVilla] = useState(false);
  const [AddSco, setAddSco] = useState(null);
  const [AddPlot, setAddPlot] = useState(null);
  const [AddCommercial, setAddCommercial] = useState(null);
  const [AddOffice, setAddOffice] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostProjectId);

  const ActiveTabs = useSelector(selectPostProject);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Flat: [],
      Villa: [],
      Sco: [],
      Plot: [],
      Commercial: [],
      Office: [],
    },
  });

  const {
    fields: FLAT_FIELDS,
    remove: REMOVE_FLAT,
    append: ADD_FLAT,
  } = useFieldArray({
    control,
    name: "Flat",
  });

  const {
    fields: VILLA_FIELDS,
    remove: REMOVE_VILLA,
    append: ADD_VILLA,
  } = useFieldArray({
    control,
    name: "Villa",
  });
  const {
    fields: SCO_FIELDS,
    remove: REMOVE_SCO,
    append: ADD_SC0,
  } = useFieldArray({
    control,
    name: "Sco",
  });
  const {
    fields: PLOT_FIELDS,
    remove: REMOVE_PLOT,
    append: ADD_PLOT,
  } = useFieldArray({
    control,
    name: "Plot",
  });

  const {
    fields: COMMERCIAL_FIELDS,
    remove: REMOVE_COMMERCIAL,
    append: ADD_COMMERCIAL,
  } = useFieldArray({
    control,
    name: "Commercial",
  });

  const {
    fields: OFFICE_FIELDS,
    remove: REMOVE_OFFICE,
    append: ADD_OFFICE,
  } = useFieldArray({
    control,
    name: "Office",
  });

  const HandleNavScroll = () => {
    if (window.scrollY >= 150) {
      setisNavOpen(true);
    } else {
      setisNavOpen(false);
    }
  };
  const history = useHistory();

  window.addEventListener("scroll", HandleNavScroll);

  const onSubmit = (data) => {
    setisLoading(true);
    setTotalRequestObject((prevState) => ({
      ...prevState,
      Flat: 0,
      Villa: 0,
      Sco: 0,
      Plot: 0,
      Commercial: 0,
      Office: 0,
    }));
    setResponse([]);
    setError([]);
    console.log(data);

    if (data?.Flat) {
      const FLAT_ARRAY = data?.Flat;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Flat: FLAT_ARRAY?.length,
      }));
      FLAT_ARRAY?.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("flatTitle", item.flatTitle);
          formData.append("flatName", item.flatName);
          formData.append("flatArea", item.flatArea);
          formData.append("flatAreaUnit", item.flatAreaUnit);
          formData.append("flatCarpetArea", item.flatCarpetArea);
          formData.append("flatCarpetAreaUnit", item.flatCarpetAreaUnit);
          formData.append("flatBuiltUpArea", item.flatBuiltUpArea);
          formData.append("flatBuiltUpAreaUnit", item.flatBuiltUpAreaUnit);
          formData.append("flatSuperBuiltUpArea", item.flatSuperBuiltUpArea);
          formData.append(
            "flatSuperBuiltUpAreaUnit",
            item.flatSuperBuiltUpAreaUnit
          );
          formData.append("flatPrice", item.flatPrice);
          formData.append("flatPriceUnit", item.flatPriceUnit);
          formData.append("flatTotalPrice", item.flatTotalPrice);
          formData.append("flatMinimunPrice", item.flatMinimunPrice);
          formData.append("flatMaximumPrice", item.flatMaximumPrice);

          formData.append("id", TableId);

          Array.from(item.flatFloorPlan).map((file, index) =>
            formData.append(`flatFloorPlan[${index}]`, file)
          );
          Array.from(item.flatImages).map((file, index) =>
            formData.append(`flatImages[${index}]`, file)
          );

          const UploadFlat = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-flat`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error?.response?.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };
          UploadFlat();
        }
      });
    }

    if (data?.Villa) {
      const VILLA_ARRAY = data?.Villa;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Villa: VILLA_ARRAY?.length,
      }));
      VILLA_ARRAY.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("villaTitle", item.villaTitle);
          formData.append("villaName", item.villaName);
          formData.append("villaCarpetArea", item.villaCarpetArea);
          formData.append("villaCarpetAreaUnit", item.villaCarpetAreaUnit);
          formData.append("villaBuiltUpArea", item.villaBuiltUpArea);
          formData.append("villaBuiltUpAreaUnit", item.villaBuiltUpAreaUnit);
          formData.append("villaSuperBuiltUpArea", item.villaSuperBuiltUpArea);
          formData.append(
            "villaSuperBuiltUpAreaUnit",
            item.villaSuperBuiltUpAreaUnit
          );
          formData.append("villaPrice", item.villaPrice);
          formData.append("villaPriceUnit", item.villaPriceUnit);
          formData.append("villaTotalPrice", item.villaTotalPrice);
          formData.append("villaMinimunPrice", item.villaMinimunPrice);
          formData.append("villaMaximumPrice", item.villaMaximumPrice);
          formData.append("villaType", item.villaType);

          formData.append("id", TableId);

          Array.from(item.villaFloorPlan).map((file, index) =>
            formData.append(`villaFloorPlan[${index}]`, file)
          );
          Array.from(item.villaImages).map((file, index) =>
            formData.append(`villaImages[${index}]`, file)
          );

          const UploadFlat = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-villa`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error?.response?.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["VILLA", index]]);
              }
            }
          };

          UploadFlat();
        }
      });
    }

    if (data?.Sco) {
      const SCO_ARRAY = data?.Sco;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Sco: SCO_ARRAY?.length,
      }));
      SCO_ARRAY.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("Title", item.Title);
          formData.append("Name", item.Name);
          formData.append("CarpetArea", item.CarpetArea);
          formData.append("CarpetAreaUnit", item.CarpetAreaUnit);
          formData.append("BuiltUpArea", item.BuiltUpArea);
          formData.append("BuiltUpAreaUnit", item.BuiltUpAreaUnit);
          formData.append("SuperBuiltUpArea", item.SuperBuiltUpArea);
          formData.append("SuperBuiltUpAreaUnit", item.SuperBuiltUpAreaUnit);
          formData.append("Price", item.Price);
          formData.append("PriceUnit", item.PriceUnit);
          formData.append("TotalPrice", item.TotalPrice);
          formData.append("MinimunPrice", item.MinimunPrice);
          formData.append("MaximumPrice", item.MaximumPrice);
          formData.append("total_floor", item.total_floor);
          formData.append("floor_no", item.floor_no);
          formData.append("basement", item.basement);

          formData.append("id", TableId);

          Array.from(item.FloorPlan).map((file, index) =>
            formData.append(`FloorPlan[${index}]`, file)
          );
          Array.from(item.Images).map((file, index) =>
            formData.append(`Images[${index}]`, file)
          );

          const UploadFlat = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-sco`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error.response.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["SCO", index]]);
              }
            }
          };

          UploadFlat();
        }
      });
    }
    if (data?.Plot) {
      const PLOT_ARRAY = data?.Plot;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Plot: PLOT_ARRAY?.length,
      }));
      PLOT_ARRAY.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("Title", item.Title);
          formData.append("ProjectTitle", item.ProjectTitle);
          formData.append("Length", item.Length);
          formData.append("Width", item.Width);
          formData.append("Width", item.Width);
          formData.append("LengthwidthUnit", item.LengthwidthUnit);
          formData.append("PlotSize", item.PlotSize);

          formData.append("Price", item.Price);
          formData.append("PriceUnit", item.PriceUnit);
          formData.append("TotalPrice", item.TotalPrice);
          formData.append("MinimunPrice", item.MinimunPrice);
          formData.append("MaximumPrice", item.MaximumPrice);

          formData.append("id", TableId);

          Array.from(item.Images).map((file, index) =>
            formData.append(`Images[${index}]`, file)
          );

          const UploadPlot = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-plot`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error.response.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["PLOT", index]]);
              }
            }
          };

          UploadPlot();
        }
      });
    }
    if (data?.Commercial) {
      const COMMERCIAL_ARRAY = data?.Commercial;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Commercial: COMMERCIAL_ARRAY?.length,
      }));
      COMMERCIAL_ARRAY?.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("Title", item.Title);
          formData.append("ProjectTitle", item.ProjectTitle);
          formData.append("Length", item.Length);
          formData.append("Width", item.Width);
          formData.append("Width", item.Width);
          formData.append("LengthwidthUnit", item.LengthwidthUnit);
          formData.append("PlotSize", item.PlotSize);

          formData.append("Price", item.Price);
          formData.append("PriceUnit", item.PriceUnit);
          formData.append("TotalPrice", item.TotalPrice);
          formData.append("MinimunPrice", item.MinimunPrice);
          formData.append("MaximumPrice", item.MaximumPrice);
          formData.append("TotalFloor", item.TotalFloor);
          formData.append("Basement", item.Basement);

          formData.append("id", TableId);

          Array.from(item.Images).map((file, index) =>
            formData.append(`Images[${index}]`, file)
          );

          const UploadCommercial = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-commercial`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error?.response?.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["COMMERCIAL", index]]);
              }
            }
          };

          UploadCommercial();
        }
      });
    }
    if (data?.Office) {
      const OFFICE_ARRAY = data?.Office;
      setTotalRequestObject((prevState) => ({
        ...prevState,
        Office: OFFICE_ARRAY?.length,
      }));
      OFFICE_ARRAY.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("Title", item.Title);
          formData.append("ProjectTitle", item.ProjectTitle);
          formData.append("Length", item.Length);
          formData.append("Width", item.Width);
          formData.append("Width", item.Width);
          formData.append("LengthwidthUnit", item.LengthwidthUnit);
          formData.append("PlotSize", item.PlotSize);
          formData.append("CarpetArea", item.CarpetArea);
          formData.append("CarpetAreaUnit", item.CarpetAreaUnit);
          formData.append("BuiltUpArea", item.BuiltUpArea);
          formData.append("BuiltUpAreaUnit", item.BuiltUpAreaUnit);
          formData.append("SuperBuiltUpArea", item.SuperBuiltUpArea);
          formData.append("SuperBuiltUpAreaUnit", item.SuperBuiltUpAreaUnit);
          formData.append("TotalFloor", item.TotalFloor);
          formData.append("Basement", item.Basement);

          formData.append("Price", item.Price);
          formData.append("PriceUnit", item.PriceUnit);
          formData.append("TotalPrice", item.TotalPrice);
          formData.append("MinimunPrice", item.MinimunPrice);
          formData.append("MaximumPrice", item.MaximumPrice);

          formData.append("id", TableId);

          Array.from(item.Images).map((file, index) =>
            formData.append(`Images[${index}]`, file)
          );

          const UploadCommercial = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-space`,
                formData,
                {
                  headers: {
                    Method: "POST",
                    ContentType: "multipart/form-data",
                    Authorization: `Bearer ${user.token}`,
                  },
                }
              );

              console.log(res);
              if (res.status === 200) {
                setResponse((Prev) => [...Prev, true]);
              }
            } catch (error) {
              if (error.response.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["OFFICE", index]]);
              }
            }
          };

          UploadCommercial();
        }
      });
    }
  };

  console.log(Error);

  useEffect(() => {
    const CheckTrue = (value) => value === true;
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const TotalNoOfRequest = Object.values(TotalRequestObject).reduce(reducer);

    if ((Response.length !== 0 && Response?.length) === TotalNoOfRequest) {
      if (Response.length !== 0) {
        if (Response.every(CheckTrue)) {
          setisLoading(false);
          setTimeout(() => {
            history.push("/profile/projects/listings");
          }, 1000);
          return toast.success("Project Added Sucessfully");
        } else {
          setisLoading(false);

          return toast.error("All Fields Are Mandatory");
        }
      }
    }
  }, [Response, TotalRequestObject]);

  useEffect(() => {
    dispatch(
      SET_POST_PROJECT_PROPERTY({
        addFlat: AddFlat,
        addVilla: AddVilla,
        addSco: AddSco,
        addPlot: AddPlot,
        addCommercial: AddCommercial,
        addOffice: AddOffice,
      })
    );
  }, [dispatch, AddFlat, AddVilla, AddSco, AddPlot, AddCommercial, AddOffice]);
  return (
    <>
      {isLoading && <Loader />}
      <header
        className={`${
          isNavOpen ? "visible" : "hidden"
        } w-full fixed bg-white h-20 z-40 top-0 flex justify-center items-center shadow transition-all`}
      >
        <div className="flex my-1   ">
          <div
            onClick={() => {
              setAddFlat(true);
              ADD_FLAT({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD FLAT
            </p>
          </div>{" "}
          <div
            onClick={() => {
              setAddVilla(true);
              ADD_VILLA({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD VILLA
            </p>
          </div>{" "}
          <div
            onClick={() => {
              setAddSco(true);
              ADD_SC0({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD SCO
            </p>
          </div>{" "}
          <div
            onClick={() => {
              setAddPlot(true);
              ADD_PLOT({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD LAND / PLOT
            </p>
          </div>{" "}
          <div
            onClick={() => {
              setAddCommercial(true);
              ADD_COMMERCIAL({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD COMMERCIAL
            </p>
          </div>
          <div
            onClick={() => {
              setAddOffice(true);
              ADD_OFFICE({});
            }}
            className={`px-7 py-2 bg-blue  rounded-full cursor-pointer mr-4`}
          >
            <p
              className={`text-base font-medium text-center  text-white uppercase`}
            >
              ADD MALL / OFFICE
            </p>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min flex flex-col items-center pt-12 lg:pt-0 "
      >
        <div className="w-full flex flex-col items-start justify-between border-1  lg:p-8 p-2 py-6">
          <div className="w-full  relative ">
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-4 border-b-2 pb-4 ">
              <div
                onClick={() => {
                  setAddFlat(true);
                  ADD_FLAT({});
                }}
                style={{
                  backgroundImage: "url(/assets/images/postproject/flat.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + FLAT
                  </p>
                </div>
              </div>{" "}
              <div
                onClick={() => {
                  setAddVilla(true);
                  ADD_VILLA({});
                }}
                style={{
                  backgroundImage: "url(/assets/images/postproject/villa.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + VILLA
                  </p>
                </div>
              </div>{" "}
              <div
                onClick={() => {
                  setAddSco(true);
                  ADD_SC0({});
                }}
                style={{
                  backgroundImage: "url(/assets/images/postproject/sco.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + SCO
                  </p>
                </div>
              </div>{" "}
              <div
                onClick={() => {
                  setAddPlot(true);
                  ADD_PLOT({});
                }}
                style={{
                  backgroundImage: "url(/assets/images/postproject/plot.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + LAND / PLOT
                  </p>
                </div>
              </div>{" "}
              <div
                onClick={() => {
                  setAddCommercial(true);
                  ADD_COMMERCIAL({});
                }}
                style={{
                  backgroundImage:
                    "url(/assets/images/postproject/commercial.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + Commercial
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setAddOffice(true);
                  ADD_OFFICE({});
                }}
                style={{
                  backgroundImage: "url(/assets/images/postproject/mall.jpg)",
                }}
                className={`h-60 bg-cover bg-center  cursor-pointer lg:p-8 p-4  `}
              >
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50 transform transition-transform hover:scale-105 ">
                  <p
                    className={`lg:text-3xl  text-2xl font-semibold text-center  text-white uppercase`}
                  >
                    + MALL / OFFICE
                  </p>
                </div>
              </div>
            </div>

            {ActiveTabs?.addFlat && (
              <>
                {FLAT_FIELDS.map((item, index) => {
                  return (
                    <li
                      id={item.id}
                      className="lg:w-3/4 w-full  my-4  flex flex-col items-start border-b-2 relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`Flat No `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        Flat / APARTMENT / FLOOR DETAILS
                      </h4>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Flat &&
                            errors?.Flat[index]?.flatTitle?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Flat[${index}].flatTitle`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Flat / Apartment / Floor Title
                        </label>
                      </div>{" "}
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Flat &&
                            errors?.Flat[index]?.flatName?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Flat[${index}].flatName`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Flat / Apartment / Floor Name
                        </label>
                      </div>{" "}
                      <div className="flex ">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Plot Area
                          </label>
                        </div>{" "}
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-2/5  my-1.5 lg:ml-2 placeholder-gray-600"
                          {...register(`Flat[${index}].flatAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                          <option>acres</option>
                          <option>hectares</option>
                          <option>bigha</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatCarpetArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatCarpetArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Carpet Area
                          </label>
                        </div>{" "}
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-2/5  my-1.5 lg:ml-2 placeholder-gray-600"
                          {...register(`Flat[${index}].flatCarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatBuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatBuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-2/5  my-1.5 lg:ml-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`Flat[${index}].flatBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatSuperBuiltUpArea
                                ?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatSuperBuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Super Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-2/5  my-1.5 lg:ml-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(
                            `Flat[${index}].flatSuperBuiltUpAreaUnit`
                          )}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-2/5  my-1.5 lg:ml-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Flat[${index}].flatPriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Flat &&
                            errors?.Flat[index]?.flatTotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Flat[${index}].flatTotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>
                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatMinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatMinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Minimum Price
                          </label>
                        </div>
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Flat &&
                              errors?.Flat[index]?.flatMinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Flat[${index}].flatMaximumPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col w-full">
                        <label
                          className={`${
                            errors?.Flat &&
                            (errors?.Flat[index]?.flatFloorPlan?.type ===
                              "acceptedFormats" ||
                              errors?.Flat[index]?.flatFloorPlan?.type ===
                                "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Flat / Floor Plan
                          <input
                            {...register(`Flat[${index}].flatFloorPlan[]`)}
                            type="file"
                          />
                        </label>

                        <label
                          className={`${
                            errors?.Flat &&
                            (errors?.Flat[index]?.flatImages?.type ===
                              "acceptedFormats" ||
                              errors?.Flat[index]?.flatImages?.type ===
                                "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Flat / Floor Images
                          <input
                            multiple
                            {...register(`Flat[${index}].flatImages[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className=" flex flex-col  lg:items-end my-2 w-full">
                        <div
                          onClick={() => REMOVE_FLAT(index)}
                          className="bg-red text-white flex justify-center items-center h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => {
                            ADD_FLAT({});
                          }}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none  "
                        >
                          Add Another Flat
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addVilla && (
              <>
                {VILLA_FIELDS.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="lg:w-3/4 w-full my-4  flex flex-col items-start border-b-2 relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`VILLA No `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        VILLA DETAILS
                      </h4>

                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Villa &&
                            errors?.Villa[index]?.villaTitle?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Villa[${index}].villaTitle`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          VILLA Title
                        </label>
                      </div>

                      <div className="flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaName?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaName`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            VILLA Type / Name
                          </label>
                        </div>
                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-full my-1.5 lg:mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Villa[${index}].villaType`)}
                        >
                          <option value="simplex">Simplex</option>
                          <option value="duplex">Duplex</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaCarpetArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaCarpetArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Carpet Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Villa[${index}].villaCarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaBuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaBuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`Villa[${index}].villaBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaSuperBuiltUpArea
                                ?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(
                              `Villa[${index}].villaSuperBuiltUpArea`
                            )}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Super Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(
                            `Villa[${index}].villaSuperBuiltUpAreaUnit`
                          )}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Villa[${index}].villaPriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Villa &&
                            errors?.Villa[index]?.villaTotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Villa[${index}].villaTotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>

                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaMinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaMinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Minimum Price
                          </label>
                        </div>

                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Villa &&
                              errors?.Villa[index]?.villaMaximumPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Villa[${index}].villaMaximumPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col w-full">
                        <label
                          className={`${
                            errors?.Villa &&
                            (errors?.Villa[index]?.villaFloorPlan?.type ===
                              "acceptedFormats" ||
                              errors?.Villa[index]?.villaFloorPlan?.type ===
                                "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Villa / Floor Plan
                          <input
                            multiple
                            {...register(`Villa[${index}].villaFloorPlan[]`)}
                            type="file"
                          />
                        </label>

                        <label
                          className={`${
                            errors?.Villa &&
                            (errors?.Villa[index]?.villaImages?.type ===
                              "acceptedFormats" ||
                              errors?.Villa[index]?.villaImages?.type ===
                                "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Vill Images
                          <input
                            multiple
                            {...register(`Villa[${index}].villaImages[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={() => REMOVE_VILLA(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => {
                            ADD_VILLA({});
                          }}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Add Another Villa
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addSco && (
              <>
                {SCO_FIELDS.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="lg:w-3/4 w-full my-4  flex flex-col items-start border-b-2 relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`SCO No `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        SCO (SHOP CUM OFFICE) DETAILS
                      </h4>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Sco &&
                            errors?.Sco[index]?.Title?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Sco[${index}].Title`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          SCO Title
                        </label>
                      </div>

                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Sco &&
                            errors?.Sco[index]?.Name?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Sco[${index}].Name`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          SCO Type / Name
                        </label>
                      </div>

                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.CarpetArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].CarpetArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Carpet Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Sco[${index}].CarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.BuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].BuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5  my-1.5 lg:mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`Sco[${index}].BuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.SuperBuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].SuperBuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Super Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg w-2/5 lg:w-40  my-1.5 lg:mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(`Sco[${index}].SuperBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Sco &&
                            errors?.Sco[index]?.floor_no?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Sco[${index}].floor_no`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Floor No
                        </label>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Sco &&
                            errors?.Sco[index]?.total_floor?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Sco[${index}].total_floor`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Floors
                        </label>
                      </div>

                      <div className="flex items-center my-2">
                        <p className="text-xl lg:mr-8 mr-4">
                          Basemenent Included
                        </p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Sco[${index}].basement`)}
                            value="yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Sco[${index}].basement`)}
                            value="no"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.Price?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].Price`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5  my-1.5 mx-2 placeholder-gray-600"
                          id="PriceUnit"
                          title="sq-ft"
                          {...register(`Sco[${index}].PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Sco &&
                            errors?.Sco[index]?.TotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Sco[${index}].TotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>

                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.villaMinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].MinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Minimum Price
                          </label>
                        </div>

                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Sco &&
                              errors?.Sco[index]?.villaMaximumPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Sco[${index}].MaximumPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>

                      <div className="my-4 flex flex-col w-full">
                        <label
                          className={`${
                            errors?.Sco &&
                            (errors?.Sco[index]?.FloorPlan?.type ===
                              "acceptedFormats" ||
                              errors?.Sco[index]?.FloorPlan?.type ===
                                "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload SCO / Floor Plan
                          <input
                            multiple
                            {...register(`Sco[${index}].FloorPlan[]`)}
                            type="file"
                          />
                        </label>

                        <label
                          className={`${
                            errors?.Sco &&
                            (errors?.Sco[index]?.Images?.type ===
                              "acceptedFormats" ||
                              errors?.Villa[index]?.Images?.type === "required")
                              ? "border-red"
                              : "border-lightgray"
                          } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl my-1.5`}
                        >
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload SCO Images
                          <input
                            multiple
                            {...register(`Sco[${index}].Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={() => REMOVE_SCO(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => {
                            ADD_SC0({});
                          }}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Add Another SCO
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addPlot && (
              <>
                {PLOT_FIELDS.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="lg:w-3/4 w-full my-4  flex flex-col items-start border-b-2  relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`PLOT No `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        PLOT / LAND DETAILS
                      </h4>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.Title?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Plot[${index}].Title`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          PLOT Title
                        </label>
                      </div>{" "}
                      <div className="w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.ProjectTitle?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].ProjectTitle`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            PLOT Type / Name
                          </label>
                        </div>{" "}
                      </div>
                      {/* <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="PLOT Area"
                          {...register(`Plot[${index}].Name`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`Plot[${index}].flatAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div> */}
                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Length?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].Length`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Length
                          </label>
                        </div>

                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Width?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].Width`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Width
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-full my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Plot[${index}].LengthwidthUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.Name?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Plot[${index}].Name`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Mention Various Plot Sizes (By Commas)
                        </label>
                      </div>
                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Price?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].Price`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Plot[${index}].PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.TotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Plot[${index}].TotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>
                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.MinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].MinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Minimum Price
                          </label>
                        </div>
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.MaximumPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Plot[${index}].MaximumPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2  py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col w-full">
                        <label className="customfileUpload my-4  font-medium lg:w-72 w-full  border-2 border-dashed border-lightgray rounded-2xl">
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Plot Images
                          <input
                            multiple
                            {...register(`Plot[${index}].Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={() => REMOVE_PLOT(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => {
                            ADD_PLOT({});
                          }}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none  "
                        >
                          Add Another Plot
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addCommercial && (
              <>
                {COMMERCIAL_FIELDS.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="lg:w-3/4 w-full my-4  flex flex-col items-start border-b-2  relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`COMMERCIAL NO `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        Commercial Plot / Land Details
                      </h4>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.ProjectTitle?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Commercial[${index}].ProjectTitle`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          SCO / Commercial Project Title
                        </label>
                      </div>

                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.Title?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Commercial[${index}].Title`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          SCO / Commercial Plot Title
                        </label>
                      </div>

                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Length?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Commercial[${index}].Length`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Length
                          </label>
                        </div>

                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Width?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Commercial[${index}].Width`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Width
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-full my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Commercial[${index}].LengthwidthUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>

                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.PlotSize?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Commercial[${index}].PlotSize`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Mention Various Plot Sizes (By Commas)
                        </label>
                      </div>

                      <div className=" flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Price?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Commercial[${index}].Price`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Commercial[${index}].PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.TotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Commercial[${index}].TotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>

                      <div className="flex">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.MinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Commercial[${index}].MinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Minimum Price
                          </label>
                        </div>

                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5 lg:ml-2   text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.MaximumPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Commercial[${index}].MaximumPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.TotalFloor?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Commercial[${index}].TotalFloor`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Floors
                        </label>
                      </div>

                      <div className="flex items-center my-2">
                        <p className="text-xl mr-8">Basemenent Included</p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Commercial[${index}].Basement`)}
                            value="yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Commercial[${index}].Basement`)}
                            value="no"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col w-full">
                        <label className="customfileUpload my-4  font-medium lg:w-72 w-full  border-2 border-dashed border-lightgray rounded-2xl">
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Plot Images
                          <input
                            multiple
                            {...register(`Commercial[${index}].Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={() => REMOVE_COMMERCIAL(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => ADD_COMMERCIAL({})}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
                        >
                          Add Another Commercial
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addOffice && (
              <>
                {OFFICE_FIELDS.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="lg:w-3/4 w-full my-4  flex flex-col items-start border-b-2  relative"
                    >
                      <div className="lg:absolute right-0 my-4  py-2 px-2 text-lg font-medium flex flex-col items-center justify-center">
                        {`OFFICE No `}
                        <div className="bg-blue text-white w-12 h-12 flex justify-center items-center rounded-full">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="lg:text-2xl text-lg font-medium  uppercase mb-4">
                        {" "}
                        MALL / OFFICE SPACE DETAILS
                      </h4>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.ProjectTitle?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Office[${index}].ProjectTitle`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Mall / Office Project Title
                        </label>
                      </div>

                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.Title?.type === "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Office[${index}].Title`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Mall / Office Plot Title
                        </label>
                      </div>

                      <div className="flex flex-col lg:flex-row w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Length?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].Length`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Length
                          </label>
                        </div>
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5  lg:ml-2  text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Width?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].Width`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Width
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-96 w-full my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Office[${index}].LengthwidthUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                          <option>acres</option>
                          <option>hectares</option>
                          <option>bigha</option>
                        </select>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.CarpetArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].CarpetArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Carpet Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          {...register(`Office[${index}].CarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.BuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].BuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`Office[${index}].BuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.SuperBuiltUpArea?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].SuperBuiltUpArea`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Super Built Up Area
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5  my-1.5 lg:mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(`Office[${index}].SuperBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      {/* <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 "
                        type="text"
                        placeholder="Mention Various Plot Sizes  (By Commas) "
                        {...register(`Office[${index}].Name`)}
                      /> */}
                      <div className=" flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.Price?.type === "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].Price`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Price Per
                          </label>
                        </div>

                        <select
                          className="border-1 h-11  px-2 text-lg lg:w-40 w-2/5 my-1.5 lg:mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`Office[${index}].PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.TotalPrice?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Office[${index}].TotalPrice`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          Total Price
                        </label>
                      </div>

                      <div className="flex w-full">
                        <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                          <input
                            className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                              errors?.Plot &&
                              errors?.Plot[index]?.MinimunPrice?.type ===
                                "required" &&
                              "border-red"
                            }`}
                            type="text"
                            placeholder=" "
                            {...register(`Office[${index}].MinimunPrice`)}
                          />
                          <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                            Maximum Price
                          </label>
                        </div>
                      </div>
                      <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5    text-lg">
                        <input
                          className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                            errors?.Plot &&
                            errors?.Plot[index]?.TotalFloor?.type ===
                              "required" &&
                            "border-red"
                          }`}
                          type="text"
                          placeholder=" "
                          {...register(`Office[${index}].TotalFloor`)}
                        />
                        <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                          No Of Floors
                        </label>
                      </div>

                      <div className="flex items-center my-2">
                        <p className="text-xl mr-8">Basemenent Included</p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Office[${index}].Basement`)}
                            value="yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`Office[${index}].Basement`)}
                            value="no"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col w-full">
                        <label className="customfileUpload my-4  font-medium lg:w-80 w-full  border-2 border-dashed border-lightgray rounded-2xl">
                          <svg
                            class="w-8 h-8 mr-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          Upload Mall / Office Images
                          <input
                            multiple
                            {...register(`Office[${index}].Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={() => REMOVE_OFFICE(index)}
                          className="bg-red cursor-pointer text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none "
                        >
                          Remove
                        </div>
                        <div
                          onClick={() => ADD_OFFICE({})}
                          className="bg-blue cursor-pointer text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
                        >
                          Add Another Office
                        </div>
                      </div>
                    </li>
                  );
                })}
              </>
            )}

            <div className="w-full flex flex-col items-end mt-8">
              <div className="bg-blue text-white flex justify-center items-center  h-10 my-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none  ">
                Previous
              </div>
              <button
                className="bg-blue text-white flex justify-center items-center  h-10 my-2 font-medium text-lg lg:w-52 w-full rounded-full lg:rounded-none  "
                type="submit"
                // onClick={ResetEveryThing}
              >
                POST PROJECT
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step4;
