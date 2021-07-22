import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Article/Banner";
import Data from "../Components/PagesComponents/Article/Data";
import Recommended from "../Components/PagesComponents/Article/Recommended";
import axios from "axios";
import { API } from "../API";
import { useParams } from "react-router-dom";
const Article = () => {
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
      <Banner ArticleData={ArticleData} />
      <div className=" h-full bg-textbg">
        <div className=" customContainer flex justify-between items-start ">
          <Data ArticleData={ArticleData} />
          <Recommended />
        </div>
      </div>
    </Layout>
  );
};

export default Article;
