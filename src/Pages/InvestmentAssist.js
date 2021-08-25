import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/InvestmentAssist/Banner";
import Call from "../Components/PagesComponents/InvestmentAssist/Call";
import Faq from "../Components/PagesComponents/InvestmentAssist/Faq";
import Features from "../Components/PagesComponents/InvestmentAssist/Features";
import HowItWorks from "../Components/PagesComponents/InvestmentAssist/HowItWorks";
import IvestorsWords from "../Components/PagesComponents/InvestmentAssist/IvestorsWords";
import Opportunities from "../Components/PagesComponents/InvestmentAssist/Opportunities";
import RecommendedBlogs from "../Components/PagesComponents/InvestmentAssist/RecommendedBlogs";
import Loader from "../Components/Preloader/Loader";

const InvestmentAssist = () => {
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
      <Features />
      <Opportunities />
      <IvestorsWords />
      <HowItWorks />
      <RecommendedBlogs />
      <Faq />
      <Call />
    </Layout>
  );
};

export default InvestmentAssist;
