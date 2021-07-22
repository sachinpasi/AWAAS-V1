import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Article/Banner";
import Data from "../Components/PagesComponents/Article/Data";
import Recommended from "../Components/PagesComponents/Article/Recommended";
const Article = () => {
  return (
    <Layout>
      <Banner />
      <div className="customContainer h-full">
        <div className="flex justify-between items-start ">
          <Data />
          <Recommended />
        </div>
      </div>
    </Layout>
  );
};

export default Article;
