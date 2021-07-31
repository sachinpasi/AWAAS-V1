import React, { useEffect, useState } from "react";

import HomeNav from "../Components/PagesComponents/Homepage/HomeNav";
import Banner from "../Components/PagesComponents/Homepage/Banner";
import Projects from "../Components/PagesComponents/Homepage/Projects/Projects";
import PropertySale from "../Components/PagesComponents/Homepage/PropertySale/PropertySale";
import Ad from "../Components/PagesComponents/Homepage/Ad";
import PropertyRent from "../Components/PagesComponents/Homepage/PropertyRent/PropertyRent";
import Testimonial from "../Components/PagesComponents/Homepage/Testimonial";
import Articles from "../Components/PagesComponents/Homepage/Articles";
import Footer from "../Components/Layout/Footer";
import PreloaderStart from "../Components/Preloader/PreloaderStart";
import CookieBox from "../Components/Common/CookieBox";

const Homepage = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PreloaderStart isLoading={isLoading} />
      <HomeNav />
      <Banner setisLoading={setisLoading} />
      <Projects Title="Projects In Panipat" />
      <PropertySale />
      {/* <Ad /> */}
      <PropertyRent />
      <Testimonial />
      <Articles />
      <Footer />
      <CookieBox isLoading={isLoading} />
    </>
  );
};

export default Homepage;
