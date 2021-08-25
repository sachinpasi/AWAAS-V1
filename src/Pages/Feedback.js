import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Feedback/Banner";
import Customers from "../Components/PagesComponents/Feedback/Customers";
import HowDoesItWork from "../Components/PagesComponents/Feedback/HowDoesItWork";
import Loader from "../Components/Preloader/Loader";

const Feedback = () => {
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
      <HowDoesItWork />
      <Customers />
    </Layout>
  );
};

export default Feedback;
