import React from "react";

const Intro = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center ">
      <div className="customContainer flex flex-col justify-center items-start py-4 pt-10 ">
        <p className="text-4xl font-medium text-darkgray">About Awaasonline</p>
        <p className="text-lg text-justify my-4 text-darkgray">
          Awaaonline pvt ltd came into existence in 2020, as an outcome of
          expanding a proud and successful journey engraved by M/s. Real Height
          Developers Pvt. Ltd. With quality, innovation, and trust as
          cornerstones, Awaasonline engages in developing diversified projects
          like group housing, colony developer and commercial projects. We
          believe that Quality, timely delivery and Client Satisfaction, is a
          trident of success. Hence we live by this motto.
        </p>
      </div>
      <div className="customContainer flex flex-col justify-center items-center py-4">
        <div className="flex flex-col items-start my-4">
          <p className="text-4xl font-medium text-darkgray">Our Mission</p>
          <p className="text-lg text-darkgray my-5 text-justify">
            AwaasOnline’s mission is to modernize and progress the experience of
            owning real estate by cultivating a spirit of collaboration,
            innovation, and integrity. Real Estate is a very healthy ground to
            flourish. Realising this tremendous opportunity in this area, we
            have launched AwaasOnline to provide complete real estate solutions
            for families, corporates, and small and medium entrepreneurs. Our
            objective is very clear: Offer the best in class real estate
            Platform that helps our clients to buy, sell, rent or lease
            properties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
