import React from "react";

const Contact = () => {
  return (
    <section className="bg-textbg w-full h-80 pb-12 relative">
      <div className="absolute -top-10 left-2/4  transform -translate-x-2/4 ">
        <div className="customContainer px-7 h-64   bg-white shadow-lg rounded flex flex-col justify-between ">
          <div className="w-full h-2/4 flex flex-col justify-center items-center border-b-2 border-dashed border-lightblue">
            <p className="text-3xl text-darkgray w-2/4 text-center">
              Get on site and off site Vastu advice from the best advisors.
            </p>
          </div>
          <div className="w-full h-2/4 flex flex-col justify-center items-center ">
            <p className="text-3xl text-darkgray w-2/4 text-center">
              Get the vaastu advice
            </p>
            <div className="flex justify-between items-center w-full mt-3">
              <input
                className="w-1/4 h-11 px-4 border-1 rounded-sm placeholder-darkgray border-lightblue "
                type="text"
                placeholder="Name"
              />
              <input
                className="w-1/4 h-11 px-4 border-1 rounded-sm placeholder-darkgray border-lightblue "
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="w-1/4 h-11 px-4 border-1 rounded-sm placeholder-darkgray border-lightblue "
                type="text"
                placeholder="Email Address"
              />
              <button className="w-1/5 h-11 rounded-sm bg-blue text-white font-medium ">
                Get Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
