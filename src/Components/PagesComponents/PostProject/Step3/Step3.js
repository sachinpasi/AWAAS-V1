import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../../API";
import { selectPostProjectId } from "../../../../Redux/_features/_PostProjectSlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostProjectStepSlice";
import { selectUser } from "../../../../Redux/_features/_userSlice";

const Step3 = () => {
  const [Amenities, setAmenities] = useState([]);

  const [SelectedFileForPrev, setSelectedFileForPrev] = useState([]);
  const [SelectedAmenities, setSelectedAmenities] = useState([]);

  const FetchAmenities = async () => {
    const res = await axios.get(`${API}/amenities/list`);
    setAmenities(res.data.data);
  };

  const history = useHistory();

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
  const TableId = useSelector(selectPostProjectId);
  const dispatch = useDispatch();

  const HandleAmenitiesUpload = async () => {
    const res = await axios.post(
      `${API}/projects/store-amenities`,
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
      dispatch(SET_CURRENT_STEP(4));
      // history.push("/");
      // return toast.success("Project Added Sucessfully");
    }
  };

  useEffect(() => {
    FetchAmenities();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex flex-col items-start justify-between border-1  lg:p-8 p-2 py-6">
        <div className="w-full my-4 border-t-2 pt-4 relative ">
          <p className="text-3xl font-medium uppercase pb-4">Amenities</p>
          <div className="w-full  grid lg:grid-cols-4 grid-cols-2 gap-1 my-4">
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
                <p className="font-medium capitalize text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end w-full  my-4">
            <button
              onClick={HandleAmenitiesUpload}
              className="w-44  h-12 bg-blue text-xl font-medium text-white  my-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
