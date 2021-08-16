import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full h-auto bg-textbg flex flex-col justify-center items-center">
      <p className="text-4xl font-light my-5">How it works?</p>
      <div className="w-3/4 grid lg:grid-cols-4 lg:gap-4 gap-12 my-12">
        <div className="w-full h-28 relative border-2 border-lightblue rounded flex flex-col justify-end items-center">
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
            Our executive will call you and guide you.
          </p>
        </div>{" "}
        <div className=" w-full h-28 relative border-2 border-lightblue rounded flex flex-col justify-end items-center">
          <div className="absolute -top-1/4 w-16 h-16 bg-blue rounded-full flex justify-center items-center">
            <img
              className="w-2/4 object-contain "
              src="/assets/images/homeloans/3.svg"
              alt=""
            />
          </div>
          <p className="text-center text-lg leading-5 pb-4 px-5">
            We will collect the documents from you.
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
            We will keep you updated as bank reviews application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
