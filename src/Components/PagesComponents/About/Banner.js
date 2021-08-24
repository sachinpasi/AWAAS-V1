import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/about/bg.jpg)",
        backgroundSize: "cover",
      }}
      className="w-full h-450px bg-center"
    >
      <div className="w-full h-full bg-opacity-50 bg-black ">
        <div className="customContainer flex flex-col items-start justify-center h-full">
          <p className="font-semibold text-7xl text-white">ABOUT US </p>
          <p className="text-xl text-white w-8/12 my-6">
            We dream and commit towards making buying selling and renting
            property a delightful experience for all. With certified projects
            and validated properties, we aspire to bring the best of Residential
            and Commercial listings to your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
