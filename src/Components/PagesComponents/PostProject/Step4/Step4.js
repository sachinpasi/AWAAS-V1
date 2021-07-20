import axios from "axios";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../../API";

import {
  SET_POST_PROJECT_PROPERTY,
  RESET_POST_PROJECT,
  selectPostProject,
  RESET_POST_PROJECT_PROPERTY,
  selectPostProjectId,
} from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step4 = () => {
  const dispatch = useDispatch();

  const ActiveTabs = useSelector(selectPostProject);

  const [Data, setData] = useState();

  const [AddFlat, setAddFlat] = useState(false);
  const [AddVilla, setAddVilla] = useState(false);
  const [AddSco, setAddSco] = useState(null);
  const [AddPlot, setAddPlot] = useState(null);
  const [AddCommercial, setAddCommercial] = useState(null);
  const [AddOffice, setAddOffice] = useState(null);

  const [FLAT, setFLAT] = useState([]);
  const [VILLA, setVILLA] = useState([]);
  const [SCO, setSCO] = useState([]);
  const [PLOT, setPLOT] = useState([]);
  const [COMMERCIAL, setCOMMERCIAL] = useState([]);
  const [OFFICE, setOFFICE] = useState([]);

  const [FLAT_COUNTER, setFLAT_COUNTER] = useState(0);
  const [VILLA_COUNTER, setVILLA_COUNTER] = useState(0);
  const [SCO_COUNTER, setSCO_COUNTER] = useState(0);
  const [PLOT_COUNTER, setPLOT_COUNTER] = useState(0);
  const [COMMERCIAL_COUNTER, setCOMMERCIAL_COUNTER] = useState(0);
  const [OFFICE_COUNTER, setOFFICE_COUNTER] = useState(0);

  const [TotalFlatRequest, setTotalFlatRequest] = useState(0);
  const [TotalVillaRequest, setTotalVillaRequest] = useState(0);
  const [TotalScoRequest, setTotalScoRequest] = useState(0);
  const [TotalPlotRequest, setTotalPlotRequest] = useState(0);
  const [TotalCommercialtRequest, setTotalCommercialRequest] = useState(0);
  const [TotalOfficeRequest, setTotalOfficeRequest] = useState(0);

  const [Error, setError] = useState([]);

  console.log(
    TotalFlatRequest +
      TotalVillaRequest +
      TotalScoRequest +
      TotalPlotRequest +
      TotalCommercialtRequest +
      TotalOfficeRequest
  );

  const ResetEveryThing = () => {
    setTotalFlatRequest(0);
    setTotalVillaRequest(0);
    setTotalScoRequest(0);
    setTotalPlotRequest(0);
    setTotalCommercialRequest(0);
    setTotalOfficeRequest(0);
    setError([]);
  };

  const [Response, setResponse] = useState([]);

  console.log(Error);

  const [isNavOpen, setisNavOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostProjectId);
  const history = useHistory();

  const addFlatField = () => {
    setFLAT((prevIndexes) => [...prevIndexes, FLAT_COUNTER]);
    setFLAT_COUNTER((prevCounter) => prevCounter + 1);
  };

  const addVillaField = () => {
    setVILLA((prevIndexes) => [...prevIndexes, VILLA_COUNTER]);
    setVILLA_COUNTER((prevCounter) => prevCounter + 1);
  };

  const addScoField = () => {
    setSCO((prevIndexes) => [...prevIndexes, SCO_COUNTER]);
    setSCO_COUNTER((prevCounter) => prevCounter + 1);
  };

  const addPlotField = () => {
    setPLOT((prevIndexes) => [...prevIndexes, PLOT_COUNTER]);
    setPLOT_COUNTER((prevCounter) => prevCounter + 1);
  };

  const addCommercialField = () => {
    setCOMMERCIAL((prevIndexes) => [...prevIndexes, COMMERCIAL_COUNTER]);
    setCOMMERCIAL_COUNTER((prevCounter) => prevCounter + 1);
  };

  const addOfficeField = () => {
    setOFFICE((prevIndexes) => [...prevIndexes, OFFICE_COUNTER]);
    setOFFICE_COUNTER((prevCounter) => prevCounter + 1);
  };

  const removeFlatField = (index) => () => {
    setFLAT((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
    setFLAT_COUNTER((prevCounter) => prevCounter - 1);
  };

  const removeVillaField = (index) => () => {
    setVILLA((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setVILLA_COUNTER((prevCounter) => prevCounter - 1);
  };

  const removeScoField = (index) => () => {
    setSCO((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
    setSCO_COUNTER((prevCounter) => prevCounter - 1);
  };

  const removePlotField = (index) => () => {
    setPLOT((prevIndexes) => [...prevIndexes.filter((item) => item !== index)]);
    setPLOT_COUNTER((prevCounter) => prevCounter - 1);
  };

  const removeCommercialField = (index) => () => {
    setCOMMERCIAL((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCOMMERCIAL_COUNTER((prevCounter) => prevCounter - 1);
  };

  const removeOfficeField = (index) => () => {
    setOFFICE((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setOFFICE_COUNTER((prevCounter) => prevCounter - 1);
  };

  const HandleNavScroll = () => {
    if (window.scrollY >= 150) {
      setisNavOpen(true);
    } else {
      setisNavOpen(false);
    }
  };

  window.addEventListener("scroll", HandleNavScroll);

  const onSubmit = (data) => {
    setData(data);

    if (data?.FLAT) {
      const FLAT_ARRAY = data?.FLAT;
      setTotalFlatRequest(TotalFlatRequest + FLAT_ARRAY?.length);
      FLAT_ARRAY.forEach((item, index) => {
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
              if (error.response.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };
          UploadFlat();
        }
      });
    }

    if (data?.VILLA) {
      const VILLA_ARRAY = data?.VILLA;
      setTotalVillaRequest(TotalVillaRequest + VILLA_ARRAY?.length);
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
              if (error.response.status !== 200) {
                setResponse((Prev) => [...Prev, false]);
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };

          UploadFlat();
        }
      });
    }

    if (data?.SCO) {
      const SCO_ARRAY = data?.SCO;
      setTotalScoRequest(TotalScoRequest + SCO_ARRAY?.length);

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
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };

          UploadFlat();
        }
      });
    }

    if (data?.PLOT) {
      const PLOT_ARRAY = data?.PLOT;
      setTotalPlotRequest(TotalPlotRequest + PLOT_ARRAY?.length);

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
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };

          UploadPlot();
        }
      });
    }

    if (data?.COMMERCIAL) {
      const COMMERCIAL_ARRAY = data?.COMMERCIAL;
      setTotalCommercialRequest(
        TotalCommercialtRequest + COMMERCIAL_ARRAY?.length
      );

      COMMERCIAL_ARRAY.forEach((item, index) => {
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

          const UploadCommercial = async () => {
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
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };

          UploadCommercial();
        }
      });
    }

    if (data?.OFFICE) {
      const OFFICE_ARRAY = data?.OFFICE;
      setTotalOfficeRequest(TotalOfficeRequest + OFFICE_ARRAY?.length);
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
                setError((prev) => [...prev, ["Flat", index]]);
              }
            }
          };

          UploadCommercial();
        }
      });
    }
  };

  useEffect(() => {
    const CheckTrue = (value) => value === true;
    if (
      Response.length ===
      TotalFlatRequest +
        TotalVillaRequest +
        TotalScoRequest +
        TotalPlotRequest +
        TotalCommercialtRequest +
        TotalOfficeRequest
    ) {
      if (Response.length !== 0) {
        if (Response.every(CheckTrue)) {
          history.push("/");
          return toast.success("Project Added Sucessfully");
        } else {
          return toast.error("All Fields Are Mandatory");
        }
      }
    }
  }, [Response]);

  useEffect(() => {
    if (Error.length !== 0) {
      Error?.forEach((item, index) => {
        console.log(item[0], item[1]);
        // document.getElementById().scrollIntoView(true);
      });
    }
  }, [Error]);

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
      <header
        className={`${
          isNavOpen ? "visible" : "hidden"
        } w-full fixed bg-white h-20 z-40 top-0 flex justify-center items-center shadow transition-all`}
      >
        <div className="flex my-1   ">
          <div
            onClick={() => {
              setAddFlat(true);
              addFlatField();
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
              addVillaField();
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
              addScoField();
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
              addPlotField();
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
              addCommercialField();
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
              addOfficeField();
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
        className="w-full min flex flex-col items-center "
      >
        <div className="w-full flex flex-col items-start justify-between border-1  p-8 py-6">
          <div className="w-full  relative ">
            <div className="grid grid-cols-3 gap-4 border-b-2 pb-4 ">
              <div
                onClick={() => {
                  setAddFlat(true);
                  addFlatField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD FLAT
                </p>
              </div>{" "}
              <div
                onClick={() => {
                  setAddVilla(true);
                  addVillaField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD VILLA
                </p>
              </div>{" "}
              <div
                onClick={() => {
                  setAddSco(true);
                  addScoField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD SCO
                </p>
              </div>{" "}
              <div
                onClick={() => {
                  setAddPlot(true);
                  addPlotField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD LAND / PLOT
                </p>
              </div>{" "}
              <div
                onClick={() => {
                  setAddCommercial(true);
                  addCommercialField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD COMMERCIAL
                </p>
              </div>
              <div
                onClick={() => {
                  setAddOffice(true);
                  addOfficeField();
                }}
                className={`px-7 py-4 bg-blue  rounded-full cursor-pointer transform transition-transform hover:scale-95 `}
              >
                <p
                  className={`text-xl font-medium text-center  text-white uppercase`}
                >
                  ADD MALL / OFFICE
                </p>
              </div>
            </div>

            {ActiveTabs?.addFlat && (
              <>
                {FLAT.map((index) => {
                  const fieldName = `FLAT[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      id={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        Flat / APARTMENT / FLOOR DETAILS
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Flat / Apartment / Floor Title"
                        {...register(`${fieldName}.flatTitle`)}
                      />{" "}
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Flat / Apartment / Floor Name"
                        {...register(`${fieldName}.flatName`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Plot Area"
                          {...register(`${fieldName}.flatArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.flatAreaUnit`)}
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
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Carpet Area"
                          {...register(`${fieldName}.flatCarpetArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.flatCarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Built Up Area"
                          {...register(`${fieldName}.flatBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.flatBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Super Built Up Area"
                          {...register(`${fieldName}.flatSuperBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.flatSuperBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.flatPrice`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.flatPriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.flatTotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.flatMinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.flatMaximumPrice`)}
                        />
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Flat / Floor Plan
                          <input
                            multiple
                            {...register(`${fieldName}.flatFloorPlan[]`)}
                            type="file"
                          />
                        </label>
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Flat / Floor Images
                          <input
                            multiple
                            {...register(`${fieldName}.flatImages[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removeFlatField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addFlatField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Add Another Flat
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addVilla && (
              <>
                {VILLA.map((index) => {
                  const fieldName = `VILLA[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        VILLA DETAILS
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="VILLA Title"
                        {...register(`${fieldName}.villaTitle`)}
                      />{" "}
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="VILLA Type / Name"
                          {...register(`${fieldName}.villaName`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.villaType`)}
                        >
                          <option value="simplex">Simplex</option>
                          <option value="duplex">Duplex</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Carpet Area"
                          {...register(`${fieldName}.villaCarpetArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.villaCarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Built Up Area"
                          {...register(`${fieldName}.villaBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.villaBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Super Built Up Area"
                          {...register(`${fieldName}.villaSuperBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(
                            `${fieldName}.villaSuperBuiltUpAreaUnit`
                          )}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.villaPrice`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.villaPriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.villaTotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.villaMinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.villaMaximumPrice`)}
                        />
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Villa / Floor Plan
                          <input
                            multiple
                            {...register(`${fieldName}.villaFloorPlan[]`)}
                            type="file"
                          />
                        </label>
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Vill Images
                          <input
                            multiple
                            {...register(`${fieldName}.villaImages[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removeVillaField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addVillaField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Add Another Villa
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addSco && (
              <>
                {SCO.map((index) => {
                  const fieldName = `SCO[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        SCO (SHOP CUM OFFICE) DETAILS
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="SCO Title"
                        {...register(`${fieldName}.Title`)}
                      />{" "}
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="SCO Type / Name"
                          {...register(`${fieldName}.Name`)}
                        />
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Carpet Area"
                          {...register(`${fieldName}.CarpetArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.CarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Built Up Area"
                          {...register(`${fieldName}.BuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.BuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Super Built Up Area"
                          {...register(`${fieldName}.SuperBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.SuperBuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        placeholder="Floor No"
                        type="number"
                        {...register(`${fieldName}.floor_no`)}
                      />
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        placeholder="Total Floors"
                        type="number"
                        {...register(`${fieldName}.total_floor`)}
                      />
                      <div className="flex items-center my-2">
                        <p className="text-xl mr-8">Basemenent Included</p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.basement`)}
                            value="yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.basement`)}
                            value="no"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.Price`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="PriceUnit"
                          title="sq-ft"
                          {...register(`${fieldName}.PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.TotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.MinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.MaximumPrice`)}
                        />
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose SCO / Floor Plan
                          <input
                            multiple
                            {...register(`${fieldName}.FloorPlan[]`)}
                            type="file"
                          />
                        </label>
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose SCO Images
                          <input
                            multiple
                            {...register(`${fieldName}.Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removeScoField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addScoField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Add Another SCO
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addPlot && (
              <>
                {PLOT.map((index) => {
                  const fieldName = `PLOT[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        PLOT / LAND DETAILS
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="PLOT Title"
                        {...register(`${fieldName}.Title`)}
                      />{" "}
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="PLOT Type / Name"
                          {...register(`${fieldName}.Name`)}
                        />
                      </div>
                      {/* <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="PLOT Area"
                          {...register(`${fieldName}.Name`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.flatAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div> */}
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Length"
                          {...register(`${fieldName}.Length`)}
                        />{" "}
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 ml-2"
                          type="text"
                          placeholder="Width"
                          {...register(`${fieldName}.Width`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.LengthwidthUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 "
                        type="text"
                        placeholder="Mention Various Plot Sizes  (By Commas) "
                        {...register(`${fieldName}.Name`)}
                      />
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.Price`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.TotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.MinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.MaximumPrice`)}
                        />
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Plot Images
                          <input
                            multiple
                            {...register(`${fieldName}.Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removePlotField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addPlotField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Add Another Plot
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addCommercial && (
              <>
                {COMMERCIAL.map((index) => {
                  const fieldName = `COMMERCIAL[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        Commercial SCO Plot / Land Details
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="SCO / Commercial Project Title"
                        {...register(`${fieldName}.ProjectTitle`)}
                      />{" "}
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="SCO / Commercial Plot Title"
                          {...register(`${fieldName}.Title`)}
                        />
                      </div>
                      {/* <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="PLOT Area"
                          {...register(`${fieldName}.Name`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.flatAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                          <option>acres</option>
                          <option>hectares</option>
                          <option>bigha</option>
                        </select>
                      </div> */}
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Length"
                          {...register(`${fieldName}.Length`)}
                        />{" "}
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 ml-2"
                          type="text"
                          placeholder="Width"
                          {...register(`${fieldName}.Width`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.LengthwidthUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 "
                        type="text"
                        placeholder="Mention Various Plot Sizes  (By Commas) "
                        {...register(`${fieldName}.PlotSize`)}
                      />
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.Price`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.TotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.MinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.MaximumPrice`)}
                        />
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Floors"
                        {...register(`${fieldName}.TotalFloor`)}
                      />
                      <div className="flex items-center my-2">
                        <p className="text-xl mr-8">Basemenent Included</p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.Basement`)}
                            value="Yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.Basement`)}
                            value="No"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Plot Images
                          <input
                            multiple
                            {...register(`${fieldName}.Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removeCommercialField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addCommercialField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-60 "
                        >
                          Add Another Commercial
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            {ActiveTabs?.addOffice && (
              <>
                {OFFICE.map((index) => {
                  const fieldName = `OFFICE[${index}]`;
                  return (
                    <fieldset
                      name={fieldName}
                      key={fieldName}
                      className="w-3/4 my-4  flex flex-col items-start border-b-2"
                    >
                      <h4 className="text-2xl font-medium  uppercase mb-4">
                        {" "}
                        MALL / OFFICE SPACE DETAILS
                      </h4>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Mall / Office Project Title"
                        {...register(`${fieldName}.ProjectTitle`)}
                      />{" "}
                      <div>
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Mall / Office Plot Title"
                          {...register(`${fieldName}.Title`)}
                        />
                      </div>
                      {/* <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="PLOT Area"
                          {...register(`${fieldName}.Name`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.flatAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                          <option>acres</option>
                          <option>hectares</option>
                          <option>bigha</option>
                        </select>
                      </div> */}
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Length"
                          {...register(`${fieldName}.Length`)}
                        />{" "}
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600 ml-2"
                          type="text"
                          placeholder="Width"
                          {...register(`${fieldName}.Width`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.LengthwidthUnit`)}
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
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Carpet Area"
                          {...register(`${fieldName}.CarpetArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          {...register(`${fieldName}.CarpetAreaUnit`)}
                          title="sq-ft"
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Built Up Area"
                          {...register(`${fieldName}.BuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.BuiltUpAreaUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Super Built Up Area"
                          {...register(`${fieldName}.SuperBuiltUpArea`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="super-builtup-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.SuperBuiltUpAreaUnit`)}
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
                        {...register(`${fieldName}.Name`)}
                      /> */}
                      <div className=" flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Price Per"
                          {...register(`${fieldName}.Price`)}
                        />
                        <select
                          className="border-1 h-11  px-2 text-lg w-40 my-1 mx-2 placeholder-gray-600"
                          id="price-per-area-type"
                          title="sq-ft"
                          {...register(`${fieldName}.PriceUnit`)}
                        >
                          <option>Sq-ft</option>
                          <option>Sq-mt</option>
                          <option>Sq-yards</option>
                        </select>
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="Total Price"
                        {...register(`${fieldName}.TotalPrice`)}
                      />
                      <div className="flex">
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                          type="text"
                          placeholder="Minimum Price"
                          {...register(`${fieldName}.MinimunPrice`)}
                        />
                        <input
                          className="border-1 h-11  px-2 text-lg w-96 my-1 ml-2 placeholder-gray-600"
                          type="text"
                          placeholder="Maximum Price"
                          {...register(`${fieldName}.MaximumPrice`)}
                        />
                      </div>
                      <input
                        className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                        type="text"
                        placeholder="No Of  Floors"
                        {...register(`${fieldName}.TotalFloor`)}
                      />
                      <div className="flex items-center my-2">
                        <p className="text-xl mr-8">Basemenent Included</p>
                        <div className="flex items-center">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.Basement`)}
                            value="yes"
                          />
                          <p className="text-xl pl-2">Yes</p>
                        </div>
                        <div className="flex items-center ml-4">
                          <input
                            className="w-5 h-5"
                            type="radio"
                            {...register(`${fieldName}.Basement`)}
                            value="no"
                          />
                          <p className="text-xl pl-2">No</p>
                        </div>
                      </div>
                      <div className="my-4 flex flex-col">
                        <label className="customfileUpload bg-blue font-medium w-72 my-2">
                          Choose Mall / Office Images
                          <input
                            multiple
                            {...register(`${fieldName}.Images[]`)}
                            type="file"
                          />
                        </label>
                      </div>
                      <div className="w-full flex flex-col  items-end my-2">
                        <div
                          onClick={removeOfficeField(index)}
                          className="bg-red text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-52 "
                        >
                          Remove
                        </div>
                        <div
                          onClick={addOfficeField}
                          className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-60 "
                        >
                          Add Another Office
                        </div>
                      </div>
                    </fieldset>
                  );
                })}
              </>
            )}

            <div className="w-full flex flex-col items-end mt-8">
              <div className="bg-blue text-white flex justify-center items-center  h-10 my-2 font-medium text-lg w-52 ">
                Previous
              </div>
              <button
                className="bg-blue text-white flex justify-center items-center  h-10 my-2 font-medium text-lg w-52 "
                type="submit"
                onClick={ResetEveryThing}
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
