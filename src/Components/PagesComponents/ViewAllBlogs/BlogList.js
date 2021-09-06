import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../API";

const BlogList = () => {
  const [ArticlesList, setArticlesList] = useState([]);
  const [selectedCategory, setselectedCategory] = useState();

  const FetchArticlesList = async () => {
    if (selectedCategory !== undefined) {
      const res = await axios.get(
        `${API}/blogs/list?category=${selectedCategory}&type=1`
      );
      setArticlesList(res.data.data);
    } else {
      const res = await axios.get(`${API}/blogs/list?type=1`);
      setArticlesList(res.data.data);
    }
  };

  useEffect(() => {
    FetchArticlesList();
  }, [selectedCategory]);
  return (
    <div className="w-full h-full py-8 ">
      <div className="lg:w-80vw w-90vw mx-auto mb-8">
        <div className="flex  items-center scrollbar-hide overflow-y-scroll">
          <div
            onClick={() => setselectedCategory(1)}
            className={` ${
              selectedCategory === 1
                ? "bg-green border-green"
                : "bg-white border-lightgray"
            }  px-5 py-1  rounded-full border-1 cursor-pointer mr-4 `}
          >
            <p
              className={`${
                selectedCategory === 1 ? "text-white" : " text-black"
              } text-lg`}
            >
              News
            </p>
          </div>
          <div
            onClick={() => setselectedCategory(2)}
            className={` ${
              selectedCategory === 2
                ? "bg-green border-green"
                : "bg-white border-lightgray"
            }  px-5 py-1  rounded-full border-1 cursor-pointer mr-4 `}
          >
            <p
              className={`${
                selectedCategory === 2 ? "text-white" : " text-black"
              } text-lg`}
            >
              Investment
            </p>
          </div>
          <div
            onClick={() => setselectedCategory(3)}
            className={` ${
              selectedCategory === 3
                ? "bg-green border-green"
                : "bg-white border-lightgray"
            }  px-5 py-1  rounded-full border-1 cursor-pointer mr-4 `}
          >
            <p
              className={`${
                selectedCategory === 3 ? "text-white" : " text-black"
              } text-lg`}
            >
              Homeloan
            </p>
          </div>
          <div
            onClick={() => setselectedCategory(4)}
            className={` ${
              selectedCategory === 4
                ? "bg-green border-green"
                : "bg-white border-lightgray"
            }  px-5 py-1  rounded-full border-1 cursor-pointer mr-4 `}
          >
            <p
              className={`${
                selectedCategory === 4 ? "text-white" : " text-black"
              } text-lg`}
            >
              Vastu
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-80vw w-90vw mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10 mb-12">
        {ArticlesList.map((item) => (
          <div
            key={item.id}
            style={
              {
                // height: "384px",
              }
            }
            className="w-full h-400px flex flex-col justify-between items-center"
          >
            {console.log(item)}
            <div className="relative w-full h-52">
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
            <div className="w-full lg:h-48 bg-textbg">
              <div className="relative p-5 h-full ">
                <div
                  style={{
                    borderBottom: "1px solid #7070702E",
                  }}
                  className="flex justify-between items-center  pb-4"
                >
                  <div className="flex flex-col items-start">
                    <p
                      style={{ lineHeight: "22px" }}
                      className="text-2xl font-semibold line-clamp-2 "
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
