import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

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
    console.log(res.data.data);
  };

  useEffect(() => {
    FetchArticlesList();
  }, []);

  return (
    <section className="w-full h-full bg-textbg py-10">
      <div className="customContainer">
        <Header Title="Real Estate News / Articles for Panipat" />
        <div className="w-full h-full my-8">
          {ArticlesList.length !== 0 ? (
            <OwlCarousel items={2} loop nav={true} margin={20}>
              {ArticlesList.slice(4).map((item) => (
                <div key={item.bid} className="w-full h-full ">
                  <div className="w-full h-3/5 relative">
                    <img src="assets/images/homepage/articles/1.png" alt="" />
                    <div className="absolute top-4 left-4  w-14 h-14 flex flex-col bg-blue justify-center items-center text-white">
                      <p className="text-xl font-bold">02</p>
                      <p className="text-xs font-bold">JUNE</p>
                    </div>
                  </div>
                  <div className="w-3/4 mx-auto h-2/5 flex flex-col items-start justify-center px-4 py-2 bg-white">
                    <p
                      style={{
                        borderBottom: "1px solid #7070702E",
                      }}
                      className="py-2 w-full text-lg text-darkgray "
                    >
                      By<span className="text-blue pl-1">admin</span>
                    </p>
                    <p className="text-xl tracking-tight font-semibold py-3 ">
                      {item.title}
                    </p>
                    <p className="text-xs text-darkgray pb-4">
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
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
