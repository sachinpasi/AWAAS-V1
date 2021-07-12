import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const FeatureSection = () => {
  return (
    <section className="w-full h-52 bg-textbg relative  ">
      <div className="w-full h-full absolute -top-10">
        <div className="customContainer h-full grid grid-cols-3 gap-8  ">
          <div className="w-full h-full bg-white shadow-xl flex flex-col items-center">
            <div className="-mt-10  w-20 h-20 bg-white rounded-full flex justify-center items-center">
              <FaPhoneAlt className="text-3xl text-blue" />
            </div>
            <div className="w-full  flex flex-col items-center px-5">
              <p className="text-2xl text-darkgray my-1">Call Assistance</p>
              <div className="flex items-center flex-col border-t-2 border-gray-200 w-full text-center justify-center py-2">
                <a
                  href="tel:+91-999-639-8965"
                  className="flex items-center py-1"
                >
                  <FaPhoneAlt className="text-blue text-lg" />
                  <p className="text-lg mx-2">+91-999-639-8965</p>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-white shadow-xl flex flex-col items-center">
            <div className="-mt-10  w-20 h-20 bg-white rounded-full flex justify-center items-center">
              <HiMail className="text-4xl text-blue" />
            </div>
            <div className="w-full  flex flex-col items-center px-5">
              <p className="text-2xl text-darkgray my-1">Mail Assistance</p>
              <div className="flex items-center flex-col border-t-2 border-gray-200 w-full text-center justify-center py-2">
                <a
                  href="mailto:assist@awaasonline.com"
                  className="flex items-center py-1"
                >
                  <HiMail className="text-blue text-lg" />
                  <p className="text-lg mx-2">assist@awaasonline.com</p>
                </a>{" "}
                <a
                  href="mailto:assist@awaasonline.com"
                  className="flex items-center py-1"
                >
                  <HiMail className="text-blue text-lg" />
                  <p className="text-lg mx-2">legal@awaasonline.com</p>
                </a>{" "}
                <a
                  href="mailto:assist@awaasonline.com"
                  className="flex items-center py-1"
                >
                  <HiMail className="text-blue text-lg" />
                  <p className="text-lg mx-2">vastu@awaasonline.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white shadow-xl flex flex-col items-center">
            <div className="-mt-10  w-20 h-20 bg-white rounded-full flex justify-center items-center">
              <MdLocationOn className="text-4xl text-blue" />
            </div>
            <div className="w-full  flex flex-col items-center px-5">
              <p className="text-2xl text-darkgray my-1">Office Address</p>
              <div className="flex flex-col  items-center border-t-2 border-gray-200 w-full text-center justify-center py-2">
                <p className="text-xl font-medium my-2">Registered Office</p>
                <a href="/" className="flex items-center my-2">
                  <p className="text-lg mx-2">
                    Sco No.6, Eldeco High Street, <br /> Sector-40, Panipat-
                    132103
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
