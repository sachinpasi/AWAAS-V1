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
        <div className="customContainer">
          <p className="text-5xl mb-4">Vastu Consultant</p>
          <p className="flex items-center text-lg py-0.5">
            <TiTick className="text-3xl text-green" />
            Verified & experienced Consultants
          </p>
          <p className="flex items-center text-lg py-0.5">
            <TiTick className="text-3xl text-green" />
            On-site & Telephonic Consultations in your preferred language
          </p>
          <p className="flex items-center text-lg py-0.5">
            <TiTick className="text-3xl text-green" />
            View Sample Reports & Videos to pick the Best Consultant
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
