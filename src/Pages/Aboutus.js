import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/About/Banner";
import Director from "../Components/PagesComponents/About/Director";
import Intro from "../Components/PagesComponents/About/Intro";

import Values from "../Components/PagesComponents/About/Values";
const Aboutus = () => {
  return (
    <Layout>
      <Banner />
      <Intro />
      <Values />
      <Director />
    </Layout>
  );
};

export default Aboutus;
