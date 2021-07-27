import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../API";

const BlogList = () => {
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
    <div className="w-full h-full py-8 ">
      <div className="customContainer grid grid-cols-2 gap-10">
        {ArticlesList.map((item) => (
          <div
            key={item.id}
            style={{
              height: "464px",
            }}
            className="w-full h-400px flex flex-col justify-between items-center"
          >
            {console.log(item)}
            <div className="relative w-full h-72">
              <img
                className="w-full h-full object-cover"
                src={item?.img}
                alt=""
              />
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.1)",
                }}
                className="w-full h-full absolute top-0"
              ></div>
            </div>
            <div className="w-full h-44 bg-textbg">
              <div className="relative p-5 ">
                <div
                  style={{
                    borderBottom: "1px solid #7070702E",
                  }}
                  className="flex justify-between items-center  pb-4"
                >
                  <div className="flex flex-col items-start">
                    <p
                      style={{ lineHeight: "22px" }}
                      className="text-2xl font-semibold "
                    >
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start">
                  <p className=" text-lightgray leading-6 line-clamp-2 w-9/12">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between w-full py-2 ">
                    <p className="text-sm text-darkgray pt-2 tracking-tight">
                      Posted By {item.author_name}
                    </p>
                    <Link
                      className="bg-blue py-2 px-8 text-white font-medium tracking-tight"
                      to={`article/${item.bid}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
