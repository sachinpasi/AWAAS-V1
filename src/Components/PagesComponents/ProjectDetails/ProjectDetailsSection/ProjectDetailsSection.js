import React from "react";
import AboutDeveloper from "./AboutDeveloper";
import Amenities from "./Amenities";
import Configuration from "./Configuration";
import Gallery from "./Gallery";
import ProjectNav from "./ProjectNav";
import ProjectOverview from "./ProjectOverview";
import Sidebar from "./Sidebar";

const ProjectDetailsSection = ({ Data }) => {
  return (
    <section className="w-full h-full flex justify-between my-24">
      <div className=" customContainer h-full flex justify-between">
        <div className="w-3/4 h-full mr-4">
          <ProjectNav />
          <Configuration Data={Data} />
          <Gallery />
          <Amenities />
          <ProjectOverview />
          <AboutDeveloper />
        </div>
        <div className="w-3/12 h-full">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
