import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { API } from "../../../API";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/leads/store-vastu`, {
      ...data,
    });
    if (res.status === 200) {
      return toast.success("You Will Get A Callback Soon!");
    }
  };

  return (
    <section className="bg-textbg w-full lg:h-80 h-500px pb-12 relative">
      <div className="absolute -top-10 left-2/4  transform -translate-x-2/4 ">
        <div className="lg:w-80vw w-90vw mx-auto px-7 lg:h-64    bg-white shadow-lg rounded flex flex-col justify-between ">
          <div className="w-full h-2/4 flex flex-col justify-center py-8 lg:py-0 items-center border-b-2  border-yellow-600">
            <p className="lg:text-3xl text-xl text-darkgray lg:w-2/4 text-center capitalize">
              Want to get on site/off site Vastu consultancy from the best
              consultants
            </p>
          </div>
          <div className="w-full h-2/4 flex flex-col justify-center items-center py-8 lg:py-0 ">
            <p className="lg:text-3xl text-2xl font-medium text-yellow-600 lg:w-2/4 text-center capitalize">
              Get vaastu consultancy
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:flex-row justify-between items-center w-full mt-3"
            >
              <input
                className="lg:w-1/4 w-full h-11 px-4 my-1 border-1 rounded-sm placeholder-darkgray border-lightblue lg:mx-1 "
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <input
                className="lg:w-1/4 w-full h-11 px-4 my-1 border-1 rounded-sm placeholder-darkgray border-lightblue lg:mx-1 "
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              <input
                className="lg:w-1/4 w-full h-11 my-1 px-4 border-1 rounded-sm placeholder-darkgray border-lightblue lg:mx-1 "
                type="text"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              <button
                type="submit"
                className="lg:w-1/4 w-full my-1 h-11 rounded-sm bg-blue text-white font-medium lg:mx-1 "
              >
                Get Advice
              </button>
            </form>
            <div className="w-full mb-1">
              {(errors?.phone?.type === "required" ||
                errors?.email?.type === "required" ||
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
