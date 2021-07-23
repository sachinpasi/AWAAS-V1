import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Vastu/Banner";
import Consultant from "../Components/PagesComponents/Vastu/Consultant";
import Contact from "../Components/PagesComponents/Vastu/Contact";
import HowItWorks from "../Components/PagesComponents/Vastu/HowItWorks";
const Vastu = () => {
  return (
    <Layout>
      <Banner />
      <Contact />
      <Consultant />
      <HowItWorks />
    </Layout>
  );
};

export default Vastu;
