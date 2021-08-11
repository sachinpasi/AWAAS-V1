import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Customers = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:w-80vw w-90vw mx-auto py-8 flex-col flex justify-center items-center">
        <p className="text-blue text-4xl uppercase">
          Some of our satisfied customers
        </p>
        <p className="text-2xl text-darkgray text-center py-4">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business.
          <br /> Customer feedback is vital in helping us to get it right.
        </p>
        <div className="w-10/12 mx-auto flex-col flex justify-between items-center">
          <div className="w-full h-60 flex items-center justify-center  my-12">
            <div className="w-60 h-60 bg-blue rounded-full ">
              <img
                className="w-full h-full bg-blue rounded-full object-cover "
                src="/assets/images/investmentassist/p1.jfif"
                alt=""
              />
            </div>
            <div className=" w-9/12 h-full px-8">
              <FaQuoteLeft className="text-3xl text-darkgray" />
              <p className="text-lg text-darkgray pt-4 w-10/12 mx-auto">
                I have invested in over 4 properties with Awaasonline, and I
                will keep investing with them simply because their service feels
                like a friend who genuinely wants your well being.
              </p>
              <div className="w-full flex justify-end">
                <FaQuoteRight className="text-3xl text-darkgray" />
              </div>
              <p className="text-xl uppercase tracking-wider text-darkgray ml-14">
                AJAY JINDAL
              </p>
            </div>
          </div>

          <div className="w-full h-60 flex items-center justify-center  my-12">
            <div className="w-60 h-60 bg-blue rounded-full ">
              <img
                className="w-full h-full bg-blue rounded-full object-cover "
                src="/assets/images/investmentassist/p6.jfif"
                alt=""
              />
            </div>
            <div className=" w-9/12 h-full px-8">
              <FaQuoteLeft className="text-3xl text-darkgray" />
              <p className="text-lg text-darkgray pt-4 w-10/12 mx-auto">
                I applied for a home loan with Awaasonline and they helped with
                all the bank formalities and adviced on planning even little
                things like what kind of Interest and tenure to go for. It just
                made my involvement to a minimum as i am a working woman. Thanks
                a lot for that!
              </p>
              <div className="w-full flex justify-end">
                <FaQuoteRight className="text-3xl text-darkgray" />
              </div>
              <p className="text-xl uppercase tracking-wider text-darkgray ml-14">
                GEETA JAIN
              </p>
            </div>
          </div>

          <div className="w-full h-60 flex items-center justify-center  my-12">
            <div className="w-60 h-60 bg-blue rounded-full ">
              <img
                className="w-full h-full bg-blue rounded-full object-cover "
                src="/assets/images/investmentassist/p5.jfif"
                alt=""
              />
            </div>
            <div className=" w-9/12 h-full px-8">
              <FaQuoteLeft className="text-3xl text-darkgray" />
              <p className="text-lg text-darkgray pt-4 w-10/12 mx-auto">
                I came across their Investment services while browsing
                Properties on awaasonine.com. So i just left my number for a
                query, and I immediately got a call back with potential
                properties to invest in, and they further guided me until i
                found my perfect property.
              </p>
              <div className="w-full flex justify-end">
                <FaQuoteRight className="text-3xl text-darkgray" />
              </div>
              <p className="text-xl uppercase tracking-wider text-darkgray ml-14">
                PRAKASH Arora
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
