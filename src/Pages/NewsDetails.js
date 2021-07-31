import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../API";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import NewsData from "../Components/PagesComponents/News/NewsData";

const NewsDetails = () => {
  const [ArticleData, setArticleData] = useState();

  const { id } = useParams();

  const FetchData = async () => {
    const res = await axios.get(`${API}/blogs/id/${id}`);
    console.log(res);
    setArticleData(res.data.data);
  };

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Layout>
      <Banner />
      <NewsData ArticleData={ArticleData} />
    </Layout>
  );
};

export default NewsDetails;
