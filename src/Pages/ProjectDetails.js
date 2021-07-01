import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import axios from "axios";

import { API } from "../API";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/ProjectDetails/Banner";
import ProjectDetailsSection from "../Components/PagesComponents/ProjectDetails/ProjectDetailsSection/ProjectDetailsSection";
import Projects from "../Components/PagesComponents/Homepage/Projects/Projects";
import {
  SET_PROJECT_DETAILS,
  REMOVE_PROJECT_DETAILS,
} from "../Redux/_features/_ProjectDetailsSlice";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const FetchData = async () => {
    const res = await axios.get(`${API}/projects/id/${id}`);
    console.log(res.data.data);
    if (res.status === 200) {
      dispatch(
        SET_PROJECT_DETAILS({
          Data: res.data.data,
        })
      );
    }
  };

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(REMOVE_PROJECT_DETAILS());
    };
  }, []);
  return (
    <Layout>
      <Banner />
      <ProjectDetailsSection />
      <Projects />
    </Layout>
  );
};

export default ProjectDetails;
