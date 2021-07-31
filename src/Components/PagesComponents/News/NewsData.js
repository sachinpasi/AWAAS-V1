import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { API } from "../../../API";

const NewsData = ({ ArticleData }) => {
  const [ArticlesList, setArticlesList] = useState([]);
  console.log(ArticleData);

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

  const FetchArticlesList = async () => {
    const res = await axios.get(`${API}/blogs/list`);
    setArticlesList(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchArticlesList();
  }, []);

  return (
    <section className="w-full h-full  bg-textbg">
      <div className="customContainer">
        <nav className="text-black font-medium py-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/">Home</Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link className="text-gray-500" to="/news">
                Real Estate Updates
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link className="text-gray-500" to="/news"></Link>
            </li>
          </ol>
        </nav>
        <div className="w-full flex justify-between py-8">
          <div className="w-70percent h-full bg-white pb-8 shadow-sm">
            <div className="w-full h-full flex flex-col justify-evenly items-center pb-8">
              <div className="w-full flex justify-between items-center h-28 bg-white shadow-sm ">
                <div className="h-full w-28 bg-extralightgray flex flex-col py-4  relative">
                  <div className="w-full h-3/4 flex justify-center items-center text-blue font-bold text-4xl">
                    {getDate(ArticleData?.created_at)}
                  </div>
                  <div className="w-full bg-blue absolute bottom-0 py-1 flex justify-center items-center uppercase text-white font-bold text-lg">
                    {getMonthYear(ArticleData?.created_at)}
                  </div>
                </div>

                <div className="w-11/12 p-4 flex flex-col items-start text-darkgray">
                  <p className="text-3xl font-medium text-darkgray py-2">
                    {ArticleData?.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 px-12">
              <p>{ArticleData?.description}</p>
              {ReactHtmlParser(ArticleData?.content)}
            </div>
          </div>
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
    </section>
  );
};

export default NewsData;
