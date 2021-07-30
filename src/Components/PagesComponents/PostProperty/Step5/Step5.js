import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectPostProperty,
  selectPostPropertyId,
} from "../../../../Redux/_features/_PostPropertySlice";
import {
  selectCurrentStep,
  SET_CURRENT_STEP,
} from "../../../../Redux/_features/_PostPropertyStepSlice";
import Nav from "../Nav";

import SideImage from "../SideImage";
import axios from "axios";
import { API } from "../../../../API";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step5 = () => {
  const [Amenities, setAmenities] = useState([]);
  const [SelectedFile, setSelectedFile] = useState([]);
  const [SelectedFileForPrev, setSelectedFileForPrev] = useState([]);
  const [SelectedAmenities, setSelectedAmenities] = useState([]);
  const [isUploading, setisUploading] = useState(false);
  const [isUploaded, setisUploaded] = useState(false);

  const CurrentStep = useSelector(selectCurrentStep);
  const PostProperty = useSelector(selectPostProperty);

  const dispatch = useDispatch();

  const HandleNext = () => {
    dispatch(SET_CURRENT_STEP(6));
  };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(4));
  };

  const FetchAmenities = async () => {
    const res = await axios.get(`${API}/amenities/list`);
    setAmenities(res.data.data);
  };

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
          className="w-52 h-32 object-cover"
          src={photo}
          key={photo}
          alt=""
        />
      );
    });
  };

  const HandleAmenitiesSelect = (newItem) => {
    if (SelectedAmenities.includes(newItem)) {
      const NewList = SelectedAmenities.filter((item) => item !== newItem);
      setSelectedAmenities(NewList);
    } else {
      setSelectedAmenities((SelectedAmenities) => [
        ...SelectedAmenities,
        newItem,
      ]);
    }
  };

  const CheckSelectedAmenities = (id) => {
    return SelectedAmenities.includes(id);
  };

  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostPropertyId);

  const HandleAmenitiesUpload = async () => {
    const res = await axios.post(
      `${API}/property/store-amenities`,
      {
        amenitie_id: SelectedAmenities,
        id: TableId,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    console.log(res.data);
    if (res.status === 200) {
      HandleNext();
    }
  };

  const HandleImageUpload = async () => {
    setisUploading(true);
    console.log(SelectedFile);

    const files = SelectedFile;
    const fromData = new FormData();

    Array.from(files).map((file, index) =>
      fromData.append(`images[${index}]`, file)
    );

    fromData.append("id", TableId);

    const res = await axios.post(`${API}/property/store-images`, fromData, {
      headers: {
        Method: "POST",
        ContentType: "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });

    console.log(res);
    if (res.status === 200) {
      setisUploading(false);
      setisUploaded(true);
    }
  };

  useEffect(() => {
    FetchAmenities();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full flex justify-between">
      <SideImage />
      <div className="w-65percent flex flex-col items-start justify-between border-1  min-h-70vh h-full p-8 py-6">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />
          <div className="py-6 w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-start flex-col ">
              <h4 className="text-2xl font-medium  uppercase mb-4">
                Amenities
              </h4>
              <div className="w-full  grid grid-cols-4 gap-1">
                {Amenities.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => HandleAmenitiesSelect(item.id)}
                    className={`w-full h-28  flex justify-evenly items-center flex-col cursor-pointer ${
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
                    <p className="font-medium capitalize">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="customfileUpload bg-blue font-medium w-60">
              Choose Images
              <input
                className=""
                type="file"
                multiple
                onChange={ImageHandleChange}
              ></input>
            </label>

            <div className="grid grid-cols-4 gap-4 my-4 ">
              {RenderPhotos(SelectedFileForPrev)}
            </div>
            {isUploading && (
              <p className="text-lg py-2 text-yellow-300">Uploading...</p>
            )}
            {isUploaded && isUploading === false && (
              <p className="text-lg py-2 text-green-600">
                Images Uploaded Successfully
              </p>
            )}
            <button
              onClick={HandleImageUpload}
              className="w-44  h-12 bg-blue text-xl font-medium text-white  my-2"
            >
              Upload Images
            </button>
          </div>
        </div>
        <div className="w-full   flex justify-end items-end">
          <button
            onClick={HandlePrevious}
            className="w-44 h-12 bg-blue text-xl font-medium text-white"
          >
            Previous
          </button>
          <button
            disabled={isUploading === true}
            onClick={HandleAmenitiesUpload}
            className={`w-44  h-12 ${
              isUploading ? "bg-gray-500" : "bg-blue"
            }  text-xl font-medium text-white ml-2`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
