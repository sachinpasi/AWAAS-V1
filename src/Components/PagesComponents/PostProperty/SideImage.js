import React from "react";

const SideImage = () => {
  return (
    <div className="w-30percent h-auto relative">
      <div className=" h-70vh sticky top-12 ">
        <img
          className="w-full h-full object-cover object-center"
          src="/assets/images/postproperty/side.jfif"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideImage;
