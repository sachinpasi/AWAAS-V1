import React from "react";

const Howitworks = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="lg:w-80vw w-90vw mx-auto flex flex-col justify-center items-center py-12">
        <p className="text-4xl font-medium text-darkgray"> How it works?</p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between py-12">
          <div className="lg:w-1/3 w-full flex flex-col justify-center items-center">
            <img className="h-44" src="/assets/images/legal/1.svg" alt="" />
            <p className="text-center w-3/4  font-medium text-darkgray my-5">
              Share your contact details in the above form.
            </p>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col justify-center items-center">
            <img className="h-44" src="/assets/images/legal/2.svg" alt="" />
            <p className="text-center w-3/4  font-medium text-darkgray my-5">
              Our executive will call you to fix a meeting.
            </p>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col justify-center items-center">
            <img className="h-44" src="/assets/images/legal/3.svg" alt="" />
            <p className="text-center w-3/4  font-medium text-darkgray my-5">
              Our Legal Advisor will guide you accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
