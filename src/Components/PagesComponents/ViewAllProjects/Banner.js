import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/AllProjects/banner.jfif)",
        height: "373px",
      }}
      className="w-full bg-cover-norepeat "
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="lg:w-80vw w-90vw mx-auto h-full flex flex-col items-center justify-center">
          <h1 className="lg:text-6xl text-4xl font-semibold text-white tracking-tight">
            Projects In Panipat
          </h1>
          <p className="lg:text-lg text-base py-4 capitalize text-white tracking-tight text-center">
            We Are Proud To Present The Most Reputable Projects And Townships Of
            <br />
            Panipat, All In One Place..
          </p>
          <div className="lg:mt-8 mt-4">
            <div className="w-36 h-1 border-b-3 border-t-4 border-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
