import React from "react";
import { TiTick } from "react-icons/ti";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/legal/bg.jfif)",
        height: "60vh",
      }}
      className="w-full bg-cover-norepeat "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className=" h-full relative flex justify-center items-start flex-col text-white"
      >
        <div className="lg:w-80vw w-90vw mx-auto pt-10">
          <p className="lg:text-4xl text-2xl font-medium mb-4 lg:w-2/4 w-full">
            A Fraudulent Property Deal could cost you your Life's Savings
          </p>
          <div className="flex items-center text-lg py-1 lg:w-2/4 ">
            <TiTick className="text-6xl text-green w-1/5" />
            <div className="px-2 w-4/5">
              <p className="lg:text-xl text-lg text-white font-medium ">
                Consult the best legal experts
              </p>
              <p className="lg:text-sm text-xs text-white capitalize">
                before you buy a property
              </p>
            </div>
          </div>
          <div className="flex items-center text-lg py-1 lg:w-2/4">
            <TiTick className="text-6xl text-green w-1/5" />
            <div className="px-2 w-4/5">
              <p className="text-xl text-white font-medium ">
                Get end-to-end assistance
              </p>
              <p className="text-sm text-white capitalize">
                for Title check, Sale deed, Registration & much more
              </p>
            </div>
          </div>
          <div className="flex items-center text-lg py-1 lg:w-2/4">
            <TiTick className="text-6xl text-green w-1/5" />
            <div className="px-2 w-4/5">
              <p className="text-xl text-white font-medium ">
                Ensure safety of your investment
              </p>
              <p className="text-sm text-white capitalize">
                at Lowest Prices on all Property Legal services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
