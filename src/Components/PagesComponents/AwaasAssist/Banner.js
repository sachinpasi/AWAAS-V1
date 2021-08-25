import React from "react";
import { TiTick } from "react-icons/ti";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/contact/banner.jpeg)",
      }}
      className="w-full h-550px bg-cover bg-center"
    >
      <div className="w-full h-full bg-black bg-opacity-30">
        <div className="w-90vw lg:w-80vw mx-auto flex flex-col items-start justify-center h-full pt-10">
          <p
            style={{
              textShadow: "2px 3px 5px #000",
            }}
            className="lg:text-6xl text-4xl font-medium text-white"
          >
            Awaas Assist
          </p>
          <div className="flex-col flex items-start w-full my-8">
            <div className="flex justify-start items-center lg:w-2/4 w-full">
              <div className="w-1/12">
                <TiTick className="text-green text-3xl" />
              </div>
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="w-10/12 text-lg  text-white capitalize"
              >
                24 x 7 Multi Channel Support
              </p>
            </div>
            <div className="flex justify-start items-center lg:w-2/4 w-full">
              <div className="w-1/12">
                <TiTick className="text-green text-3xl" />
              </div>
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="w-10/12 text-lg  text-white capitalize"
              >
                Get Mail And Call Support By Trained Professionals
              </p>
            </div>
            <div className="flex justify-start items-center lg:w-2/4 w-full">
              <div className="w-1/12">
                <TiTick className="text-green text-3xl" />
              </div>

              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="w-10/12 text-lg  text-white capitalize"
              >
                Special Instant Call Back Support
              </p>
            </div>
            <div className="flex justify-start items-center lg:w-2/4 w-full">
              <div className="w-1/12">
                <TiTick className="text-green text-3xl" />
              </div>
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="w-10/12 text-lg  text-white capitalize"
              >
                Flexible timings to meets your routine
              </p>
            </div>
            <div className="flex justify-start items-center lg:w-2/4 w-full">
              <div className="w-1/12">
                <TiTick className="text-green text-3xl" />
              </div>
              <p
                style={{
                  textShadow: "2px 3px 5px #000",
                }}
                className="w-10/12 text-lg  text-white capitalize"
              >
                Special real estate mentoring
              </p>
            </div>
          </div>

          <a
            href="#instant-assistance"
            className="px-8 py-2 bg-green text-darkgray text-lg font-medium ml-2  uppercase"
          >
            Get Assistance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
