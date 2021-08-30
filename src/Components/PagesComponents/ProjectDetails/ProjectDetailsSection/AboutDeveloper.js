import React from "react";
import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";
const AboutDeveloper = () => {
  const { Data } = useSelector(selectProjectDetails);

  return (
    <div className="w-full h-full border-1 border-projectsborder rounded px-4 mt-4">
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <h2 className="text-3xl text-darkgray "> About Developer</h2>
      </div>
      <div className="py-4">
        <p className="text-base text-darkgray  leading-7 pb-4">
          {Data?.parent?.aboutDeveloper}
        </p>
      </div>
    </div>
  );
};

export default AboutDeveloper;
