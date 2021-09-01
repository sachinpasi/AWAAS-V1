import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../Redux/_features/_PropertySaleDetailsSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../../API";
import { selectUser } from "../../../Redux/_features/_userSlice";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  selectUpdatePropertySlice,
  SET_UPDATE_PROPERTY_SLICE,
} from "../../../Redux/_features/_UpdatePropertySlice";

const Banner = ({
  setisBookmarkChanged,
  isEditClicked,
  setisEditClicked,
  setisAnyThingUpdated,
}) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const [isBookmarked, setisBookmarked] = useState(false);
  const [isClicked, setisClicked] = useState(false);

  const user = useSelector(selectUser);

  const { location } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const HandleBookmark = async () => {
    const res = await axios.post(
      `${API}/bookmark`,
      {
        property_id: Data?.id,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setisClicked(!isClicked);
    if (res.status === 200) {
      setisBookmarkChanged(true);
      return toast.success(res.data?.message);
    }
  };

  const CheckBookmark = async () => {
    try {
      const res = await axios.get(
        `${API}/check-bookmark?property_id=${Data?.id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      setisBookmarked(res?.data?.return);
    } catch (error) {
      setisBookmarked(error.response?.data?.return);
    }
  };
  useEffect(() => {
    CheckBookmark();
  }, [isClicked, Data]);

  const { total_price, booking_amount, title, locality_name, city } =
    useSelector(selectUpdatePropertySlice);

  const { register, handleSubmit } = useForm();
  const onSubmit = ({ title, locality_name, city }) => {
    dispatch(
      SET_UPDATE_PROPERTY_SLICE({
        title,
        locality_name,
        city,
        total_price,
        booking_amount,
      })
    );
  };

  const HandleUpdate = async () => {
    setisEditClicked(false);

    const res = await axios.post(
      `${API}/property/edit`,
      {
        id: id,
        title,
        locality_name,
        city,
        total_price,
        booking_amount,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    console.log(res);
    if (res.status === 200) {
      setisAnyThingUpdated(true);
    }
  };

  return (
    <>
      {location.pathname !== `/profile/property/listings/${id}` && (
        <section
          style={{
            backgroundImage: "url(/assets/images/propertysale/bg.png)",
          }}
          className="w-full object-cover bg-no-repeat h-72 relative"
        >
          <div
            style={{
              background: "rgba(0,0,0,0.2)",
            }}
            className="w-full h-full"
          >
            <div className="  relative lg:w-80vw w-90vw mx-auto h-full flex flex-col items-start justify-center">
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="text-white lg:text-5xl text-4xl tracking-tight font-medium capitalize"
              >
                {Data?.title}
              </p>

              <div className="flex justify-center items-center py-4 ">
                <div className="flex justify-center items-center">
                  <MdLocationOn className="text-blue text-3xl font-medium" />
                  <p className="text-white lg:text-lg text-base font-medium whitespace-nowrap">
                    {Data?.locality_name}, {Data?.city}
                  </p>{" "}
                </div>
                {Data?.validated === 1 && (
                  <div className="mx-4">
                    <img src="/assets/images/propertysale/rera.svg" alt="" />
                  </div>
                )}
              </div>
              <nav
                className=" flex items-center overflow-x-scroll scrollbar-hide justify-start h-20 w-full bg-white shadow-lg absolute lg:-bottom-10
           rounded top-full mt-4 lg:mt-0"
              >
                <NavItemLink To="#configuration" Name="Configuration" />
                <NavItemLink To="#description" Name="Description" />
                <NavItemLink To="#amenities" Name="Amenities" />
                <NavItemLink To="#gallery" Name="Gallery" />
                <NavItemLink To="#get_callback" Name="Get Callback" />
                <div onClick={HandleBookmark} className="mx-6 cursor-pointer">
                  {isBookmarked ? (
                    <BsHeartFill className="text-red text-2xl" />
                  ) : (
                    <BsHeart className="text-red text-2xl" />
                  )}
                </div>
              </nav>
            </div>
          </div>
        </section>
      )}

      <form onBlur={handleSubmit(onSubmit)}>
        {location.pathname === `/profile/property/listings/${id}` && (
          <section
            style={{
              backgroundImage: "url(/assets/images/propertysale/bg.png)",
            }}
            className="w-full object-cover bg-no-repeat h-72 relative"
          >
            <div
              style={{
                background: "rgba(0,0,0,0.2)",
              }}
              className="w-full h-full"
            >
              <div className="  relative lg:w-80vw w-90vw mx-auto h-full flex flex-col items-start justify-center">
                {location.pathname === `/profile/property/listings/${id}` && (
                  <>
                    {isEditClicked ? (
                      <div
                        onClick={HandleUpdate}
                        className="absolute right-0 top-12 bg-green px-6 capitalize py-2 rounded text-lg font-medium text-white cursor-pointer"
                      >
                        Update Changes
                      </div>
                    ) : (
                      <div
                        onClick={() => setisEditClicked(!isEditClicked)}
                        className="absolute right-0 top-12 bg-green px-6 capitalize py-2 rounded text-lg font-medium text-white cursor-pointer"
                      >
                        Edit / Update
                      </div>
                    )}
                  </>
                )}

                {isEditClicked ? (
                  <input
                    type="text"
                    defaultValue={Data?.title}
                    {...register("title")}
                    className="text-white bg-transparent border-b-2 lg:text-5xl text-4xl tracking-tight font-medium capitalize"
                  />
                ) : (
                  <p
                    style={{
                      textShadow: "2px 3px 5px #000",
                    }}
                    className="text-white lg:text-5xl text-4xl tracking-tight font-medium capitalize"
                  >
                    {Data?.title}
                  </p>
                )}

                <div className="flex justify-center items-center py-4 ">
                  <div className="flex justify-center items-center">
                    <MdLocationOn className="text-blue text-3xl font-medium" />
                    <p className="text-white lg:text-lg text-base font-medium whitespace-nowrap">
                      {isEditClicked ? (
                        <>
                          <input
                            type="text"
                            defaultValue={Data?.locality_name}
                            {...register("locality_name")}
                            className="text-white lg:text-lg text-base font-medium whitespace-nowrap bg-transparent border-b-2 mr-4"
                          />{" "}
                          <input
                            type="text"
                            defaultValue={Data?.city}
                            {...register("city")}
                            className="text-white lg:text-lg text-base font-medium whitespace-nowrap bg-transparent border-b-2"
                          />
                        </>
                      ) : (
                        <>
                          {Data?.locality_name}, {Data?.city}
                        </>
                      )}
                    </p>{" "}
                  </div>
                  {Data?.validated === 1 && (
                    <div className="mx-4">
                      <img src="/assets/images/propertysale/rera.svg" alt="" />
                    </div>
                  )}
                </div>
                <nav
                  className=" flex items-center overflow-x-scroll scrollbar-hide justify-start h-20 w-full bg-white shadow-lg absolute lg:-bottom-10
           rounded top-full mt-4 lg:mt-0"
                >
                  <NavItemLink To="#configuration" Name="Configuration" />
                  <NavItemLink To="#description" Name="Description" />
                  <NavItemLink To="#amenities" Name="Amenities" />
                  <NavItemLink To="#gallery" Name="Gallery" />
                  <NavItemLink To="#get_callback" Name="Get Callback" />
                  <div onClick={HandleBookmark} className="mx-6 cursor-pointer">
                    {isBookmarked ? (
                      <BsHeartFill className="text-red text-2xl" />
                    ) : (
                      <BsHeart className="text-red text-2xl" />
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </section>
        )}
      </form>
    </>
  );
};

export default Banner;

const NavItemLink = ({ Name, To }) => (
  <a href={To} className="mx-6">
    <p className="text-lg text-darkgray font-medium cursor-pointer whitespace-nowrap">
      {Name}
    </p>
  </a>
);

// const NavItem = ({ Name, To }) => (
//   <div className="mx-6">
//     <p className="text-lg text-darkgray font-medium cursor-pointer">{Name}</p>
//   </div>
// );
