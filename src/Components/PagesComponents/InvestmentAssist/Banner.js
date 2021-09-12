import React from "react";
import { API } from "../../../API";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const Banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/leads/store-investment`, {
      ...data,
    });
    if (res.status === 200) {
      return toast.success("You Will Get A Callback Soon!");
    }
  };

  return (
    <section
      style={{
        background: "url(/assets/images/investmentassist/bg.jpg)",

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full lg:h-450px h-550px "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full relative flex flex-col lg:flex-row justify-evenly items-center"
      >
        <div className="lg:w-80vw mx-auto w-90vw flex lg:flex-row flex-col justify-between items-center">
          <div>
            <p
              style={{
                textShadow: "rgb(0 0 0) 2px 3px 5px",
              }}
              className="lg:text-6xl text-3xl  lg:pt-20 mb-5 lg:mb-0  text-white font-semibold capitalize "
            >
              Invest With Awaasonline
            </p>
          </div>
          <div className="lg:w-3/12 w-90vw ml-auto h-80 rounded-lg  bg-white shadow-xl  flex flex-col justify-center items-center px-8 ">
            <div className="flex justify-center items-center flex-col border-b-2 border-dashed w-full py-2">
              <p className="text-lg text-darkgray">
                Get investment advice from our experienced advisers
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center items-center flex-col w-full py-2"
            >
              <p className="text-2xl font-medium pb-3">Request Callback</p>
              <div className="w-full flex justify-between items-center flex-col">
                <input
                  className="w-full h-10 rounded border-2 mr-1 px-4 "
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <input
                  className="w-full h-10 my-2  rounded border-2 mx-2 px-4 "
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                  })}
                />
                <button
                  type="submit"
                  className="w-full h-10 my-2 bg-blue rounded text-white font-medium ml-1"
                >
                  {" "}
                  Get Call Back
                </button>
              </div>
              <div className="w-full mb-1">
                {(errors?.phone?.type === "required" ||
                  errors?.email?.type === "required" ||
                  errors?.name?.type === "required") && (
                  <span className="py-1 text-red">
                    * All Fields Are required
                  </span>
                )}
                {(errors?.phone?.type === "maxLength" ||
                  errors?.phone?.type === "minLength") && (
                  <span className="py-1 text-red">
                    * Mobile Number Must be of 10 Digits
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
