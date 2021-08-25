import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Director = () => {
  return (
    <section className="w-full bg-extralightblue">
      <div className="lg:w-80vw mx-auto w-90vw flex justify-between py-10">
        <div className="w-3/5">
          <p className="w-2/4  text-blue text-5xl my-8">Director's Message</p>
          <p className="text-darkgray text-xl italic">
            “We value visionary thinking and hard work, driven by a passion for
            success. Our goal is to change the real estate industry forever
            through superior talent, and revolutionary technology. We are
            determined to be the best in residential development, commercial
            development and Real estate investments. We believe that integrity,
            teamwork, passion, accountability, and a learning mind-set, are the
            key aspects of real success.”
          </p>
        </div>
        <div className="w-2/5 flex flex-col items-center justify-center ">
          <div className="flex justify-center ">
            <div className="w-52 h-52 rounded-full border-8 border-yellow-300 bg-white relative ">
              <img
                src="/assets/images/about/director.jfif"
                className="object-cover object-center w-full h-full rounded-full"
                alt=""
              />
              <ImQuotesLeft className="text-5xl text-green absolute -top-2 -right-3" />
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <p className="pt-4 text-xl font-medium text-blue w-3/5 text-center leading-7">
              "We simply treat each customer as if it was our first, and that's
              how we serve everyone at Awaasonline."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
