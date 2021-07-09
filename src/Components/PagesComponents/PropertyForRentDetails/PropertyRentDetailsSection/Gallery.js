import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { selectPropertyRentDetails } from "../../../../Redux/_features/_PropertyRentDetailsSlice";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useSelector } from "react-redux";

SwiperCore.use([Pagination, Navigation]);

const Gallery = () => {
  const { Data } = useSelector(selectPropertyRentDetails);

  return (
    <div
      id="gallery"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <p className="text-3xl text-darkgray ">Project Gallery</p>
      </div>
      <div className="py-4">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {Data?.library?.map((item) => (
            <SwiperSlide>
              <img
                style={{
                  maxHeight: "400px",
                }}
                src={`https://codeiator.com/${item}`}
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
