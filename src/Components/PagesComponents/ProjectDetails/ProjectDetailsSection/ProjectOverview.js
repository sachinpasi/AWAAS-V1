import React from "react";
import { useSelector } from "react-redux";
import { selectProjectDetails } from "../../../../Redux/_features/_ProjectDetailsSlice";
const ProjectOverview = () => {
  const { Data } = useSelector(selectProjectDetails);
  return (
    <div
      id="overview"
      className="w-full h-full border-1 border-projectsborder rounded px-4 my-4"
    >
      <div className="w-full border-b-1 border-projectsborder py-4 ">
        <h2 className="text-3xl text-darkgray ">Project Overview</h2>
      </div>
      <div className="py-4">
        <p className="text-base text-darkgray leading-7 pb-4">
          {Data?.parent?.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
