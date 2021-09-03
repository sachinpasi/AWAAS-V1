import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useSelector } from "react-redux";
import { selectPropertySaleDetails } from "../../../../Redux/_features/_PropertySaleDetailsSlice";
import { useLocation, useParams } from "react-router";
import { MdModeEdit } from "react-icons/md";
import GalleryModal from "../../../Verfiy/Property/GalleryModal";

SwiperCore.use([Pagination, Navigation]);

const Gallery = ({ setisAnyThingUpdated, isAnyThingUpdated }) => {
  const { Data } = useSelector(selectPropertySaleDetails);
  const location = useLocation();
  const { id } = useParams();
  const [isGalleryEditOpen, setisGalleryEditOpen] = useState(false);

  return (
    <div
      id="gallery"
      className="w-full h-full border-1 border-projectsborder rounded lg:px-4  my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 px-4 relative flex justify-between items-center">
        <p className="text-3xl text-darkgray ">Project Gallery</p>
        {location.pathname === `/profile/property/listings/${id}` && (
          <div
            onClick={() => setisGalleryEditOpen(!isGalleryEditOpen)}
            className="absolute right-0 bg-green text-white font-semibold  px-4 py-1 shadow-2xl cursor-pointer flex items-center transform rounded-full hover:scale-95 transition-transform"
          >
            <MdModeEdit className="text-xl -mb-0.5 mr-0.5" />
            <p>Edit Gallery</p>
          </div>
        )}

        <GalleryModal
          isGalleryEditOpen={isGalleryEditOpen}
          setGalleryEditOpen={setisGalleryEditOpen}
          setisAnyThingUpdated={setisAnyThingUpdated}
          isAnyThingUpdated={isAnyThingUpdated}
          Property_For={Data?.property_for}
        />
      </div>
      <div className="py-4 ">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {Data?.library?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                style={{
                  maxHeight: "400px",
                }}
                src={`https://codeiator.com/awaas/public/storage/property/images/${item}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
