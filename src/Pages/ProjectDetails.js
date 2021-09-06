import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import axios from "axios";
import { Helmet } from "react-helmet";

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
  const [Data, setData] = useState();
  const [Title, setTitle] = useState(
    "Awaasonline - Buy, Sell, Rent Property In Panipat"
  );

  const { id } = useParams();

  const FetchData = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/projects/id/${id}`);
    // console.log(res.data.data);

    if (res.status === 200) {
      setData(res.data.data);
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
  useEffect(() => {
    if (Data) {
      setTitle(`${Data?.parent?.title} | ${Data?.parent?.locality}
              ${Data?.parent?.city}`);
    }
  }, [Data]);
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>{Title}</title>
        )
        <meta name="description" content={Data?.parent?.description} />
      </Helmet>
      <Banner />
      {isLoading && <Loader />}
      <ProjectDetailsSection />
      <Projects Title="Similar Project In Panipat" />
    </Layout>
  );
};

export default ProjectDetails;
