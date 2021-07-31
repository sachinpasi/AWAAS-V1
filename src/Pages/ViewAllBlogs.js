import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllBlogs/Banner";
import BlogList from "../Components/PagesComponents/ViewAllBlogs/BlogList";

const ViewAllBlogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <BlogList />
    </Layout>
  );
};

export default ViewAllBlogs;
