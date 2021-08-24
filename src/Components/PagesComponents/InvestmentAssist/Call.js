import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../../API";

const Call = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const HandleSubmit = async () => {
    const res = await axios.post(`${API}/leads/store-investment`, {
      name: Name,
      phone: Phone,
    });
    if (res.status === 200) {
      return toast.success("You Will Get A Callback Soon!");
    }
  };

  return (
    <section className="w-full bg-blue ">
      <div className="lg:w-80vw w-90vw mx-auto flex flex-col justify-center items-center py-4">
        <div className="w-full h-2/4 flex justify-between items-center flex-col py-4 border-b-1 border-white border-dashed">
          <p className="text-3xl font-medium text-white">
            Still Can't Decide,Lets Have A Call
          </p>
          <p className="text-white py-1">
            Fill The Form Below, We Will Contact You Shortly
          </p>
        </div>
        <div className="w-full flex-col flex lg:flex-row lg:justify-between items-center lg:h-auto pt-4">
          <input
            className="lg:w-2/4 w-full h-12 bg-blue border-1 border-lightblue placeholder-gray-100 px-4 lg:mr-2  my-2"
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="lg:w-2/4 w-full h-12 bg-blue border-1 border-lightblue placeholder-gray-100 px-4 lg:mr-2  my-2"
            type="text"
            placeholder="Phone Number"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={HandleSubmit}
            className="lg:w-2/4 w-full h-12 bg-white text-blue  font-medium text-xl my-2"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Call;
