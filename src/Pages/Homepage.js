import React, { useEffect, useState } from "react";

import HomeNav from "../Components/PagesComponents/Homepage/HomeNav";
import Banner from "../Components/PagesComponents/Homepage/Banner";
import Projects from "../Components/PagesComponents/Homepage/Projects/Projects";
import PropertySale from "../Components/PagesComponents/Homepage/PropertySale/PropertySale";
// import Ad from "../Components/PagesComponents/Homepage/Ad";
import PropertyRent from "../Components/PagesComponents/Homepage/PropertyRent/PropertyRent";
import Testimonial from "../Components/PagesComponents/Homepage/Testimonial";
import Articles from "../Components/PagesComponents/Homepage/Articles";
import Footer from "../Components/Layout/Footer";
import PreloaderStart from "../Components/Preloader/PreloaderStart";
import CookieBox from "../Components/Common/CookieBox";
import MetaComponent from "../Components/Common/MetaComponent";

const Homepage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isCookieAggred, setisCookieAggred] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const x = document.cookie;

    if (x) {
      setisCookieAggred(true);
    }
  }, []);

  let SchemaData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Awaasonline",
    url: "https://www.awaasonline.com/",
    icon: "https://www.awaasonline.com/assets/images/logo/logo.svg",
    phone: "9996398965",
    email: "help@awaasonline.com",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.awaasonline.com/search?property_for=sell{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <MetaComponent jsonLd={SchemaData} />

      <PreloaderStart isLoading={isLoading} />
      <HomeNav />
      <Banner setisLoading={setisLoading} />
      <Projects Title="Projects In Panipat" />
      <PropertySale />
      <PropertyRent />
      <Testimonial />
      <Articles />
      <Footer />
      {!isCookieAggred && <CookieBox isLoading={isLoading} />}
    </>
  );
};

export default Homepage;
