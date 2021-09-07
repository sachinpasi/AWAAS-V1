import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";
import Articles from "../Homepage/Articles";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../API";
import OwlCarousel from "react-owl-carousel";
const Data = ({ ArticleData }) => {
  const [ArticlesList, setArticlesList] = useState([]);

  const FetchArticlesList = async () => {
    const res = await axios.get(`${API}/blogs/list`);
    setArticlesList(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    FetchArticlesList();
  }, []);

  return (
    <div className="lg:w-65percent w-full flex flex-col">
      <div className="w-full bg-white rounded-lg shadow-lg  p-6 flex flex-col items-start my-8">
        <div className="w-full border-b-2 border-dashed flex justify-end items-center pb-6">
          <p className="mx-2 text-lg text-widgetborder">Share</p>
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue mx-2 cursor-pointer">
            <FaFacebook className="text-2xl text-white" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue mx-2 cursor-pointer">
            <FaGoogle className="text-2xl text-white" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue mx-2 cursor-pointer">
            <FaTwitter className="text-2xl text-white" />
          </div>
        </div>

        <div className="w-11/12 my-4">
          {ReactHtmlParser(ArticleData?.content)}
        </div>
      </div>
      <h3 className="text-3xl font-medium">Recommened Blogs</h3>
      <div className="w-full grid gap-4 lg:grid-cols-3 grid-cols-1 h-auto my-8">
        {ArticlesList.slice(0, 3).map((item) => (
          <div
            key={item.bid}
            className="w-full h-full flex justify-center items-center flex-col "
          >
            <div
              style={{
                height: "200px",
              }}
              className="w-full h-full  relative"
            >
              <img
                className="object-cover w-full h-full"
                src={item.img}
                alt=""
              />
              <div className="absolute top-4 left-4  w-14 h-14 flex flex-col bg-blue justify-center items-center text-white">
                <p className="text-xl font-bold">02</p>
                <p className="text-xs font-bold">JUNE</p>
              </div>
            </div>
            <div
              style={{ height: "200px" }}
              className="w-11/12 mx-auto  flex flex-col items-start justify-between px-4 py-1 bg-white"
            >
              <p
                style={{
                  borderBottom: "1px solid #7070702E",
                }}
                className="py-1 w-full text-lg text-darkgray "
              >
                By<span className="text-blue pl-1">admin</span>
              </p>
              <p className="text-xl tracking-tight font-semibold py-2 ">
                {item.title}
              </p>
              <p className="text-xs text-darkgray  line-clamp-4">
                {item.description}
              </p>
              <Link
                className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                to={`/article/${item.bid}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
