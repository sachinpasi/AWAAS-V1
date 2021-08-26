import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../API";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(`${API}/store-contact-us`, {
      ...data,
    });
    if (res.status === 200) {
      return toast.success("We Will Contact You Soon");
    }
  };

  return (
    <div className="w-full h-full py-10">
      <div className="lg:w-80vw w-90vw mx-auto flex flex-col lg:flex-row justify-between items-center ">
        <div className="lg:w-5/12 w-full">
          <p className="uppercase text-lightgray text-xl font-medium">
            Contact Us
          </p>
          <p className="text-4xl text-black font-medium tracking-wide py-4">
            Send us a message for any info.
          </p>
          <p className="text-lightgray text-xl capitalize py-2">
            Call us for any queries :
          </p>
          <a
            href="tel:1800 150-1500"
            className="text-blue font-medium text-xl py-2"
          >
            +1800 150-1500
          </a>

          <div className="mt-8">
            <p className="text-lightgray text-xl capitalize py-2">
              Connect With Us :
            </p>
            <div className="grid grid-cols-4 gap-2 my-4 w-40">
              <a href="https://www.facebook.com/Awaasonline-111674134300495">
                <FaFacebookF className="text-2xl text-green" />
              </a>
              <a href="https://twitter.com/awaasonline">
                <FaTwitter className="text-2xl text-green" />
              </a>
              <a href="https://www.instagram.com/awaasonline/">
                <FaInstagram className="text-2xl text-green" />
              </a>
              <a href="https://www.linkedin.com/in/awaas-online-5b5826208/">
                <FaLinkedinIn className="text-2xl text-green" />
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-2/5 w-full flex-col flex"
        >
          <div className="w-full flex justify-between items-center my-2">
            <input
              type="text"
              className="w-full border-2 border-blue px-4 h-12 mr-2"
              placeholder="Name"
              {...register("name", { required: true })}
            />{" "}
            <select
              type="email"
              {...register("category", { required: true })}
              className="w-full border-2 border-blue px-4 h-12 ml-2"
              placeholder="Category"
            >
              <option defaultChecked hidden value="">
                Category
              </option>
              <option value="g">Genral Query</option>
              <option value="v">Vastu Support</option>
              <option value="i">Investment Support</option>
              <option value="l">Legal Support</option>
              <option value="h">Home Loan</option>
              <option value="h">Homeloan Support</option>
              <option value="t">Technical Support</option>
            </select>
          </div>
          <input
            type="email"
            className="w-full border-2 border-blue px-4 h-12"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <textarea
            name=""
            id=""
            className="w-full border-2 border-blue px-4 h-40 my-4 mt-2 pt-2 "
            placeholder="Message"
            {...register("description", { required: true })}
          ></textarea>

          {(errors?.category?.type === "required" ||
            errors?.description?.type === "required" ||
            errors?.name?.type === "required" ||
            errors?.email?.type === "required") && (
            <span className=" py-2 text-red">* All Fields Are required</span>
          )}
          <button
            type="submit"
            className="px-8 py-2 bg-blue text-white uppercase text-xl font-medium w-32"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
