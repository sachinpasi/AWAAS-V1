import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostPropertyStepSlice";
import Nav from "../Nav";
import SideImage from "../SideImage";
import { toast } from "react-toastify";

import { API } from "../../../../API";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import { selectPostPropertyId } from "../../../../Redux/_features/_PostPropertySlice";
import { useForm } from "react-hook-form";

const Step6 = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const TableId = useSelector(selectPostPropertyId);
  const history = useHistory();

  //   const HandleNext = () => {
  //     dispatch(SET_CURRENT_STEP(6));
  //   };

  const HandlePrevious = () => {
    dispatch(SET_CURRENT_STEP(5));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const HandleStep6Submit = async (data) => {
    console.log(data);
    const res = await axios.post(
      `${API}/property/store-description`,
      {
        ...data,
        id: TableId,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    if (res.status === 200) {
      console.log(res.data);
      setTimeout(() => {
        history.push("/");
      }, 2000);
      return toast.success("Property Added Sucessfully");
    }
  };
  return (
    <div className="w-full h-full flex justify-between ">
      <SideImage />
      <form
        onSubmit={handleSubmit(HandleStep6Submit)}
        className="w-65percent flex flex-col items-start justify-between border-1  min-h-70vh h-full p-8 py-6"
      >
        <div className="w-full h-full flex flex-col items-start justify-start">
          <Nav />
          <div className="py-6 w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-start flex-col ">
              <h4 className="text-2xl font-medium  uppercase mb-4">
                About Property
              </h4>
              <div className="w-full h-full flex flex-col">
                <label>
                  <textarea
                    className="border-1 h-52  px-2 text-lg w-full my-1 placeholder-gray-600"
                    id="description"
                    {...register("description")}
                    required=""
                    placeholder="Property description in few lines..."
                    aria-required="true"
                  ></textarea>
                </label>

                <small>
                  By submitting, you are accepting our{" "}
                  <Link to="/">Terms of Services</Link> and{" "}
                  <Link to="/"> Privacy Policy</Link>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full   flex justify-end items-end">
          <button
            onClick={HandlePrevious}
            className="w-44 h-12 bg-blue text-xl font-medium text-white"
          >
            Previous
          </button>
          <button
            type="submit"
            className="w-44  h-12 bg-blue text-xl font-medium text-white ml-2"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step6;