import React from "react";
import { TiTick } from "react-icons/ti";
const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/vastu/bg.jpeg)",
        height: "60vh",
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
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-3/5">
            <TiTick className="text-3xl text-green lg:w-1/12" />
            <p className="w-4/5">Verified & experienced Consultants</p>
          </div>
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-3/5">
            <TiTick className="text-3xl text-green lg:w-1/12" />
            <p className="w-4/5">
              On-site & Telephonic Consultations in your preferred language
            </p>
          </div>
          <div className="flex items-center lg:text-lg py-0.5 w-full lg:w-3/5">
            <TiTick className="text-3xl text-green lg:w-1/12" />
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
