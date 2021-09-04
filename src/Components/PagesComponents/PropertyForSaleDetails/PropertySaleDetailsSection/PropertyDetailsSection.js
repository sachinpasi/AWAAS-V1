import React from "react";
import PriceSection from "./PriceSection";

import Sidebar from "./Sidebar";
import Gallery from "./Gallery";
import Configuration from "./Configuration";

import PropertyDescription from "./PropertyDescription";
import Amenities from "./Amenities";

const PropertyDetailsSection = ({
  setisAnyThingUpdated,
  isAnyThingUpdated,
}) => {
  return (
    <section className="w-full h-full flex justify-between my-24">
      <div className=" w-90vw lg:w-80vw mx-auto h-full flex lg:flex-row flex-col justify-between ">
        <div className=" h-full lg:w-69percent w-full ">
          <PriceSection
            setisAnyThingUpdated={setisAnyThingUpdated}
            isAnyThingUpdated={isAnyThingUpdated}
          />
          <Gallery
            setisAnyThingUpdated={setisAnyThingUpdated}
            isAnyThingUpdated={isAnyThingUpdated}
          />
          <Configuration
            setisAnyThingUpdated={setisAnyThingUpdated}
            isAnyThingUpdated={isAnyThingUpdated}
          />
          <Amenities
            setisAnyThingUpdated={setisAnyThingUpdated}
            isAnyThingUpdated={isAnyThingUpdated}
          />
          <PropertyDescription
            setisAnyThingUpdated={setisAnyThingUpdated}
            isAnyThingUpdated={isAnyThingUpdated}
          />
        </div>
        <div className="lg:w-29percent w-full  h-auto  relative">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsSection;
