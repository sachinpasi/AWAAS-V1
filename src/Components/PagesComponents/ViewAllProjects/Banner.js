import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/AllProjects/bg.jpg)",
        height: "373px",
      }}
      className="w-full "
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="customContainer h-full flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-white tracking-tight">
            Projects In Panipat
          </p>
          <p className="text-lg py-4 capitalize text-white tracking-tight text-center">
            We Are Proud To Present The Most Reputable Projects And Townships Of
            <br />
            Panipat, All In One Place..
          </p>
          <div className="mt-8">
            <div className="w-36 h-1 border-b-3 border-t-4 border-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
