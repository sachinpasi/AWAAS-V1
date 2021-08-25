import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import List from "../Components/PagesComponents/News/List";
import Loader from "../Components/Preloader/Loader";

const News = () => {
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
      <List />
    </Layout>
  );
};

export default News;
