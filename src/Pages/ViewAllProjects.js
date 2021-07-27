import React from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ViewAllProjects/Banner";
import ProjectList from "../Components/PagesComponents/ViewAllProjects/ProjectList";

const ViewAllProjects = () => {
  return (
    <Layout>
      <Banner />
      <ProjectList />
    </Layout>
  );
};

export default ViewAllProjects;
