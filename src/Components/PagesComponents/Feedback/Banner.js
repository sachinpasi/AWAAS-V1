import React from "react";
import "./Ratings.css";
import { BsStarFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../../../API";
import { toast } from "react-toastify";

const Banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/store-review`, {
      ...data,
    });
    console.log(res);
    if (res.status === 200) {
      return toast.success("Feedback Sent Successfully!");
    }
  };

  console.log(errors);

  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/feedback/banner.jpg)",
      }}
      className="w-full h-screen bg-right bg-no-repeat bg-cover"
    >
      <div className="lg:w-80vw pt-14 h-full lg:h-auto w-90vw mx-auto flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-2/5 w-full bg-white h-5/6 -mt-8 bg-opacity-30 rounded-3xl border-2 border-lightblue flex flex-col  items-center py-4"
        >
          <p className="text-2xl text-blue font-medium tracking-tight uppercase ">
            Share Your Review
          </p>
          <div className="w-5/6 mx-auto h-90percent flex flex-col ">
            <div className="w-full flex flex-col items-start my-1">
              <p className="text-darkgray text-xl">Name</p>
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                className="w-full h-11 border-1 rounded px-4 my-1"
              />
            </div>
            <div className="w-full flex flex-col items-start my-1">
              <p className="text-darkgray text-xl">E-Mail</p>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="w-full h-11 border-1 rounded px-4 my-1"
              />
            </div>
            <div className="w-full flex flex-col items-start my-1">
              <p className="text-darkgray text-xl">Category</p>
              <select
                placeholder="Enter Your Email"
                className="w-full h-11 border-1 rounded px-4 my-1"
                {...register("category", { required: true })}
              >
                <option className="capitalize" value="g">
                  General Feedback
                </option>
                <option className="capitalize" value="v">
                  vastu services
                </option>
                <option className="capitalize" value="i">
                  investment services
                </option>
                <option className="capitalize" value="l">
                  legal services
                </option>
                <option className="capitalize" value="h">
                  home loan services
                </option>
              </select>
            </div>
            <div className="w-full flex flex-col items-start my-1">
              <p className="text-darkgray text-xl">Write Message..</p>
              <textarea
                {...register("description", { required: true })}
                placeholder="Enter Your Message.."
                className="w-full  border-1 rounded px-4 my-1 py-2"
                rows={4}
              ></textarea>
            </div>
            <div className="rating">
              <input
                type="radio"
                id="star5"
                name="rating"
                {...register("rating", { required: true })}
                value="5"
              />
              <label
                className="full"
                for="star5"
                // title="Awesome - 5 stars"
              ></label>
              <input
                type="radio"
                id="star4half"
                name="rating"
                {...register("rating", { required: true })}
                value="4.5"
              />
              <label
                className="half"
                for="star4half"
                // title="Pretty good - 4.5 stars"
              ></label>
              <input
                type="radio"
                id="star4"
                name="rating"
                {...register("rating", { required: true })}
                value="4"
              />
              <label
                className="full"
                for="star4"
                // title="Pretty good - 4 stars"
              ></label>
              <input
                type="radio"
                id="star3half"
                name="rating"
                {...register("rating", { required: true })}
                value="3.5"
              />
              <label
                className="half"
                for="star3half"
                // title="Meh - 3.5 stars"
              ></label>
              <input
                type="radio"
                id="star3"
                name="rating"
                {...register("rating", { required: true })}
                value="3"
              />
              <label
                className="full"
                for="star3"

                //   title="Meh - 3 stars"
              ></label>
              <input
                type="radio"
                id="star2half"
                name="rating"
                {...register("rating", { required: true })}
                value="2.5"
              />
              <label
                className="half"
                for="star2half"
                // title="Kinda bad - 2.5 stars"
              ></label>
              <input
                type="radio"
                id="star2"
                name="rating"
                {...register("rating", { required: true })}
                value="2"
              />
              <label
                className="full"
                for="star2"
                // title="Kinda bad - 2 stars"
              ></label>
              <input
                type="radio"
                id="star1half"
                name="rating"
                {...register("rating", { required: true })}
                value="1.5"
              />
              <label
                className="half"
                for="star1half"
                // title="Meh - 1.5 stars"
              ></label>
              <input
                type="radio"
                id="star1"
                name="rating"
                {...register("rating", { required: true })}
                value="1"
              />
              <label
                className="full"
                for="star1"
                // title="Sucks big time - 1 star"
              ></label>
              <input
                type="radio"
                id="starhalf"
                name="rating"
                {...register("rating", { required: true })}
                value="0.5"
              />
              <label
                className="half"
                for="starhalf"
                // title="Sucks big time - 0.5 stars"
              ></label>
            </div>
            {(errors?.category?.type === "required" ||
              errors?.rating?.type === "required" ||
              errors?.name?.type === "required" ||
              errors?.description?.type === "required" ||
              errors?.email?.type === "required") && (
              <span className=" py-1 text-red">* All Fields Are required</span>
            )}
            <button
              type="submit"
              className="px-8  py-2 bg-blue text-white text-xl font-medium uppercase w-60 rounded-full"
            >
              Share Feedback
            </button>
          </div>
        </form>

        <div className=" hidden flex-col lg:flex items-end">
          <div className="flex justify-center items-center">
            <BsStarFill className="lg:text-6xl text-3xl text-yellow-500 mx-1.5" />
            <BsStarFill className="lg:text-6xl text-3xl text-yellow-500 mx-1.5" />
            <BsStarFill className="lg:text-6xl text-3xl text-yellow-500 mx-1.5" />
          </div>
          <p
            style={{
              textShadow: "rgb(0 0 0) 2px 3px 5px",
            }}
            className="lg:text-5xl text-3xl font-semibold text-white"
          >
            Your Feedback
          </p>
          <p
            style={{
              textShadow: "rgb(0 0 0) 2px 3px 5px",
            }}
            className="lg:text-5xl text-3xl font-semibold text-white"
          >
            is our guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
