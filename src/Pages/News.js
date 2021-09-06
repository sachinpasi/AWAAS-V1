import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import List from "../Components/PagesComponents/News/List";
import Loader from "../Components/Preloader/Loader";
import { Helmet } from "react-helmet";

const News = () => {
  const [isLoading, setisLoading] = useState(true);
  const [Title, setTitle] = useState(
    "Panipat Real Estate Updates | Awaasonline"
  );

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
      <List />
    </Layout>
  );
};

export default News;
