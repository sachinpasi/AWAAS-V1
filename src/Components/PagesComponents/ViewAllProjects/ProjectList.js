import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../API";

const ProjectList = () => {
  const [ProjectList, setProjectList] = useState([]);

  const FetchProjectList = async () => {
    const res = await axios.get(`${API}/projects/list/0`);

    if (res.status === 200) {
      setProjectList(res.data.data);
    }
  };

  console.log(ProjectList);

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchProjectList();
  }, []);
  return (
    <div className="w-full h-full py-8 ">
      <div className="customContainer grid grid-cols-2 gap-10">
        {ProjectList.map((item) => (
          <div
            key={item.id}
            style={{
              height: "448px",
            }}
            className="w-full h-400px flex flex-col justify-between items-center"
          >
            <div className="relative h-72">
              <img
                className="w-full h-full object-cover"
                src={item?.banner_image_path}
                alt=""
              />
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.1)",
                }}
                className="w-full h-full absolute top-0"
              ></div>
              <div className="w-40 absolute top-4 left-4 ">
                <img
                  src="assets/images/homepage/projects/approved.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-40 bg-textbg">
              <div className="relative p-4 ">
                <div
                  style={{
                    borderBottom: "1px solid #7070702E",
                  }}
                  className="flex justify-between items-center  pb-2"
                >
                  <div className="flex flex-col items-start">
                    <p
                      style={{ lineHeight: "22px" }}
                      className="text-2xl font-semibold "
                    >
                      {item.title}
                    </p>
                    <p
                      style={{ lineHeight: "25px" }}
                      className="text-base text-lightgray"
                    >
                      {item.developerName}
                    </p>
                  </div>

                  <p className="text-lg font-medium capitalize text-darkgray py-2">
                    {item.city} : {item.locality}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start">
                  <p className=" text-lightgray line-clamp-1 w-3/4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between w-full py-1 ">
                    <p className="text-sm text-darkgray pt-2 tracking-tight">
                      Marketed By {item.developerName}
                    </p>
                    <Link
                      className="bg-blue py-2 px-8 text-white font-medium tracking-tight"
                      to={`/projects/${item.id}`}
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

export default ProjectList;
