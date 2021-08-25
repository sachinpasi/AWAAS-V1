import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Vastu/Banner";
import Consultant from "../Components/PagesComponents/Vastu/Consultant";
import Contact from "../Components/PagesComponents/Vastu/Contact";
import HowItWorks from "../Components/PagesComponents/Vastu/HowItWorks";
import Loader from "../Components/Preloader/Loader";
import RecommendedBlogs from "../Components/PagesComponents/Vastu/RecommendedBlogs";

const Vastu = () => {
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
      <Contact />
      <Consultant />
      <HowItWorks />
      <RecommendedBlogs />
    </Layout>
  );
};

export default Vastu;
