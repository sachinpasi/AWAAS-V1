import React from "react";

const Values = () => {
  return (
    <section className="w-full h-full bg-textbg">
      <div className="customContainer flex flex-col items-start py-8">
        <p className="text-4xl font-medium text-darkgray">Our Values</p>
        <p className="text-darkgray text-2xl py-4">
          Our values capture our commitment not only to ethical, professional
          and responsible conduct <br /> but to the essence of real estate
          success.
        </p>
        <ul className="list-disc text-darkgray mx-5">
          <li className="text-xl">
            We always aim to build long-term client relationships.
          </li>
          <li className="text-xl">
            We always aim to build long-term client relationships.
          </li>
          <li className="text-xl">
            We take great pride in delivering services of the highest quality.
          </li>
          <li className="text-xl">
            We always go ‘the extra mile’ to meet our clients’ objectives.
          </li>
          <li className="text-xl">
            We approach problems with a proactive, practical attitude,
            delivering robust solutions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Values;
