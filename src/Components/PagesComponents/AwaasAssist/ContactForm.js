import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
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
              <Link to="/">
                <FaFacebookF className="text-2xl text-green" />
              </Link>
              <Link to="/">
                <FaTwitter className="text-2xl text-green" />
              </Link>
              <Link to="/">
                <FaInstagram className="text-2xl text-green" />
              </Link>
              <Link to="/">
                <FaLinkedinIn className="text-2xl text-green" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex-col flex">
          <input
            type="email"
            className="w-full border-2 border-blue px-4 h-12"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            className="w-full border-2 border-blue px-4 h-40 my-8 py-2 "
            placeholder="Message"
          ></textarea>
          <button className="px-8 py-2 bg-blue text-white uppercase text-xl font-medium w-32">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
