import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/about/bg.jfif)",
        backgroundSize: "cover",
      }}
      className="w-full h-450px"
    >
      <div className="w-full h-full bg-opacity-50 bg-black ">
        <div className="customContainer flex flex-col items-start justify-center h-full">
          <p className="font-semibold text-7xl text-white">ABOUT US </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
