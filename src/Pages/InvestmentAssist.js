import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/InvestmentAssist/Banner";
import Call from "../Components/PagesComponents/InvestmentAssist/Call";
import Faq from "../Components/PagesComponents/InvestmentAssist/Faq";
import Features from "../Components/PagesComponents/InvestmentAssist/Features";
import HowItWorks from "../Components/PagesComponents/InvestmentAssist/HowItWorks";
import IvestorsWords from "../Components/PagesComponents/InvestmentAssist/IvestorsWords";
import Opportunities from "../Components/PagesComponents/InvestmentAssist/Opportunities";
const InvestmentAssist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <Features />
      <Opportunities />
      <IvestorsWords />
      <HowItWorks />
      <Faq />
      <Call />
    </Layout>
  );
};

export default InvestmentAssist;
