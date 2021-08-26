import axios from "axios";
import React, { useState } from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { toast } from "react-toastify";
import { API } from "../../../API";

const InvestmnetAssist = () => {
  const [phone, setphone] = useState("");
  const [phone2, setphone2] = useState("");
  const [phone3, setphone3] = useState("");
  const [phone4, setphone4] = useState("");

  const HandleLoan = async (id) => {
    try {
      if (phone.length === 10) {
        const res = await axios.post(`${API}/store-support`, {
          phone: phone,
          category: id,
        });

        if (res.status === 200) {
          return toast.success("You Will Get Call Back Soon");
        }
      } else {
        return toast.error("Please Enter Correct Phone Number");
      }
    } catch (error) {
      if (error.response.status !== 200) {
        return toast.error("Please Enter Phone Number");
      }
    }
  };

  const Handleinvest = async (id) => {
    try {
      if (phone2.length === 10) {
        const res = await axios.post(`${API}/store-support`, {
          phone: phone,
          category: id,
        });

        if (res.status === 200) {
          return toast.success("You Will Get Call Back Soon");
        }
      } else {
        return toast.error("Please Enter Correct Phone Number");
      }
    } catch (error) {
      if (error.response.status !== 200) {
        return toast.error("Please Enter Phone Number");
      }
    }
  };

  const HandleVastu = async (id) => {
    try {
      if (phone3.length === 10) {
        const res = await axios.post(`${API}/store-support`, {
          phone: phone,
          category: id,
        });

        if (res.status === 200) {
          return toast.success("You Will Get Call Back Soon");
        }
      } else {
        return toast.error("Please Enter Correct Phone Number");
      }
    } catch (error) {
      if (error.response.status !== 200) {
        return toast.error("Please Enter Phone Number");
      }
    }
  };

  const HandleLegal = async (id) => {
    try {
      if (phone4.length === 10) {
        const res = await axios.post(`${API}/store-support`, {
          phone: phone,
          category: id,
        });

        if (res.status === 200) {
          return toast.success("You Will Get Call Back Soon");
        }
      } else {
        return toast.error("Please Enter Correct Phone Number");
      }
    } catch (error) {
      if (error.response.status !== 200) {
        return toast.error("Please Enter Phone Number");
      }
    }
  };

  return (
    <div id="instant-assistance" className="w-full h-full bg-textbg py-10">
      <div className=" w-90vw mx-auto flex-col flex justify-between items-center ">
        <div className="w-full flex-col flex items-center justify-between ">
          <p className="lg:text-6xl text-3xl text-blue font-semibold">
            Instant Assistance
          </p>
          <p className="lg:text-xl text-lg text-center text-lightgray py-5 capitalize">
            just fill in your contact no and get instant call-back within
            minutes from our support representatives
          </p>
        </div>
        <div className="w-full h-full py-4 grid lg:grid-cols-4 grid-cols-1 lg:gap-8 gap-20 my-10">
          <div
            style={{
              background: "linear-gradient(#4d81e8, #28d8b5)",
            }}
            className="w-full h-500px pb-10 flex-col flex justify-between"
          >
            <div className="w-5/6 bg-white h-32 mx-auto -mt-10 border-2 rounded-2xl shadow-lg flex justify-center items-center flex-col">
              <p className="text-blue text-3xl">Home Loans</p>
              <p className="text-darkgray text-lg uppercase">ASSISTANCE</p>
            </div>
            <div className="flex-col flex justify-evenly items-center h-2/5 ">
              <div className="flex items-center justify-center">
                <HiMail className="text-white text-2xl mr-2" />
                <p className="font-medium text-white text-lg">Mail Us</p>
              </div>
              <a
                href="mailto:loans@awaasonline.com"
                className="text-white text-lg tracking-wider"
              >
                loans@awaasonline.com
              </a>
              <div className="flex items-center justify-center">
                <div className="bg-white p-1 rounded-full mr-2">
                  <HiPhone className="text-blue " />
                </div>
                <p className="font-medium text-white text-lg">Call Us</p>
              </div>
              <a
                href="tel:1800-150-150"
                className="text-white text-lg tracking-wider"
              >
                +91-1800-150-150
              </a>
            </div>
            <div className=" flex-col flex items-center w-10/12 mx-auto">
              <input
                type="tel"
                className="bg-white h-12 w-full px-4"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <button
                onClick={() => HandleLoan("h")}
                className="text-white bg-extradarkblue font-medium text-xl w-10/12 h-12 mt-5"
              >
                GET CALLBACK
              </button>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(#4d81e8, #28d8b5)",
            }}
            className="w-full h-500px pb-10 flex-col flex justify-between"
          >
            <div className="w-5/6 bg-white h-32 mx-auto -mt-10 border-2 rounded-2xl shadow-lg flex justify-center items-center flex-col">
              <p className="text-blue text-3xl">Investment</p>
              <p className="text-darkgray text-lg uppercase">ASSISTANCE</p>
            </div>
            <div className="flex-col flex justify-evenly items-center h-2/5 ">
              <div className="flex items-center justify-center">
                <HiMail className="text-white text-2xl mr-2" />
                <p className="font-medium text-white text-lg">Mail Us</p>
              </div>
              <a
                href="mailto:invest@awaasonline.com"
                className="text-white text-lg tracking-wider"
              >
                invest@awaasonline.com
              </a>
              <div className="flex items-center justify-center">
                <div className="bg-white p-1 rounded-full mr-2">
                  <HiPhone className="text-blue " />
                </div>
                <p className="font-medium text-white text-lg">Call Us</p>
              </div>
              <a
                href="tel:1800-150-150"
                className="text-white text-lg tracking-wider"
              >
                +91-1800-150-150
              </a>
            </div>
            <div className=" flex-col flex items-center w-10/12 mx-auto">
              <input
                type="tel"
                className="bg-white h-12 w-full px-4"
                placeholder="Phone No."
                value={phone2}
                required
                onChange={(e) => setphone2(e.target.value)}
              />
              <button
                onClick={() => Handleinvest("i")}
                className="text-white bg-extradarkblue font-medium text-xl w-10/12 h-12 mt-5"
              >
                GET CALLBACK
              </button>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(#4d81e8, #28d8b5)",
            }}
            className="w-full h-500px pb-10 flex-col flex justify-between"
          >
            <div className="w-5/6 bg-white h-32 mx-auto -mt-10 border-2 rounded-2xl shadow-lg flex justify-center items-center flex-col">
              <p className="text-blue text-3xl">Vastu</p>
              <p className="text-darkgray text-lg uppercase">ASSISTANCE</p>
            </div>
            <div className="flex-col flex justify-evenly items-center h-2/5 ">
              <div className="flex items-center justify-center">
                <HiMail className="text-white text-2xl mr-2" />
                <p className="font-medium text-white text-lg">Mail Us</p>
              </div>
              <a
                href="mailto:vastu@awaasonline.com"
                className="text-white text-lg tracking-wider"
              >
                vastu@awaasonline.com
              </a>
              <div className="flex items-center justify-center">
                <div className="bg-white p-1 rounded-full mr-2">
                  <HiPhone className="text-blue " />
                </div>
                <p className="font-medium text-white text-lg">Call Us</p>
              </div>
              <a
                href="tel:1800-150-150"
                className="text-white text-lg tracking-wider"
              >
                +91-1800-150-150
              </a>
            </div>
            <div className=" flex-col flex items-center w-10/12 mx-auto">
              <input
                type="tel"
                className="bg-white h-12 w-full px-4"
                placeholder="Phone No."
                value={phone3}
                required
                onChange={(e) => setphone3(e.target.value)}
              />
              <button
                onClick={() => HandleVastu("v")}
                className="text-white bg-extradarkblue font-medium text-xl w-10/12 h-12 mt-5"
              >
                GET CALLBACK
              </button>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(#4d81e8, #28d8b5)",
            }}
            className="w-full h-500px pb-10 flex-col flex justify-between"
          >
            <div className="w-5/6 bg-white h-32 mx-auto -mt-10 border-2 rounded-2xl shadow-lg flex justify-center items-center flex-col">
              <p className="text-blue text-3xl">Legal</p>
              <p className="text-darkgray text-lg uppercase">ASSISTANCE</p>
            </div>
            <div className="flex-col flex justify-evenly items-center h-2/5 ">
              <div className="flex items-center justify-center">
                <HiMail className="text-white text-2xl mr-2" />
                <p className="font-medium text-white text-lg">Mail Us</p>
              </div>
              <a
                href="mailto:legal@awaasonline.com"
                className="text-white text-lg tracking-wider"
              >
                legal@awaasonline.com
              </a>
              <div className="flex items-center justify-center">
                <div className="bg-white p-1 rounded-full mr-2">
                  <HiPhone className="text-blue " />
                </div>
                <p className="font-medium text-white text-lg">Call Us</p>
              </div>
              <a
                href="tel:1800-150-150"
                className="text-white text-lg tracking-wider"
              >
                +91-1800-150-150
              </a>
            </div>
            <div className=" flex-col flex items-center w-10/12 mx-auto">
              <input
                type="tel"
                className="bg-white h-12 w-full px-4"
                placeholder="Phone No."
                value={phone4}
                required
                onChange={(e) => setphone4(e.target.value)}
              />
              <button
                onClick={() => HandleLegal("l")}
                className="text-white bg-extradarkblue font-medium text-xl w-10/12 h-12 mt-5"
              >
                GET CALLBACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmnetAssist;
