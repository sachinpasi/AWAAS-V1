import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdClose, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { API } from "../../../API";
import { selectUser } from "../../../Redux/_features/_userSlice";
import "./loader.css";

const GalleryModal = ({
  isGalleryEditOpen,
  setGalleryEditOpen,
  isAnyThingUpdated,
  setisAnyThingUpdated,
  Property_For,
}) => {
  const [Data, setData] = useState([]);
  const [SelectedFile, setSelectedFile] = useState([]);
  const [SelectedFileForPrev, setSelectedFileForPrev] = useState([]);
  const [isloading, setisloading] = useState(false);

  const SellData = useSelector(selectPropertySaleDetails);
  const RentData = useSelector(selectPropertyRentDetails);
  const user = useSelector(selectUser);

  const ImageHandleChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log(fileArray);
      setSelectedFileForPrev((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const RenderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="w-24 h-16 object-cover rounded-xl"
          src={photo}
          key={photo}
          alt=""
        />
      );
    });
  };

  const HandleImageUpload = async () => {
    setisloading(true);
    console.log(SelectedFile);

    const files = SelectedFile;
    const fromData = new FormData();

    Array.from(files).map((file, index) =>
      fromData.append(`images[${index}]`, file)
    );
    fromData.append(`p_id`, Data?.p_id);

    const res = await axios.post(`${API}/property/add-image`, fromData, {
      headers: {
        Method: "POST",
        ContentType: "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });

    console.log(res);
    if (res.status === 200) {
      setisAnyThingUpdated(!isAnyThingUpdated);
      setGalleryEditOpen(!isGalleryEditOpen);
      setisloading(false);
    }
  };

  const HandleImageDelete = async (id) => {
    const res = await axios.post(`${API}/property/delete-image`, {
      p_id: Data?.p_id,
      image: id,
    });
    if (res.status === 200) {
      setisAnyThingUpdated(!isAnyThingUpdated);
    }
  };

  useEffect(() => {
    if (Property_For === "rent") {
      setData(RentData?.Data);
    }
    if (Property_For === "sell") {
      setData(SellData?.Data);
    }
  }, [SellData, RentData, Property_For]);

  useEffect(() => {
    setSelectedFile([]);
    setSelectedFileForPrev([]);
  }, [isGalleryEditOpen]);
  return (
    <>
      <div
        onClick={() => setGalleryEditOpen(!isGalleryEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isGalleryEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-450px  bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isGalleryEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setGalleryEditOpen(!isGalleryEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform z-20 items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
        <div className="w-full h-full  ">
          <h4 className="text-2xl font-medium  uppercase mb-5">
            Update Gallery
          </h4>

          <div className="w-full h-20 bg-white grid grid-cols-8 gap-8 ">
            {Data?.library?.map((item, index) => (
              <div key={index} className="w-28 h-20  rounded-xl relative">
                <img
                  className="w-28 h-20 object-cover  rounded-xl"
                  src={`https://codeiator.com/awaas/public/storage/property/images/${item}`}
                  alt=""
                />
                <div>
                  <MdDeleteForever
                    onClick={() => HandleImageDelete(item)}
                    className="text-2xl bg-red text-white rounded-full w-6 h-6 p-0.5 absolute -right-2 -top-2 transform hover:scale-95 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-60 bg-white mt-4 rounded-3xl border-2 border-dashed border-lightgray flex items-center justify-between flex-col ">
            <label class="w-96 flex justify-center items-center px-2 py-4  mt-2 rounded-full  tracking-wide uppercase  cursor-pointer bg-textbg text-darkgray">
              <svg
                class="w-8 h-8 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class=" text-base leading-normal">Select Images</span>
              <input
                className=""
                type="file"
                multiple
                onChange={ImageHandleChange}
              ></input>
            </label>
            <div className="grid grid-cols-8 gap-4 my-4 w-full px-2">
              {RenderPhotos(SelectedFileForPrev)}
            </div>

            {SelectedFile?.length !== 0 && (
              <div className="flex justify-end items-end w-full pb-3 pr-3">
                <button
                  onClick={HandleImageUpload}
                  className="bg-blue text-white font-medium py-2 px-6 rounded-full text-lg"
                >
                  Upload Images
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isloading && (
        <div className="w-full h-full fixed bg-black bg-opacity-50 top-0  left-0 right-0 bottom-0 z-50  flex justify-center items-center">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryModal;
