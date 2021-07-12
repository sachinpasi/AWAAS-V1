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
        className="w-full h-full relative flex justify-center items-center flex-col"
      >
        <p
          style={{
            textShadow: "2px 3px 5px #000",
          }}
          className="text-5xl text-white py-2"
        >
          Welcome to Awaas Assist
        </p>
        <p
          style={{
            textShadow: "2px 3px 5px #000",
          }}
          className="text-lg text-white"
        >
          We are here to take care of your needs.
        </p>
      </div>
    </section>
  );
};

export default Banner;
