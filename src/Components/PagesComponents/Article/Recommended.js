import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../API";

const Recommended = () => {
  const [BlogList, setBlogList] = useState([]);
  const FetchBlogs = async () => {
    const res = await axios.get(`${API}/blogs/list`);

    setBlogList(res.data.data);
  };

  useEffect(() => {
    FetchBlogs();
  }, []);
  return (
    <div className="w-30percent my-8 flex flex-col items-start">
      <p className="text-2xl font-medium py-4">Recommended Blogs</p>
      {BlogList.map((item) => (
        <div
          className="w-full h-auto overflow-hidden bg-white shadow-lg  my-2"
          key={item.bid}
        >
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80"
            alt=""
          />
          <div className="p-4">
            <h1 className="text-xl ">{item.title}</h1>
            <div className="flex justify-end ">
              <Link
                className="bg-blue py-2 px-8 text-white font-medium text-xl tracking-tight"
                to={`/article/${item.bid}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
