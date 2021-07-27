import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/articles/bg.jpg)",
        backgroundPosition: "center",
      }}
      className="w-full h-350px "
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="customContainer h-full flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-white tracking-tight">
            Blogs
          </p>
          <p className="text-lg py-4 capitalize text-white tracking-tight text-center">
            Enhance your knowledge and stay up to date with all real estate news{" "}
            <br />
            and articles on Awaasonline.
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
