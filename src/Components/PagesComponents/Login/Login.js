import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

import { LOGIN } from "../../../Redux/_features/_userSlice";
import { API } from "../../../API";

const Login = ({ isLoginModalOpen, setisLoginModalOpen }) => {
  const [isSignupActive, setisSignupActive] = useState(false);
  const [MobileNo, setMobileNo] = useState("");
  const [isOtpSent, setisOtpSent] = useState(false);

  const dispatch = useDispatch();
  // const history = useHistory();
  // const user = useSelector(selectUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onMobileNoSubmit = async (data) => {
    // console.log(data);
    setMobileNo(data.mobile);
    try {
      const res = await axios.post(`${API}/users/login?mobile=${data.mobile}`);
      // console.log(res.data);
      if (res.status === 200) {
        setisOtpSent(true);
        return toast.success(`OTP Sent To ${data.mobile} `);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.message) {
          return toast.error("Please Signup First");
        }
      }
    }
  };

  const onOtpSubmit = async (data) => {
    const { otp } = data;
    const res = await axios.post(`${API}/users/otp-verify`, {
      mobile: MobileNo,
      otp,
    });
    // console.log(res);
    if (res.status === 200) {
      dispatch(
        LOGIN({
          isLoggedIn: true,
          name: res.data.data.name,
          email: res.data.data.email,
          mobile: res.data.data.contactNo,
          token: res.data.data.api_token,
          accountType: res.data.data.account_type,
        })
      );

      setisLoginModalOpen(false);
    }
  };

  const onResisterSubmit = async (data) => {
    const { name, email, mobile } = data;
    try {
      const res = await axios.post(`${API}/users/register`, {
        mobile: mobile,
        name: name,
        email: email,
        account_type: 1,
      });
      // console.log(res);
      if (res.status === 200) {
        return toast.success("Signup Successfully!");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors.email) {
          return toast.error(error.response.data.errors.email[0]);
        } else if (error.response.data.errors.mobile) {
          return toast.error(error.response.data.errors.mobile[0]);
        }
      }
    }
  };

  return (
    <>
      <div
        onClick={() => setisLoginModalOpen(false)}
        className={`${
          isLoginModalOpen ? " flex " : "hidden "
        } w-full h-screen fixed z-40 flex justify-center top-0 bg-opacity-50 bg-black items-center  transition-opacity`}
      ></div>
      {/* 
      <div
        className={`${
          isLoginModalOpen ? "opacity-100 " : "opacity-0 -top-full "
        } w-full h-screen fixed z-50 flex justify-center items-center  transition-opacity`}
      > */}
      <div
        style={{
          transition: "all 0.3s linear",
        }}
        className={`w-11/12 lg:w-3/5 lg:h-500px  h-550px bg-white lg:rounded-lg rounded-2xl flex flex-col-reverse lg:flex-row justify-center z-50  overflow-hidden   shadow-2xl left-2/4 right-2/4 top-2/4 bottom-2/4 transform -translate-x-2/4 -translate-y-2/4 fixed  ${
          isLoginModalOpen ? "top-auto opacity-100" : "-top-full opacity-0"
        }`}
      >
        <div className="p-8 lg:w-2/5 w-full relative lg:h-full h-4/5 flex flex-col justify-center items-start ">
          {isSignupActive ? (
            <>
              <h4 className="absolute top-0 left-0 w-full  text-center text-blue font-bold text-3xl py-4">
                Signup
              </h4>
              <form
                onSubmit={handleSubmit(onResisterSubmit)}
                className=" w-full relative  flex flex-col justify-center items-start"
              >
                <h6 className="mx-1 my-0.5 text-lg font-medium uppercase ">
                  Mobile Number
                </h6>
                <input
                  className="w-full h-10 border-2 border-navborder px-4 mb-1 "
                  type="text"
                  placeholder="+91"
                  {...register("mobile", { required: true, minLength: 10 })}
                />{" "}
                <h6 className="mx-1 my-0.5 text-lg font-medium uppercase ">
                  Name
                </h6>
                <input
                  className="w-full h-10 border-2 border-navborder px-4 mb-1 "
                  type="text"
                  placeholder=""
                  {...register("name", { required: true, minLength: 3 })}
                />{" "}
                <h6 className="mx-1 my-0.5 text-lg font-medium uppercase ">
                  Email
                </h6>
                <input
                  className="w-full h-10 border-2 border-navborder px-4 mb-1 "
                  type="email"
                  placeholder=""
                  {...register("email", { required: true })}
                />
                {(errors?.mobile?.type === "required" ||
                  errors?.name?.type === "required" ||
                  errors?.email?.type === "required") && (
                  <span className=" py-1 text-red-500">
                    * All Fields Are required
                  </span>
                )}
                {errors?.mobile?.type === "minLength" && (
                  <span className=" py-1 text-red-500">
                    * The Phone No Must Be Of 10 Digits !
                  </span>
                )}
                <button
                  className="px-8 py-2 bg-blue text-white font-medium text-xl uppercase my-2"
                  type="submit"
                >
                  {" "}
                  SignUp{" "}
                </button>
              </form>
            </>
          ) : (
            <>
              <h4 className="absolute top-0 left-0 w-full  text-center text-blue font-bold text-3xl py-4">
                Login
              </h4>
              <form
                onSubmit={handleSubmit(onMobileNoSubmit)}
                className=" w-full relative  flex flex-col justify-center items-start"
              >
                <h5 className="mx-1 my-0.5 text-lg font-medium uppercase ">
                  Mobile Number
                </h5>
                <input
                  disabled={isOtpSent}
                  className="w-full h-10 border-2 border-navborder px-4 "
                  type="text"
                  placeholder="+91"
                  {...register("mobile", { required: true, minLength: 10 })}
                />

                {errors?.mobile?.type === "required" && (
                  <span className=" py-1 text-red-500">
                    * Phone Number is required
                  </span>
                )}
                {errors?.mobile?.type === "minLength" && (
                  <span className=" py-1 text-red-500">
                    * The Phone No Must Be Of 10 Digits !
                  </span>
                )}
                {!isOtpSent && (
                  <button
                    className="px-8 py-2 bg-blue text-white font-medium text-xl my-2"
                    type="submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                )}
              </form>
              {isOtpSent && (
                <form
                  onSubmit={handleSubmit(onOtpSubmit)}
                  className="w-full relative  flex flex-col justify-center items-start mt-4"
                >
                  <h6 className="mx-1 my-0.5 text-lg font-medium uppercase ">
                    OTP
                  </h6>
                  <input
                    style={{
                      border: "1px solid #bbb",
                    }}
                    className="w-full h-10 border-2 border-widgetborder px-4 "
                    type="text"
                    placeholder="Please Enter The Otp Sent To Your Mobile No"
                    {...register("otp", { required: true, minLength: "3" })}
                  />

                  {errors?.mobile?.type === "required" && (
                    <span className=" py-1 text-red-500">
                      * Phone Number is required
                    </span>
                  )}
                  {errors?.mobile?.type === "minLength" && (
                    <span className=" py-1 text-red-500">
                      * The Phone No Must Be Of 10 Digits !
                    </span>
                  )}
                  <button
                    className="px-8 py-2 bg-blue text-white font-medium text-xl my-2"
                    type="submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              )}
            </>
          )}

          {isSignupActive ? (
            <p
              onClick={() => setisSignupActive(false)}
              className="absolute bottom-0 left-0 font-medium text-center w-full cursor-pointer my-4 text-lg uppercase flex flex-col "
            >
              <span className="text-sm text-blue no-underline uppercase ">
                Have An Account ?
              </span>
              Login
            </p>
          ) : (
            <p
              onClick={() => setisSignupActive(true)}
              className="absolute bottom-0 left-0 font-medium text-center w-full cursor-pointer my-4 text-lg uppercase flex flex-col "
            >
              <span className="text-sm text-blue no-underline">New Here ?</span>
              Create An Account
            </p>
          )}
        </div>

        <div className="lg:w-3/5 w-full  lg:h-full h-1/5 relative">
          <div
            onClick={() => setisLoginModalOpen(false)}
            className="absolute right-2 top-2 z-50 w-8 h-8 flex justify-center items-center rounded-full font-medium text-2xl leading-none cursor-pointer"
          >
            <AiOutlineClose className="text-white" />
          </div>
          <img
            className="w-full h-full object-cover"
            src="/assets/images/login/bg.jfif"
            alt="login_bg"
          />
          <div
            style={{
              background: "rgba(0,0,0,0.6)",
            }}
            className="absolute w-full h-full top-0 flex justify-center items-center"
          >
            <img src="/assets/images/logo/logo.svg" alt="logo" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Login;
