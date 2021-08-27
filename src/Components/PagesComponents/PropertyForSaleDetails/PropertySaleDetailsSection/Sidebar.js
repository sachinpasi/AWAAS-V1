import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../../API";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";

const Sidebar = () => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { id } = useParams();
  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/leads/store-potential`, {
      ...data,
      id: Data?.id,
    });
    console.log(res.data);
    if (res.status === 200) {
      return toast.success("We Will Contact You Soon");
    }
  };

  console.log(Data);
  return (
    <>
      <div
        id="contact"
        className="w-full bg-blue rounded p-4 sticky top-5 py-8 mt-4 lg:mt-0 "
      >
        <div
          style={{
            borderBottom: "1px solid #2F5FBE",
          }}
          className="pb-3 flex flex-col justify-center items-start h-1/5"
        >
          <p className="text-3xl text-white leading-5 mb-2">
            Request A Callback
          </p>
          <p
            style={{
              color: "#B8D0FF",
            }}
            className="text-lg leading-6"
          >
            Please share you contact details
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-start flex-col py-2"
        >
          <div className="flex-col flex justify-center items-start w-full my-1">
            <p className="text-white">Name</p>
            <input
              style={{
                background: "#3F74DB",
                border: "1px solid #598DF5",
              }}
              className="w-full h-9 px-2 placeholder-extralightgray my-1 text-white"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex-col flex justify-center items-start w-full my-1">
            <p className="text-white">Email Address</p>
            <input
              style={{
                background: "#3F74DB",
                border: "1px solid #598DF5",
              }}
              className="w-full h-9 px-2 placeholder-extralightgray my-1 text-white"
              type="text"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex-col flex justify-center items-start w-full my-1">
            <p className="text-white">Phone Number</p>
            <input
              style={{
                background: "#3F74DB",
                border: "1px solid #598DF5",
              }}
              className="w-full h-9 px-2 placeholder-extralightgray my-1 text-white"
              type="text"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            {(errors?.mobile?.type === "required" ||
              errors?.name?.type === "required" ||
              errors?.email?.type === "required") && (
              <span className=" py-1 text-lightred">
                * All Fields Are required
              </span>
            )}
          </div>

          <button className="w-full my-4 h-12 bg-white rounded text-lg font-medium text-blue">
            Get Callback
          </button>
          <div className="w-11/12 mx-auto text-lightblue">
            <p className="text-xs leading-4 text-center">
              By sending a request, you are accepting our{" "}
              <span className="text-white font-medium">Terms of Services</span>{" "}
              and <span className="text-white font-medium">Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
      <div className="w-full h-16 fixed bottom-0 lg:hidden bg-white left-0 right-0 z-40 border-t-1 flex justify-center items-center">
        <a
          href="#contact"
          className="text-xl capitalize bg-green py-2 px-10 text-white font-medium rounded"
        >
          I am Interested
        </a>
      </div>
    </>
  );
};

export default Sidebar;
