import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../API";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/News/Banner";
import NewsData from "../Components/PagesComponents/News/NewsData";
import { Helmet } from "react-helmet";

const NewsDetails = () => {
  const [ArticleData, setArticleData] = useState();
  const [Title, setTitle] = useState(
    "Awaasonline - Buy, Sell, Rent Property In Panipat"
  );

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
  useEffect(() => {
    if (ArticleData) {
      setTitle(`${ArticleData?.title} `);
    }
  }, [ArticleData]);

  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>{Title}</title>
        )
        <meta name="description" content={ArticleData?.description} />
      </Helmet>
      <Banner />
      <NewsData ArticleData={ArticleData} />
    </Layout>
  );
};

export default NewsDetails;
