import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Feedback/Banner";
import Customers from "../Components/PagesComponents/Feedback/Customers";
import HowDoesItWork from "../Components/PagesComponents/Feedback/HowDoesItWork";

const Feedback = () => {
  return (
    <Layout>
      <Banner />
      <HowDoesItWork />
      <Customers />
    </Layout>
  );
};

export default Feedback;
