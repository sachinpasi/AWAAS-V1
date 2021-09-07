import React, { useEffect, useState } from "react";
import { MdLocationOn, MdModeEdit } from "react-icons/md";

import { FaDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectPropertyRentDetails } from "../../../Redux/_features/_PropertyRentDetailsSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";
import axios from "axios";
import { API } from "../../../API";
import { toast } from "react-toastify";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import BannerModal from "../../Verfiy/Property/BannerModal";
import { useHistory, useParams } from "react-router";

const Banner = ({
  setisBookmarkChanged,
  isEditClicked,
  setisEditClicked,
  setisAnyThingUpdated,
  isAnyThingUpdated,
}) => {
  const { Data } = useSelector(selectPropertyRentDetails);

  const [isBookmarked, setisBookmarked] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);

  const user = useSelector(selectUser);
  const { location } = useHistory();
  const { id } = useParams();

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

  return (
    <section
      style={{
        background: "url(/assets/images/propertysale/bg.png)",
      }}
      className="w-full object-cover bg-no-repeat h-72"
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full relative"
      >
        <BannerModal
          setisAnyThingUpdated={setisAnyThingUpdated}
          setisEditOpen={setisEditOpen}
          isEditOpen={isEditOpen}
          Property_For={Data?.property_for}
          isAnyThingUpdated={isAnyThingUpdated}
        />
        <div className=" relative lg:w-80vw w-90vw mx-auto h-full flex flex-col items-start justify-center">
          <h1
            style={{
              textShadow: "2px 3px 5px #000",
            }}
            className="text-white lg:text-5xl text-4xl tracking-tight font-medium capitalize"
          >
            {Data?.title}
          </h1>
          <div className="flex justify-center items-center py-4 ">
            <div className="flex justify-center items-center">
              <MdLocationOn className="text-blue text-3xl font-medium" />
              <h2 className="text-white lg:text-lg text-base font-medium whitespace-nowrap">
                {Data?.locality_name}, {Data?.city}
              </h2>{" "}
            </div>
            {/* {Data?.parent?.rera && ( */}
            {Data?.validated === 1 && (
              <div className="mx-4">
                <img src="/assets/images/propertysale/rera.svg" alt="" />
              </div>
            )}

            {/* )} */}
          </div>
          {location.pathname === `/profile/property/listings/${id}` && (
            <div
              onClick={() => setisEditOpen(!isEditOpen)}
              className="absolute right-0 bg-green text-white font-semibold text-lg px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
            >
              <MdModeEdit className="text-2xl mr-0.5 -mb-0.5" />
              <p>Edit Location</p>
            </div>
          )}
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
