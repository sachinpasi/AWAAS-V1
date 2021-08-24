import React from "react";
import AboutDeveloper from "./AboutDeveloper";
import Amenities from "./Amenities";
import Configuration from "./Configuration";
import Gallery from "./Gallery";
import ProjectNav from "./ProjectNav";
import ProjectOverview from "./ProjectOverview";
import Sidebar from "./Sidebar";

const ProjectDetailsSection = () => {
  return (
    <section className="w-full h-full flex justify-between my-24">
      <div className=" lg:w-80vw w-90vw mx-auto h-full flex lg:flex-row flex-col justify-between ">
        <div className=" h-full lg:w-69percent w-full ">
          <ProjectNav />
          <Configuration />
          <Gallery />
          <Amenities />
          <ProjectOverview />
          <AboutDeveloper />
        </div>
        <div className="lg:w-29percent w-full h-auto relative mt-8 lg:mt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
