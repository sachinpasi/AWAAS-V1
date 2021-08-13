import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/news/bg.jpg)",
        backgroundSize: "cover",
      }}
      className="w-full lg:h-350px h-280px   "
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="lg:w-80vw w-90vw mx-auto h-full flex flex-col items-center justify-center">
          <p className="lg:text-6xl text-2xl font-semibold text-white tracking-tight">
            Panipat Real Estate Updates
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
