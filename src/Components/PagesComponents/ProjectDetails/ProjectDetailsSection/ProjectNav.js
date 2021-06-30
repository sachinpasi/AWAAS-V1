import React from "react";

const ProjectNav = () => {
  return (
    <div className="w-full h-32 border-1 border-projectsborder rounded px-4">
      <div className="flex justify-start items-center w-full h-3/5 border-b-1 py-4">
        <div className="px-7 py-2 bg-blue rounded-full cursor-pointer mr-4">
          <p className="text-lg font-medium text-white">La Regencia</p>
        </div>
        <div className="px-7 py-2 bg-extralightgray rounded-full cursor-pointer mr-4">
          <p className="text-lg font-medium text-darkgray">Connaught Plots</p>
        </div>
      </div>
      <div className="w-full h-2/5 flex items-center justify-start">
        <div className="cursor-pointer  flex justify-center items-center mr-4 border-b-4 border-blue h-full">
          <p className="text-base font-medium text-blue px-2">
            Tower Alps 3 BHK
          </p>
        </div>
        <div className=" cursor-pointer flex justify-center items-center mr-4">
          <p className="text-base font-medium text-darkgray px-2">
            Tower Belford 3 BHK
          </p>
        </div>
        <div className=" cursor-pointer flex justify-center items-center mr-4">
          <p className="text-base font-medium text-darkgray px-2">
            Tower Columbia 2 BHK
          </p>
        </div>
        <div className=" cursor-pointer flex justify-center items-center mr-4">
          <p className="text-base font-medium text-darkgray px-2">
            Tower Columbia 2 BHK
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
