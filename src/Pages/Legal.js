import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Legal/Banner";
import Form from "../Components/PagesComponents/Legal/Form";
import Howitworks from "../Components/PagesComponents/Legal/Howitworks";
import Services from "../Components/PagesComponents/Legal/Services";

const Legal = () => {
  return (
    <Layout>
      <Banner />
      <Form />
      <Services />
      <Howitworks />
    </Layout>
  );
};

export default Legal;
