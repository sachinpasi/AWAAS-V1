import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/About/Banner";
import CustomerSatisfaction from "../Components/PagesComponents/About/CustomerSatisfaction";
import Director from "../Components/PagesComponents/About/Director";
import Intro from "../Components/PagesComponents/About/Intro";
import OurBeginning from "../Components/PagesComponents/About/OurBeginning";

import Values from "../Components/PagesComponents/About/Values";
const Aboutus = () => {
  return (
    <Layout>
      <Banner />
      <OurBeginning />
      <CustomerSatisfaction />
    </Layout>
  );
};

export default Aboutus;
