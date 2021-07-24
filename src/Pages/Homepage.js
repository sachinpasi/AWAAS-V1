import React from "react";

import HomeNav from "../Components/PagesComponents/Homepage/HomeNav";
import Banner from "../Components/PagesComponents/Homepage/Banner";
import Projects from "../Components/PagesComponents/Homepage/Projects/Projects";
import PropertySale from "../Components/PagesComponents/Homepage/PropertySale/PropertySale";
import Ad from "../Components/PagesComponents/Homepage/Ad";
import PropertyRent from "../Components/PagesComponents/Homepage/PropertyRent/PropertyRent";
import Testimonial from "../Components/PagesComponents/Homepage/Testimonial";
import Articles from "../Components/PagesComponents/Homepage/Articles";
import Footer from "../Components/Layout/Footer";

const Homepage = () => {
  return (
    <>
      <HomeNav />
      <Banner />
      <Projects Title="Projects In Panipat" />
      <PropertySale />
      {/* <Ad /> */}
      <PropertyRent />
      <Testimonial />
      <Articles />
      <Footer />
    </>
  );
};

export default Homepage;
