import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/investmentassist/bg.png)",
        height: "50vh",
        backgroundSize: "cover",
      }}
      className="w-full "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full relative flex justify-center items-end"
      ></div>
    </section>
  );
};

export default Banner;
