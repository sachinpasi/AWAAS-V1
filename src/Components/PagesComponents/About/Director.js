import React from "react";

const Director = () => {
  return (
    <section className="w-full">
      <div className="customContainer flex flex-col items-start py-8">
        <p className="text-4xl font-medium text-darkgray mb-3">
          From Director’s Desk -
        </p>

        <div className="w-full flex my-4">
          <div className="w-1/5">
            <img
              src="/assets/images/about/director.jfif"
              className="object-cover"
              alt=""
            />
            <p className="text-xl text-blue font-medium mt-2">Rajesh Gupta</p>
            <p className="text-darkgray">Director</p>
          </div>
          <div className="w-3/4 p-8 h-full flex flex-col justify-center items-start">
            <p className="text-lg italic text-darkgray my-1 text-justify">
              “We value visionary thinking and hard work, driven by a passion
              for success. Our goal is to change the real estate industry
              forever through superior talent, and revolutionary technology. We
              are determined to be the best in residential development,
              commercial development and Real estate investments. We believe
              that integrity, teamwork, passion, accountability, and a learning
              mind-set, are the key aspects of real success.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
