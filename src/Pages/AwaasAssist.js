import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/AwaasAssist/Banner";
import ContactForm from "../Components/PagesComponents/AwaasAssist/ContactForm";
import Faq from "../Components/PagesComponents/AwaasAssist/Faq";
import InvestmnetAssist from "../Components/PagesComponents/AwaasAssist/InvestmnetAssist";

const AwaasAssist = () => {
  return (
    <Layout>
      <Banner />
      <InvestmnetAssist />
      <ContactForm />
      <Faq />
    </Layout>
  );
};

export default AwaasAssist;
