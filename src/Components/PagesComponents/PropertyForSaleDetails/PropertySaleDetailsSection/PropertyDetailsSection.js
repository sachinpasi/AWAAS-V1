import React from "react";
import PriceSection from "./PriceSection";

import Sidebar from "./Sidebar";
import Gallery from "./Gallery";
import Configuration from "./Configuration";

import PropertyDescription from "./PropertyDescription";
import Amenities from "./Amenities";

const PropertyDetailsSection = () => {
  return (
    <section className="w-full h-full flex justify-between my-24">
      <div className=" customContainer h-full flex justify-between ">
        <div style={{ width: "69%" }} className=" h-full ">
          <PriceSection />
          <Gallery />
          <Configuration />
          <Amenities />
          <PropertyDescription />
        </div>
        <div
          style={{
            width: "29%",
          }}
          className="w-3/12 h-auto  relative"
        >
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsSection;
