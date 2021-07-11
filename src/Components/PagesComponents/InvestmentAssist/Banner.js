import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/investmentassist/bg.png)",
        height: "50vh",
        backgroundSize: "cover",
      }}
      className="w-full "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
        }}
        className="w-full h-full relative flex justify-center items-end"
      >
        <div className="w-2/3 h-60  bg-white -mb-32 shadow-xl rounded-sm flex flex-col justify-center items-center px-8 ">
          <div className="flex justify-center items-center flex-col border-b-2 border-dashed w-full py-2">
            <p className="text-4xl font-medium py-1">Invest In Real Estate</p>
            <p className="text-lg text-darkgray">
              Get investment advice from our experienced advisers
            </p>
          </div>
          <div className="flex justify-center items-center flex-col w-full py-4">
            <p className="text-2xl font-medium pb-3">Request Callback</p>
            <div className="w-full flex justify-between items-center h-11">
              <input
                className="w-full h-full rounded border-2 mr-1 px-4 "
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full h-full  rounded border-2 mx-2 px-4 "
                type="text"
                placeholder="Phone Number"
              />
              <button className="w-full h-full bg-blue rounded text-white font-medium ml-1">
                {" "}
                Get Call Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
