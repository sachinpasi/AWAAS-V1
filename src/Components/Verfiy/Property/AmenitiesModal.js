import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { API } from "../../../API";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";

const AmenitiesModal = ({
  setisAnyThingUpdated,
  Property_For,
  isAnyThingUpdated,
  setisAmenitiesEditOpen,
  isAmenitiesEditOpen,
}) => {
  const [Data, setData] = useState([]);
  const [SelectedAmenities, setSelectedAmenities] = useState([]);
  // const location = useLocation();
  // const { id } = useParams();
  const user = useSelector(selectUser);
  const SellData = useSelector(selectPropertySaleDetails);
  const RentData = useSelector(selectPropertyRentDetails);
  const [Amenities, setAmenities] = useState([]);

  const FetchAmenities = async () => {
    const res = await axios.get(`${API}/amenities/list`);
    setAmenities(res.data.data);
  };

  const HandleAmenitiesSelect = (newItem) => {
    if (SelectedAmenities.includes(newItem)) {
      const NewList = SelectedAmenities.filter((item) => item !== newItem);
      setSelectedAmenities(NewList);
      console.log("removed");
    } else {
      setSelectedAmenities((SelectedAmenities) => [
        ...SelectedAmenities,
        newItem,
      ]);
      console.log("added");
    }
  };

  const AddToAmenities = (newItem) => {
    if (SelectedAmenities.includes(newItem)) {
      // const NewList = SelectedAmenities.filter((item) => item !== newItem);
      // setSelectedAmenities(NewList);
      // console.log("removed");
    } else {
      setSelectedAmenities((SelectedAmenities) => [
        ...SelectedAmenities,
        newItem,
      ]);
      console.log("added");
    }
  };

  const CheckSelectedAmenities = (id) => {
    return SelectedAmenities.includes(id);
  };

  // const CheckAlreadySelectedAmenities = (GivenName) => {
  //   if (Data?.amenities?.find(({ name }) => name === GivenName) !== undefined)
  //     return true;
  //   else return false;
  // };

  useEffect(() => {
    FetchAmenities();
  }, []);

  useEffect(() => {
    if (Property_For === "rent") {
      setData(RentData?.Data);
    }
    if (Property_For === "sell") {
      setData(SellData?.Data);
    }
  }, [SellData, RentData, Property_For]);

  console.log("Total", Amenities);
  console.log("selected", SelectedAmenities);

  const HandleAmenitiesEdit = async () => {
    const res = await axios.post(
      `${API}/property/edit-amenities`,
      { amenitie_id: SelectedAmenities, id: Data?.id },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      setisAnyThingUpdated(!isAnyThingUpdated);
      setisAmenitiesEditOpen(false);
    }
  };

  useEffect(() => {
    if (Data) {
      Data?.amenities?.forEach((item) => {
        AddToAmenities(item.id);
      });
    }
  }, [Data]);

  return (
    <>
      <div
        onClick={() => setisAmenitiesEditOpen(!isAmenitiesEditOpen)}
        className={`w-full h-screen fixed bg-black bg-opacity-50 z-30 to-0 bottom-0 right-0 left-0 ${
          isAmenitiesEditOpen ? "grid" : "hidden"
        } `}
      ></div>
      <div
        className={`w-1000 h-500px  bg-white fixed z-40  shadow-xl rounded-2xl transform transition-transform  left-2/4 -translate-x-2/4 -translate-y-2/4 p-8  ${
          isAmenitiesEditOpen ? "top-2/4" : "-top-full"
        }`}
      >
        <div
          onClick={() => setisAmenitiesEditOpen(!isAmenitiesEditOpen)}
          className=" bg-red flex justify-center hover:scale-95 transition-transform transform items-center rounded-full p-2 w-10 h-10 cursor-pointer absolute -right-4 -top-4"
        >
          <MdClose className="text-4xl font-semibold text-white   " />
        </div>
        <div className="w-full h-full ">
          <h4 className="text-2xl font-medium  uppercase mb-5">
            Update Amenities
          </h4>
          <div className="w-full  grid lg:grid-cols-5 grid-cols-2 gap-1">
            {Amenities.map((item, index) => (
              <div
                key={item.id}
                onClick={() => HandleAmenitiesSelect(item.id)}
                className={`w-full h-24  flex justify-evenly items-center flex-col cursor-pointer ${
                  CheckSelectedAmenities(item.id)
                    ? "bg-lightblue"
                    : "bg-littlelightgray"
                }`}
              >
                <img
                  className="w-2/5 h-2/5 object-contain"
                  src={`https://codeiator.com/uploads/${item.icon}`}
                  alt=""
                />
                <p className="font-medium capitalize text-sm lg:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-end -mt-10">
          <button
            onClick={HandleAmenitiesEdit}
            className="bg-blue text-white font-medium py-2 px-6 rounded-full text-lg"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default AmenitiesModal;
