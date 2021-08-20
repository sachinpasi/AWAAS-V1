import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full h-full bg-textbg flex flex-col justify-center items-center  py-10 ">
      <p className="text-5xl text-darkgray font-medium">How it works?</p>
      <div className=" w-90vw mx-auto lg:w-80vw grid lg:grid-cols-3 gap-8  my-12">
        <div className=" w-full h-28 relative border-2 border-lightblue rounded flex flex-col justify-end items-center">
          <div className="absolute -top-1/4 w-16 h-16 bg-blue rounded-full flex justify-center items-center">
            <img
              className="w-2/4 object-contain "
              src="/assets/images/homeloans/1.svg"
              alt=""
            />
          </div>
          <p className="text-center text-lg leading-5 pb-4 px-5">
            Share your contact details in the above form.
          </p>
        </div>{" "}
        <div className=" w-full h-28 relative border-2 border-lightblue rounded flex flex-col justify-end items-center">
          <div className="absolute -top-1/4 w-16 h-16 bg-blue rounded-full flex justify-center items-center">
            <img
              className="w-2/4 object-contain "
              src="/assets/images/homeloans/2.svg"
              alt=""
            />
          </div>
          <p className="text-center text-lg leading-5 pb-4 px-5">
            Our executive will call you to fix a meeting.
          </p>
        </div>{" "}
        <div className=" w-full h-28 relative border-2 border-lightblue rounded flex flex-col justify-end items-center">
          <div className="absolute -top-1/4 w-16 h-16 bg-blue rounded-full flex justify-center items-center">
            <img
              className="w-2/4 object-contain "
              src="/assets/images/homeloans/4.svg"
              alt=""
            />
          </div>
          <p className="text-center text-lg leading-5 pb-4 px-5">
            Our Vastu Advisor will visit and guide you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
