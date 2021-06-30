import React, { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ProjectDetails/Banner";
import ProjectDetailsSection from "../Components/PagesComponents/ProjectDetails/ProjectDetailsSection/ProjectDetailsSection";
import Projects from "../Components/PagesComponents/Homepage/Projects/Projects";

import axios from "axios";
import { API } from "../API";
import { useState } from "react";

const ProjectDetails = () => {
  const [Data, setData] = useState();

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/id/23`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <Layout>
      <Banner Data={Data} />
      <ProjectDetailsSection Data={Data} />
      <Projects />
    </Layout>
  );
};

export default ProjectDetails;
