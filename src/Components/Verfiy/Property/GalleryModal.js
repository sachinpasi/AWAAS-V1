import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";

const GalleryModal = ({
  isGalleryEditOpen,
  setGalleryEditOpen,
  isAnyThingUpdated,
  setisAnyThingUpdated,
  Property_For,
}) => {
  const [Data, setData] = useState([]);

  const SellData = useSelector(selectPropertySaleDetails);
  const RentData = useSelector(selectPropertyRentDetails);

  useEffect(() => {
    if (Property_For === "rent") {
      setData(RentData?.Data);
    }
    if (Property_For === "sell") {
      setData(SellData?.Data);
    }
  }, [SellData, RentData, Property_For]);

  return (
    <>
      <div
        onClick={() => setGalleryEditOpen(!isGalleryEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isGalleryEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-450px bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isGalleryEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setGalleryEditOpen(!isGalleryEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
        <div className="w-full h-full  ">
          <h4 className="text-2xl font-medium  uppercase mb-5">
            Update Gallery
          </h4>

          <div className="w-full h-20 bg-white grid grid-cols-8    ">
            {Data?.library?.map((item, index) => (
              <img
                className="w-28 h-20 object-cover mr-2"
                src={`https://codeiator.com/awaas/public/storage/property/images/${item}`}
                alt=""
              />
            ))}
          </div>
          <div className="w-full h-60 bg-white mt-4 rounded-3xl border-2 border-dashed border-lightgray flex items-center flex-col ">
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
                // onChange={ImageHandleChange}
              ></input>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
