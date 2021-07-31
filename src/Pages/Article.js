import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/Article/Banner";
import Data from "../Components/PagesComponents/Article/Data";
import axios from "axios";
import { API } from "../API";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
const Article = () => {
  const [ArticleData, setArticleData] = useState();
  const [ArticlesList, setArticlesList] = useState([]);

  const { id } = useParams();

  const FetchData = async () => {
    const res = await axios.get(`${API}/blogs/id/${id}`);
    console.log(res);
    setArticleData(res.data.data);
  };

  const FetchArticlesList = async () => {
    const res = await axios.get(`${API}/blogs/list`);
    setArticlesList(res.data.data);
    console.log(res.data.data);
  };

  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format("D");
    return date;
  };

  const getMonthYear = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format("MMM YYYY");
    return date;
  };

  useEffect(() => {
    FetchArticlesList();
  }, []);

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
          <div className="w-2/6  ml-8  flex flex-col items-start my-8">
            <p className="text-2xl font-semibold mb-4">
              Recent Real Estate Updates
            </p>
            {ArticlesList.map((item) => (
              <Link
                to={`/news/${item.bid}`}
                className=" flex justify-between items-center h-28 bg-white shadow-sm my-2"
              >
                <div className="h-full w-24 bg-extralightgray flex flex-col py-4  relative">
                  <div className="w-full h-3/4 flex justify-center items-center text-blue font-bold text-2xl">
                    {getDate(item?.created_at)}
                  </div>
                  <div className="w-full bg-blue absolute bottom-0 py-1 flex justify-center items-center uppercase text-white font-bold text-base">
                    {getMonthYear(item?.created_at)}
                  </div>
                </div>

                <div className="w-11/12 p-4 flex flex-col items-start text-darkgray">
                  <p className="text-xl font-medium text-darkgray py-2">
                    {item.title}
                  </p>
                  <p className="text-darkgray line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
