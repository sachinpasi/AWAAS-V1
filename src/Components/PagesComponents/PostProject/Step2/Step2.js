import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { API } from "../../../../API";
import { selectPostProjectId } from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step2 = () => {
  const [Brochure, setBrochure] = useState([
    {
      title: "",
      file: null,
    },
  ]);

  const [isUploaded, setisUploaded] = useState(false);
  const [isUploading, setisUploading] = useState(false);

  console.log(Brochure);

  const TableId = useSelector(selectPostProjectId);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const HandleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...Brochure];
    list[index][name] = value;
    setBrochure(list);
  };

  const HandleDocumentChange = (e, index) => {
    e.preventDefault();
    const { name, files } = e.target;
    const list = [...Brochure];
    list[index][name] = files[0];
    setBrochure(list);
  };

  const handleAddClick = () => {
    setBrochure([...Brochure, { title: "", file: null }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...Brochure];
    list.splice(index, 1);
    setBrochure(list);
  };

  const HandleBroucherUpload = () => {
    setisUploading(true);
    Brochure.forEach((item) => {
      if (item) {
        const formData = new FormData();
        formData.append("brochure", item.file);
        formData.append("brochure_title", item.title);
        formData.append("id", TableId);

        const UploadBrochure = async () => {
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
            setisUploaded(true);
          }
        };
        UploadBrochure();
      }
    });
    setisUploading(false);
  };

  const HandleContinue = () => {
    dispatch(SET_CURRENT_STEP(3));
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-start justify-between border-1 pt-10  lg:p-8 p-2 py-6">
        <div id="brochure" className="w-full my-4 border-t-2 pt-4 relative ">
          <p className="lg:text-3xl text-2xl font-medium uppercase pb-4">
            Broucher Details
          </p>

          {Brochure.map((x, i) => (
            <div
              key={i}
              className={`w-full flex flex-col lg:flex-row justify-between`}
            >
              <div className="lg:w-3/4 w-full flex flex-col lg:flex-row justify-between">
                <input
                  className="border-1 h-11  px-2 text-lg lg:w-96 w-full my-1 placeholder-gray-600"
                  type="text"
                  name="title"
                  placeholder="Brochure Title"
                  value={x.title}
                  onChange={(e) => HandleChange(e, i)}
                />
                <div
                  className={`flex lg:w-96 w-full  ${
                    Brochure.length === 1 ? "justify-end" : "justify-between"
                  } items-center my-2`}
                >
                  <label className="customfileUpload  font-medium lg:w-72 w-full  border-2 border-dashed border-lightgray rounded-2xl">
                    <svg
                      class="w-8 h-8 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    Upload Brochure File
                    <input
                      value={i.file}
                      onChange={(e) => HandleDocumentChange(e, i)}
                      type="file"
                      name="file"
                    />
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
                        onClick={() => handleRemoveClick(i)}
                      >
                        <MdDelete />
                      </div>
                      <button
                        className=" hidden border-1 border-red text-red lg:flex justify-center items-center px-8 h-10 font-medium text-lg "
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className=" lg:w-1/4 w-full flex justify-center items-center">
                {x.file && <p>{x?.file?.name} is selected</p>}
              </div>
            </div>
          ))}

          <div className="lg:w-3/4 w-full flex flex-col justify-end items-end ">
            <button
              onClick={handleAddClick}
              className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg lg:w-60 w-full rounded-full lg:rounded-none "
            >
              + Add More Brochure
            </button>

            <button
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
            )}
          </div>

          <div>
            <button
              onClick={HandleContinue}
              disabled={isUploaded !== true}
              className={` ${
                isUploaded ? "bg-blue" : "bg-gray-500"
              } text-white flex justify-center items-center  h-10 font-medium text-lg lg:w-60 w-full lg:rounded-none rounded-full`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
