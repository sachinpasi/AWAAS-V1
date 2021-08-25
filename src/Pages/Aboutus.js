import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/About/Banner";
import CustomerSatisfaction from "../Components/PagesComponents/About/CustomerSatisfaction";
import Director from "../Components/PagesComponents/About/Director";
import HowWeAchieve from "../Components/PagesComponents/About/HowWeAchieve";
import OurBeginning from "../Components/PagesComponents/About/OurBeginning";
import Loader from "../Components/Preloader/Loader";

const Aboutus = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setisLoading(false);
    }, [1000]);
  }, []);
  return (
    <Layout>
      {isLoading && <Loader />}
      <Banner />
      <OurBeginning />
      <CustomerSatisfaction />
      <HowWeAchieve />
      <Director />
    </Layout>
  );
};

export default Aboutus;
