import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <div className="w-full flex flex-col items-start justify-between border-1  p-8 py-6">
        <div id="brochure" className="w-full my-4 border-t-2 pt-4 relative ">
          <p className="text-3xl font-medium uppercase pb-4">
            Broucher Details
          </p>

          {Brochure.map((x, i) => (
            <div key={i} className={`w-full flex justify-between`}>
              <div className="w-3/4 flex justify-between">
                <input
                  className="border-1 h-11  px-2 text-lg w-96 my-1 placeholder-gray-600"
                  type="text"
                  name="title"
                  placeholder="Brochure Title"
                  value={x.title}
                  onChange={(e) => HandleChange(e, i)}
                />
                <div
                  className={`flex w-96  ${
                    Brochure.length === 1 ? "justify-end" : "justify-between"
                  } items-center my-2`}
                >
                  <label className="customfileUpload bg-blue font-medium w-60">
                    Choose Brochure File
                    <input
                      value={i.file}
                      onChange={(e) => HandleDocumentChange(e, i)}
                      type="file"
                      name="file"
                    />
                  </label>
                  {Brochure.length !== 1 && (
                    <button
                      className="bg-blue text-white flex justify-center items-center px-8 h-10 font-medium text-lg "
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              <div className="w-1/4 flex justify-center items-center">
                {x.file && <p>{x?.file?.name} is selected</p>}
              </div>
            </div>
          ))}

          <div className="w-3/4 flex flex-col justify-end items-end ">
            <button
              onClick={handleAddClick}
              className="bg-blue text-white flex justify-center items-center  h-10 mb-2 font-medium text-lg w-60 "
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
              }  text-white flex justify-center items-center  h-10 font-medium text-lg w-60`}
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
              } text-white flex justify-center items-center  h-10 font-medium text-lg w-60`}
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
