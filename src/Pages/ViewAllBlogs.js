import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllBlogs/Banner";
import BlogList from "../Components/PagesComponents/ViewAllBlogs/BlogList";
import Loader from "../Components/Preloader/Loader";

const ViewAllBlogs = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setisLoading(false);
    }, [1000]);
  }, []);
  return (
    <Layout>
      {isLoading && <Loader />}
      <Banner />
      <BlogList />
    </Layout>
  );
};

export default ViewAllBlogs;
