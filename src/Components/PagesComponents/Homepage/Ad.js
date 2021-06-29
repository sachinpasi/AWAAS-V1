import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const Ad = () => {
  return (
    <section className="w-full h-full bg-textbg pb-8">
      <div className="customContainer">
        <OwlCarousel items={1} loop>
          <img src="/assets/images/homepage/ad.png" alt="" />
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Ad;
