import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Legal/Banner";
import Form from "../Components/PagesComponents/Legal/Form";
import Howitworks from "../Components/PagesComponents/Legal/Howitworks";
import Services from "../Components/PagesComponents/Legal/Services";
import Loader from "../Components/Preloader/Loader";
import { Helmet } from "react-helmet";

const Legal = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setisLoading(false);
    }, [1000]);
  }, []);
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>Legal | Awaasonline</title>
        )
        <meta name="description" content="" />
      </Helmet>
      {isLoading && <Loader />}

      <Banner />
      <Form />
      <Services />
      <Howitworks />
    </Layout>
  );
};

export default Legal;
