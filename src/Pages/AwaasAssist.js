import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/AwaasAssist/Banner";
import Faq from "../Components/PagesComponents/AwaasAssist/Faq";
import FeatureSection from "../Components/PagesComponents/AwaasAssist/FeatureSection";
const AwaasAssist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Banner />
      <FeatureSection />
      <Faq />
    </Layout>
  );
};

export default AwaasAssist;
