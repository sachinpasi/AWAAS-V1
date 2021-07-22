import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(/assets/images/articles/bg.png)`,
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-full"
      >
        <div className="customContainer flex flex-col items-start justify-center h-full">
          <p className="text-5xl font-semibold text-white w-2/4">
            Guide to claim tax benefits on home loan interest
          </p>
          <p className="text-white my-2 text-lg">
            September 2,2020 by Himanshu Arora
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
