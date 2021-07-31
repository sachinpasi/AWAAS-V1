import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";

import "./Project.css";
import { API } from "../../../../API";
import Header from "../../../Common/Header";

const Projects = ({ Title }) => {
  const [ProjectList, setProjectList] = useState([]);

  const FetchProjectList = async () => {
    const res = await axios.get(`${API}/projects/list`);

    if (res.status === 200) {
      setProjectList(res.data.data);
    }
  };

  console.log(ProjectList);

  useEffect(() => {
    FetchProjectList();
  }, []);
  return (
    <section className="w-full h-full mt-40">
      <div className="customContainer ">
        <div className="w-full flex flex-col justify-between items-start ">
          <Header Title={Title} />
        </div>
        <div className="w-full h-auto flex justify-center items-center mt-10">
          {ProjectList.length !== 0 ? (
            <OwlCarousel loop items={3} nav={true} margin={20}>
              {ProjectList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    height: "441px",
                  }}
                  className="w-full h-full flex flex-col justify-between items-center"
                >
                  <Link to={`/projects/${item.id}`} className="relative h-64">
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
                        src="/assets/images/homepage/projects/approved.svg"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="w-full h-48 bg-textbg">
                    <div className="relative p-4 ">
                      <div
                        style={{
                          borderBottom: "1px solid #7070702E",
                        }}
                        className="flex flex-col justify-between items-start  pb-2"
                      >
                        <p
                          style={{ lineHeight: "22px" }}
                          className="text-xl font-semibold "
                        >
                          {item.title}
                        </p>
                        <p
                          style={{ lineHeight: "22px" }}
                          className="text-base text-lightgray"
                        >
                          {item.developerName}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between items-start">
                        <p className="text-base font-medium capitalize text-darkgray py-2">
                          {item.city} : {item.locality}
                        </p>

                        <Link
                          className="bg-blue py-1 px-4 text-white font-medium tracking-tight"
                          to={`/projects/${item.id}`}
                        >
                          View Details
                        </Link>

                        <p className="text-sm text-darkgray pt-2 tracking-tight">
                          Marketed By {item.developerName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <p>Loading..</p>
          )}
        </div>
        <div className="flex justify-end w-full mb-10">
          <Link
            to="/search/projects"
            className="text-xl font-medium hover:underline text-blue px-8 py-2"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
