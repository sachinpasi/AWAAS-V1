import React from "react";

const Call = () => {
  return (
    <section className="w-full bg-blue ">
      <div className="customContainer flex flex-col justify-center items-center">
        <div className="w-full h-2/4 flex justify-between items-center flex-col py-4 border-b-1 border-white border-dashed">
          <p className="text-3xl font-medium text-white">
            Still Can't Decide,Lets Have A Call
          </p>
          <p className="text-white py-1">
            Fill The Form Below, We Will Contact You Shortly
          </p>
        </div>
        <div className="w-full  flex justify-between items-center h-28">
          <input
            className="w-1/4 h-12 bg-blue border-1 border-lightblue placeholder-gray-100 px-4 mr-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-1/4 h-12 bg-blue border-1 border-lightblue placeholder-gray-100 px-4 mr-2"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="w-1/4 h-12 bg-blue border-1 border-lightblue placeholder-gray-100 px-4 mr-2"
            type="text"
            placeholder="Email Address"
          />
          <button className="w-1/4 h-12 bg-white text-blue ml-2 font-medium text-xl">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Call;
