import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import moment from "moment";

import Header from "../../Common/Header";
import { useState } from "react";
import axios from "axios";
import { API } from "../../../API";
import { useEffect } from "react";

const Articles = () => {
  const [ArticlesList, setArticlesList] = useState([]);

  const FetchArticlesList = async () => {
    const res = await axios.get(`${API}/blogs/list`);
    setArticlesList(res.data.data);
  };

  useEffect(() => {
    FetchArticlesList();
  }, []);

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

  return (
    <section className="w-full h-full bg-textbg py-10">
      <div className="w-80vw mx-auto hidden lg:grid">
        <Header Title="Real Estate News / Articles for Panipat" hidden />
        <div className="w-full h-full my-8 grid grid-cols-4 gap-4">
          {ArticlesList.map((item) => (
            <div key={item.bid} className="w-full h-full ">
              <div
                style={{
                  height: "200px",
                }}
                className="w-full  relative"
              >
                <img
                  className="object-cover w-full h-full"
                  src={item.img}
                  alt="banner_img"
                />
                <div className="absolute top-4 left-4  w-14 h-14 flex flex-col bg-blue justify-center items-center text-white">
                  <h6 className="text-xl font-bold">
                    {getDate(item.created_at)}
                  </h6>
                  <h6 className="text-xs font-bold">
                    {getMonthYear(item.created_at)}
                  </h6>
                </div>
              </div>
              <div
                style={{ height: "200px" }}
                className="w-11/12 mx-auto  flex flex-col items-start justify-between px-4 py-1 bg-white"
              >
                <span
                  style={{
                    borderBottom: "1px solid #7070702E",
                  }}
                  className="py-1 w-full text-lg text-darkgray "
                >
                  By<span className="text-blue pl-1">admin</span>
                </span>
                <h3 className="text-xl tracking-tight font-semibold py-2 ">
                  {item.title}
                </h3>
                <p className="text-xs text-darkgray  line-clamp-4">
                  {item.description}
                </p>
                <Link
                  className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                  to={`article/${item.bid}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full py-4">
          <Link
            to="/blogs"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More...
          </Link>
        </div>
      </div>

      <div className="w-90vw mx-auto lg:hidden">
        <Header Title="Real Estate News / Articles for Panipat" />

        {ArticlesList?.length !== 0 ? (
          <div className="w-full h-full my-8 ">
            <OwlCarousel loop items={1} nav={true}>
              {ArticlesList.map((item) => (
                <div key={item.bid} className="w-full h-full ">
                  <div
                    style={{
                      height: "200px",
                    }}
                    className="w-full  relative"
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={item.img}
                      alt="banner_img"
                    />
                    <div className="absolute top-4 left-4  w-14 h-14 flex flex-col bg-blue justify-center items-center text-white">
                      <h6 className="text-xl font-bold">
                        {getDate(item.created_at)}
                      </h6>
                      <h6 className="text-xs font-bold">
                        {getMonthYear(item.created_at)}
                      </h6>
                    </div>
                  </div>
                  <div
                    style={{ height: "200px" }}
                    className="w-11/12 mx-auto  flex flex-col items-start justify-between px-4 py-1 bg-white"
                  >
                    <span
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="py-1 w-full text-lg text-darkgray "
                    >
                      By<span className="text-blue pl-1">admin</span>
                    </span>
                    <h3 className="text-xl tracking-tight font-semibold py-2 ">
                      {item.title}
                    </h3>
                    <p className="text-xs text-darkgray  line-clamp-4">
                      {item.description}
                    </p>
                    <Link
                      className="flex justify-center items-center w-36 font-medium tracking-tight  px-5 py-1.5 my-2 text-white bg-blue"
                      to={`article/${item.bid}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        ) : (
          <p>Loading..</p>
        )}
        <div className="flex justify-end w-full py-4">
          <Link
            to="/blogs"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
