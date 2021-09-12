import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { API } from "../../../../API";
import { selectPostProjectId } from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import { useForm } from "react-hook-form";

const Step2 = () => {
  const [Brochure, setBrochure] = useState([]);
  const [BrochureCounter, setBrochureCounter] = useState(0);
  const [Data, setData] = useState();
  const [TotalRequest, setTotalRequest] = useState(0);
  const [Response, setResponse] = useState([]);
  const [Error, setError] = useState([]);

  useEffect(() => {
    AddBrochure();
  }, []);

  const AddBrochure = () => {
    setBrochure((prevIndexes) => [...prevIndexes, BrochureCounter]);
    setBrochureCounter((prevCounter) => prevCounter + 1);
  };

  const RemoveBrochure = (index) => {
    setBrochure((prevIndexes) => {
      console.log(prevIndexes);
      console.log([...prevIndexes.filter((i) => i !== index)]);
      return [...prevIndexes.filter((item) => item !== index)];
    });
    setBrochureCounter((prevCounter) => prevCounter - 1);
  };

  console.log(Brochure);
  console.log("counter", BrochureCounter);

  const TableId = useSelector(selectPostProjectId);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTotalRequest(0);
    if (data.length !== 0) {
      const DATA = data.Brochure;
      DATA?.forEach((item, index) => {
        if (item) {
          const formData = new FormData();
          formData.append("brochure", item.brochure[0]);
          formData.append("brochure_title", item.brochure_title);
          formData.append("id", TableId);
          setTotalRequest(TotalRequest + DATA?.length);

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

  const HandleContinue = () => {
    dispatch(SET_CURRENT_STEP(3));
  };

  useEffect(() => {
    const CheckTrue = (value) => value === true;
    if (Response.length === TotalRequest) {
      if (Response.length !== 0) {
        if (Response.every(CheckTrue)) {
          dispatch(SET_CURRENT_STEP(3));
        }
      }
    }
  }, [Response, TotalRequest, dispatch]);

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-start justify-between border-1 pt-10  lg:p-8 p-2 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => {
            setData(getValues(Brochure[0]?.brochure));
          }}
          id="brochure"
          className="w-full my-4 border-t-2 pt-4 relative "
        >
          <p className="lg:text-3xl text-2xl font-medium uppercase pb-4">
            Broucher Details
          </p>

          {Brochure.map((index, i) => {
            const fieldName = `Brochure[${index}]`;

            return (
              <fieldset
                name={fieldName}
                key={fieldName}
                id={fieldName}
                className={`w-full flex flex-col lg:flex-row justify-between`}
              >
                <div className="lg:w-3/4 w-full flex flex-col lg:flex-row justify-between">
                  <div className="outline relative h-11  w-96 focus-within:border-blue-500 my-1.5">
                    <input
                      className={`block p-4 border-1 w-full h-11 text-lg appearance-none focus:outline-none bg-transparent ${
                        errors?.Brochure &&
                        errors?.Brochure[index]?.brochure_title?.type ===
                          "required" &&
                        "border-red"
                      }`}
                      type="text"
                      name="title"
                      placeholder=" "
                      {...register(`${fieldName}.brochure_title`, {
                        required: true,
                      })}
                    />
                    <label className="absolute top-0.5 left-2 text-lg bg-white px-2 py-1.5 -z-1 duration-300 origin-0">
                      Brochure Title
                    </label>
                  </div>

                  <div
                    className={`flex lg:w-96 w-full  ${
                      Brochure.length === 1 ? "justify-end" : "justify-between"
                    } items-center my-2`}
                  >
                    <label
                      className={`${
                        errors?.Brochure &&
                        errors?.Brochure[index]?.brochure?.type === "required"
                          ? "border-red"
                          : "border-lightgray"
                      } customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed  rounded-2xl`}
                    >
                      <input
                        type="file"
                        name="file"
                        {...register(`${fieldName}.brochure`, {
                          required: true,
                        })}
                      />
                      <svg
                        class="w-8 h-8 mr-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      Upload Brochure File
                    </label>

                    {/* <label className="customfileUpload bg-blue font-medium lg:w-60">
                    Choose Brochure File
                    <input
                      value={i.file}
                      onChange={(e) => HandleDocumentChange(e, i)}
                      type="file"
                      name="file"
                    />
                  </label> */}
                    {Brochure.length !== 1 && (
                      <>
                        <div
                          className=" lg:hidden bg-red text-white flex justify-center items-center px-3 h-10 rounded-full font-medium text-lg ml-4 "
                          onClick={() => RemoveBrochure(index)}
                        >
                          <MdDelete />
                        </div>
                        <button
                          className=" hidden border-1 border-red text-red lg:flex justify-center items-center px-6 h-10 font-medium text-lg ml-2 rounded-full  "
                          onClick={() => RemoveBrochure(index)}
                        >
                          Remove
                        </button>
                      </>
                    )}
                  </div>
                </div>
                {Data?.Brochure && (
                  <div className=" lg:w-1/4 w-full flex justify-center items-center">
                    {Data?.Brochure[index]?.brochure[0] && (
                      <p className="text-xs">
                        {Data?.Brochure[index]?.brochure[0]?.name} is selected
                      </p>
                    )}
                  </div>
                )}
              </fieldset>
            );
          })}

          <div className="lg:w-3/4 w-full flex flex-col justify-end items-end ">
            <div
              onClick={AddBrochure}
              className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
            >
              + Add More Brochure
            </div>

            {/* <button
              disabled={Brochure[0].file === null}
              onClick={HandleBroucherUpload}
              className={`${
                Brochure[0].file === null || Brochure[0].title === ""
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue"
              }  text-white flex justify-center items-center mb-8  h-10 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none`}
            >
              Upload Brochure
            </button>
            {isUploading && (
              <p className="w-60 text-yellow-300 text-xl my-2">Uploading...</p>
            )}
            {isUploaded && (
              <p
                className="w-60 text-green-500 text-xl my-2
            "
              >
                Uploaded Sucessfully
              </p>
            )} */}
          </div>

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
