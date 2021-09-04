import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";

const DescriptionModal = ({
  setisAnyThingUpdated,
  Property_For,
  isAnyThingUpdated,
  isDescriptionEditOpen,
  setisDescriptionEditOpen,
}) => {
  const [Data, setData] = useState([]);

  const user = useSelector(selectUser);
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  return (
    <>
      <div
        onClick={() => setisDescriptionEditOpen(!isDescriptionEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isDescriptionEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-500px  bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isDescriptionEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setisDescriptionEditOpen(!isDescriptionEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
      </div>
    </>
  );
};

export default DescriptionModal;
