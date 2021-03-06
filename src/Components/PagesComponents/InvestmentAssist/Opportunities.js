import React from "react";

const Opportunities = () => {
  return (
    <section className="w-full h-full bg-textbg ">
      <div className="lg:w-80vw w-90vw mx-auto flex flex-col items-start">
        <p className="lg:text-4xl text-2xl font-medium py-8">
          Investment Opportunities
        </p>
        <div className="w-full lg:h-450px grid lg:grid-cols-3 grid-cols-1 gap-6 ">
          <div className="w-full h-450px bg-white shadow-xl ">
            <div className="w-full h-3/5 ">
              <img
                className="w-full h-full object-cover"
                src="https://codeiator.com/awaas/public/storage/projects/banner_img/banner_img_1627736707.3301.jpg"
                alt=""
              />
            </div>

            <div className="w-full h-2/4 p-4 flex flex-col items-start">
              <p className="text-2xl font-medium text-darkgray">
                Harmony Homes
              </p>
              <p className=" text-lightgray">Panipat - Sector 19</p>
              <div className="flex justify-between items-center w-full py-4">
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">9% p.a</p>
                  <p className="text-lightgray">ROI</p>
                </div>
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">6 Months</p>
                  <p className="text-lightgray">Terms</p>
                </div>
                <div className=" w-1/3 flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">12 Days</p>
                  <p className="text-lightgray">Terms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-450px bg-white shadow-xl ">
            <div className="w-full h-3/5 ">
              <img
                className="w-full h-full object-cover"
                src="https://awaasonline.com/old/functions/projects/uploads/453761.png"
                alt=""
              />
            </div>

            <div className="w-full h-2/4 p-4 flex flex-col items-start">
              <p className="text-2xl font-medium text-darkgray">
                Eldeco Estate One
              </p>
              <p className=" text-lightgray">Panipat - Sector 40</p>
              <div className="flex justify-between items-center w-full py-4">
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">9% p.a</p>
                  <p className="text-lightgray">ROI</p>
                </div>
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">6 Months</p>
                  <p className="text-lightgray">Terms</p>
                </div>
                <div className=" w-1/3 flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">12 Days</p>
                  <p className="text-lightgray">Terms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-450px bg-white shadow-xl ">
            <div className="w-full h-3/5 ">
              <img
                className="w-full h-full object-cover"
                src="https://codeiator.com/awaas/public/storage/projects/banner_img/banner_img_1627118646.png"
                alt=""
              />
            </div>

            <div className="w-full h-2/4 p-4 flex flex-col items-start">
              <p className="text-2xl font-medium text-darkgray">
                Connaught Estate
              </p>
              <p className=" text-lightgray">Panipat - Sector 23</p>
              <div className="flex justify-between items-center w-full py-4">
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">9% p.a</p>
                  <p className="text-lightgray">ROI</p>
                </div>
                <div className="border-r-1 w-1/3 border-blue flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">6 Months</p>
                  <p className="text-lightgray">Terms</p>
                </div>
                <div className=" w-1/3 flex flex-col items-center justify-center ">
                  <p className="text-blue font-medium text-lg ">12 Days</p>
                  <p className="text-lightgray">Terms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
