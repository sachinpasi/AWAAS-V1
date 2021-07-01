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
      <div className=" customContainer h-full flex justify-between ">
        <div style={{ width: "69%" }} className=" h-full ">
          <ProjectNav />
          <Configuration />
          <Gallery />
          <Amenities />
          <ProjectOverview />
          <AboutDeveloper />
        </div>
        <div
          style={{
            width: "29%",
          }}
          className="w-3/12 h-auto relative"
        >
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
