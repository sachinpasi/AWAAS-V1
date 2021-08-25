import React from "react";

const HowWeAchieve = () => {
  return (
    <div className="w-full h-full bg-textbg">
      <div className="lg:w-80vw mx-auto w-90vw py-10">
        <p className="text-5xl text-blue py-10 text-center">
          How We Achieve It ?
        </p>
        <div className="grid-cols-3 grid gap-10 w-10/12 mx-auto pb-10 pt-4">
          <div className="w-full h-450px bg-white rounded-3xl p-5 flex flex-col justify-between items-center shadow-sm">
            <img
              className="w-full h-3/5 object-contain"
              src="/assets/images/about/how1.jpg"
              alt=""
            />
            <div className="pb-5">
              <p className="text-3xl text-extradarkblue font-medium text-center mb-4">
                Communications
              </p>
              <p className="text-center text-xl leading-6  text-darkgray">
                We have various open channels of communication with our users
                for genuine feedback.
              </p>
            </div>
          </div>

          <div className="w-full h-450px bg-white rounded-3xl p-5 flex flex-col justify-between items-center shadow-sm">
            <img
              className="w-full h-3/5 object-contain"
              src="/assets/images/about/how2.jpg"
              alt=""
            />
            <div className="pb-5">
              <p className="text-3xl text-extradarkblue font-medium text-center mb-4">
                Inspired Design
              </p>
              <p className="text-center text-xl leading-6  text-darkgray">
                We have various open channels of communication with our users
                for genuine feedback.
              </p>
            </div>
          </div>

          <div className="w-full h-450px bg-white rounded-3xl p-5 flex flex-col justify-between items-center shadow-sm">
            <img
              className="w-full h-3/5 object-contain"
              src="/assets/images/about/how3.jpg"
              alt=""
            />
            <div className="pb-5">
              <p className="text-3xl text-extradarkblue font-medium text-center mb-4">
                Happy Customers
              </p>
              <p className="text-center text-xl leading-6  text-darkgray">
                Our hard work is clearly visible as reflection of Happy and
                satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeAchieve;
