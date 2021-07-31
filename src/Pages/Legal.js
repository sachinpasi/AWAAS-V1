import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Legal/Banner";
import Form from "../Components/PagesComponents/Legal/Form";
import Howitworks from "../Components/PagesComponents/Legal/Howitworks";
import Services from "../Components/PagesComponents/Legal/Services";

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
