import React from "react";
import axios from "axios";
import { API } from "../../../API";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const HandleFormSubmit = async (data) => {
    const res = await axios.post(`${API}/leads/store-legal-help`, {
      ...data,
    });
    console.log(res.data);
    if (res.status === 200) {
      reset();
      return toast.success("We Will Contact You Soon");
    }
  };
  return (
    <div className="w-full h-full bg-textbg">
      <div className="w-90vw lg:w-80vw mx-auto flex flex-col justify-center items-center py-10">
        <p className="lg:text-4xl text-2xl font-medium text-darkgray capitalize">
          Get Free Advice on your Legal Services requirement
        </p>
        <p className="lg:text-xl text-base text-darkgray py-4">
          Send your query now & let us respond within 24 hrs.
        </p>
        <form
          onSubmit={handleSubmit(HandleFormSubmit)}
          className="w-full  grid lg:grid-cols-5 grid-cols-1 gap-4 my-4"
        >
          <input
            type="text"
            className="w-full border-1 border-widgetborder h-12 lg:col-span-2 px-4"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            className="w-full border-widgetborder border-1 h-12 lg:col-span-2 px-4"
            placeholder="Mobile Number"
            {...register("phone", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
          />
          <button
            type="submit"
            className="w-full h-12 bg-green text-white font-medium text-lg "
          >
            Get Advice
          </button>
        </form>
        <div className="w-full">
          {(errors?.phone?.type === "required" ||
            errors?.name?.type === "required") && (
            <span className="py-1 text-red">* All Fields Are required</span>
          )}
          {(errors?.phone?.type === "maxLength" ||
            errors?.phone?.type === "minLength") && (
            <span className="py-1 text-red">
              * Mobile Number Must be of 10 Digits
            </span>
          )}
        </div>
        {console.log(errors)}
      </div>
    </div>
  );
};

export default Form;
