import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import List from "../Components/PagesComponents/News/List";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <List />
    </Layout>
  );
};

export default News;
