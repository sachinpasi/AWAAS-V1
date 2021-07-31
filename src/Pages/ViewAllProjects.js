import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllProjects/Banner";
import ProjectList from "../Components/PagesComponents/ViewAllProjects/ProjectList";

const ViewAllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <ProjectList />
    </Layout>
  );
};

export default ViewAllProjects;
