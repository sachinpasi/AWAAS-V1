import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllBlogs/Banner";
import BlogList from "../Components/PagesComponents/ViewAllBlogs/BlogList";

const ViewAllBlogs = () => {
  return (
    <Layout>
      <Banner />
      <BlogList />
    </Layout>
  );
};

export default ViewAllBlogs;
