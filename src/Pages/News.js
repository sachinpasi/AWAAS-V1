import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import List from "../Components/PagesComponents/News/List";

const News = () => {
  return (
    <Layout>
      <Banner />
      <List />
    </Layout>
  );
};

export default News;
