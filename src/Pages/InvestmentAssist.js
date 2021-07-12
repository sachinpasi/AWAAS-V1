import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/InvestmentAssist/Banner";
import Faq from "../Components/PagesComponents/InvestmentAssist/Faq";
import HowItWorks from "../Components/PagesComponents/InvestmentAssist/HowItWorks";
const InvestmentAssist = () => {
  return (
    <Layout>
      <Banner />
      <HowItWorks />
      <Faq />
    </Layout>
  );
};

export default InvestmentAssist;
