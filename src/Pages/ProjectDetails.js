import React, { useEffect, useState } from "react";

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
import Loader from "../Components/Preloader/Loader";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState();

  const { id } = useParams();

  const FetchData = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/projects/id/${id}`);
    // console.log(res.data.data);

    if (res.status === 200) {
      dispatch(
        SET_PROJECT_DETAILS({
          Data: res.data.data,
        })
      );
      setisLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(REMOVE_PROJECT_DETAILS());
    };
    // eslint-disable-next-line
  }, [id]);
  return (
    <Layout>
      <Banner />
      {isLoading && <Loader />}
      <ProjectDetailsSection />
      <Projects Title="Similar Project In Panipat" />
    </Layout>
  );
};

export default ProjectDetails;
