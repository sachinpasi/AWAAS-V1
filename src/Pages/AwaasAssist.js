import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/AwaasAssist/Banner";
import Faq from "../Components/PagesComponents/AwaasAssist/Faq";
import FeatureSection from "../Components/PagesComponents/AwaasAssist/FeatureSection";
const AwaasAssist = () => {
  return (
    <Layout>
      <Banner />
      <FeatureSection />
      <Faq />
    </Layout>
  );
};

export default AwaasAssist;
