import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllBlogs/Banner";
import BlogList from "../Components/PagesComponents/ViewAllBlogs/BlogList";
import Loader from "../Components/Preloader/Loader";
import { Helmet } from "react-helmet";

const ViewAllBlogs = () => {
  const [isLoading, setisLoading] = useState(true);
  // eslint-disable-next-line
  const [Title, setTitle] = useState("Blogs | Awaasonline");

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setisLoading(false);
    }, [1000]);
  }, []);
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>{Title}</title>
        )
        <meta name="description" content="" />
      </Helmet>
      {isLoading && <Loader />}
      <Banner />
      <BlogList />
    </Layout>
  );
};

export default ViewAllBlogs;
