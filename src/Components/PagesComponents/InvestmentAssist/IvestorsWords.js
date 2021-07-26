import React from "react";

const IvestorsWords = () => {
  return (
    <section className="w-full h-full bg-textbg ">
      <div className="customContainer flex flex-col items-start">
        <p className="text-4xl font-medium py-8">
          What Our Investors Have To Say
        </p>
        <div className="w-full h-full grid-cols-3 grid gap-8 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default IvestorsWords;

const Card = () => (
  <div className="w-full h-400px bg-blue border-extralightgray border-1">
    <div
      style={{
        borderRadius: "15rem 0 0 0 ",
      }}
      className="w-full h-full bg-white  flex flex-col items-start  "
    >
      <div className="p-6">
        <div className="flex items-center ">
          <div className="w-28 h-28 bg-black rounded-full overflow-hidden">
            <img
              className="w-28 h-28  object-cover rounded-full"
              src="/assets/images/vastu/3.jfif"
              alt=""
            />
          </div>
          <div className="ml-4">
            <p className="text-xl font-medium text-darkgray leading-5 ">
              Albert Dikosta
            </p>
            <p className="text-base text-lightgray">CEO - Alfa Maters</p>
          </div>
        </div>
        <div className="w-full p-1 mx-auto border-b-1 border-dashed border-green pb-4">
          <p className="text-base  text-darkgray">
            La Regencia is an 11-acre project, located in sector - 19, a fully
            developed and one of the prime locations in the city of Panipat
            (India). It is Panipat's first high-rise project with international
            architecture and planning. The project is designed by
            Arquitectonica, a leading architectural firm in the United States.
          </p>
        </div>
        <div>
          <p className="text-green font-medium text-xl">Invested In</p>
          <p className="text-base text-darkgray">Astrum La Regencia </p>
        </div>
      </div>
    </div>
  </div>
);
