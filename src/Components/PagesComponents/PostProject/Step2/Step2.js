import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../API";
import { selectPostProjectId } from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step2 = () => {
  const [Data, setData] = useState();
  const [TotalRequest, setTotalRequest] = useState(0);
  const [Response, setResponse] = useState([]);
  // eslint-disable-next-line
  const [Error, setError] = useState([]);

  const TableId = useSelector(selectPostProjectId);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      BrochureDetails: [{ brochure_title: "", brochure: null }],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "BrochureDetails",
  });

  const onSubmit = (data) => {
    // console.log("onsubmit", data);
    setTotalRequest(0);
    setResponse([]);
    if (data?.BrochureDetails?.length !== 0) {
      const DATA = data?.BrochureDetails;
      setTotalRequest(DATA?.length);
      DATA?.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("brochure", item.brochure[0]);
          formData.append("brochure_title", item.brochure_title);
          formData.append("id", TableId);

          const UploadBrochure = async () => {
            try {
              const res = await axios.post(
                `${API}/projects/store-brochure`,
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
                setError((prev) => [...prev, [index]]);
              }
            }
          };
          UploadBrochure();
        }
      });
    }
  };
  // console.log("Response", Response);
  // console.log("TotalRequest", TotalRequest);
  // console.log("Error", Error);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const CheckTrue = (value) => value === true;
    if (Response.length === TotalRequest) {
      if (Response.length !== 0) {
        if (Response.every(CheckTrue)) {
          dispatch(SET_CURRENT_STEP(3));
        }
      }
    }
  }, [Response, TotalRequest]);

  // console.log(errors);

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-start justify-between border-1 pt-10  lg:p-8 p-2 py-6">
        <form
          className="w-full my-4  relative "
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => {
            setData(getValues(`BrochureDetails`));
          }}
        >
          <p className="lg:text-3xl text-2xl font-medium uppercase pb-4">
            Broucher Details
          </p>
          <ul className="w-full">
            {fields.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`w-full flex flex-col lg:flex-row justify-between`}
                >
                  <div className="lg:w-3/4 w-full flex flex-col lg:flex-row justify-between">
                    <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5">
                      <input
                        className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                          errors?.BrochureDetails &&
                          errors?.BrochureDetails[index]?.brochure_title
                            ?.type === "required" &&
                          "border-red"
                        }`}
                        type="text"
                        placeholder=" "
                        {...register(
                          `BrochureDetails.${index}.brochure_title`,
                          { required: true }
                        )}
                      />
                      <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                        Brochure Title
                      </label>
                    </div>

                    <div
                      className={`flex lg:w-96 w-full relative  ${
                        fields.length === 1 ? "justify-end" : "justify-between"
                      } items-center `}
                    >
                      <label
                        className={`${
                          errors?.BrochureDetails &&
                          (errors?.BrochureDetails[index]?.brochure?.type ===
                            "acceptedFormats" ||
                            errors?.BrochureDetails[index]?.brochure?.type ===
                              "required")
                            ? "border-red"
                            : "border-lightgray"
                        } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl`}
                      >
                        <input
                          type="file"
                          name="file"
                          {...register(`BrochureDetails.${index}.brochure`, {
                            required: true,
                            validate: {
                              acceptedFormats: (files) =>
                                ["application/pdf"].includes(files[0]?.type) ||
                                "Invalid File Type !",
                            },
                          })}
                        />
                        <svg
                          className="w-8 h-8 mr-2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        Upload Brochure File
                      </label>
                      {errors?.BrochureDetails && (
                        <>
                          {errors?.BrochureDetails[index]?.brochure?.type ===
                            "acceptedFormats" && (
                            <p className="absolute -bottom-6  text-red">
                              {
                                errors?.BrochureDetails[index]?.brochure
                                  ?.message
                              }
                            </p>
                          )}
                        </>
                      )}

                      {fields.length !== 1 && (
                        <>
                          <div
                            className=" lg:hidden bg-red text-white flex justify-center items-center px-3 h-10 rounded-full font-medium text-lg ml-4 "
                            onClick={() => remove(index)}
                          >
                            <MdDelete />
                          </div>
                          <button
                            type="button"
                            className=" hidden border-1 border-red text-red lg:flex justify-center items-center px-6 h-10 font-medium text-lg ml-2 rounded-full  "
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {Data !== undefined && (
                    <div className=" lg:w-1/4 w-full flex justify-center items-center">
                      {Data[index]?.brochure !== null && (
                        <p className="text-xs">
                          {Data[index]?.brochure[0]?.name} is selected
                        </p>
                      )}
                    </div>
                  )}
                </li>
              );
            })}

            <div className="lg:w-3/4 w-full flex flex-col justify-end items-end my-8 ">
              <button
                type="button"
                onClick={() => {
                  append({ brochure_title: "", brochure: null });
                }}
                className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
              >
                + Add More Brochure
              </button>
            </div>
          </ul>

          <div>
            <button
              type="submit"
              // disabled={isUploaded !== true}
              className={` text-white flex justify-center bg-blue items-center  h-10 font-medium text-lg lg:w-60 w-full lg:rounded-none rounded-full`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
