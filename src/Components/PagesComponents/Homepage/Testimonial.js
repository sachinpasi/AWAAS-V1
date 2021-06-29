import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
const Testimonial = () => {
  return (
    <section
      style={{
        background: "url(assets/images/homepage/testimonial/bg.png)",
        height: "400px",
      }}
      className="w-full h-full flex justify-end"
    >
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
        }}
        className="w-2/4 h-full flex justify-center items-center"
      >
        <OwlCarousel loop items={1}>
          <div className="w-5/6 mx-auto h-3/4 flex flex-col justify-center items-start">
            <p className="text-5xl font-light">Testimonial</p>
            <p className="text-base italic leading-8 py-4">
              We were first time home buyers in need of a house before our
              apartment lease expired in a month. We found Awaasonline from a
              referral of a friend. The amount of time they had spent in helping
              us make our own informative decisions is praiseworthy.
            </p>

            <div className="flex justify-start items-center">
              <img src="assets/images/homepage/testimonial/p1.png" alt="" />
              <div className="-mt-4">
                <p className="text-base">Product manager</p>
                <p className="text-sm italic">Happy Customer</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
