import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-textbg py-12">
      <div className="lg:w-80vw w-90vw mx-auto bg-white lg:h-450px  py-4 shadow-xl rounded">
        <p className="text-3xl font-medium text-darkgray text-center pb-1">
          Why invest with us?
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly items-center p-4">
          <div className="lg:w-1/4 h-full">
            <img
              className="w-full h-2/3 object-cover"
              src="/assets/images/investmentassist/1.PNG"
              alt=""
            />
            <p className="text-xl font-medium text-darkgray text-center">
              Predictable Returns
            </p>
            <p className="text-center text-base text-darkgray">
              With reputable and performing Projects, your returns are secured
              even in volatile market.
            </p>
          </div>
          <div className="lg:w-1/4 h-full">
            <img
              className="w-full h-2/3 object-cover"
              src="/assets/images/investmentassist/2.PNG"
              alt=""
            />
            <p className="text-xl font-medium text-darkgray text-center">
              Reputable Co-investors
            </p>
            <p className="text-center text-base text-darkgray">
              Our Investors are brands withing themselves, investing alongside
              them, you can trust Awaasonline with your life's savings.
            </p>
          </div>
          <div className="lg:w-1/4 h-full">
            <img
              className="w-full h-2/3 object-cover"
              src="/assets/images/investmentassist/3.PNG"
              alt=""
            />
            <p className="text-xl font-medium text-darkgray text-center">
              Tax Benefits
            </p>
            <p className="text-center text-base text-darkgray">
              Ability to claim depreciation and expenses helps you to reduce the
              effective tax rate for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
