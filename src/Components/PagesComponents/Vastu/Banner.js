import React from "react";
import { TiTick } from "react-icons/ti";
const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/vastu/bg.png)",
        height: "50vh",
        backgroundSize: "cover",
      }}
      className="w-full "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className=" h-full relative flex justify-center items-start flex-col text-white"
      >
        <div className="w-90vw lg:w-80vw mx-auto">
          <p className="lg:text-5xl text-3xl mb-4">Vastu Consultant</p>
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-2/4">
            <TiTick className="text-3xl text-green w-1/5" />
            <p className="w-4/5">Verified & experienced Consultants</p>
          </div>
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-2/4">
            <TiTick className="text-3xl text-green w-1/5" />
            <p className="w-4/5">
              On-site & Telephonic Consultations in your preferred language
            </p>
          </div>
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-2/4">
            <TiTick className="text-3xl text-green w-1/5" />
            <p className="w-4/5">
              View Sample Reports & Videos to pick the Best Consultant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
