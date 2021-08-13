import React from "react";
import moment from "moment";
const Banner = ({ ArticleData }) => {
  const getDate = (assignDate) => {
    if (assignDate === undefined) return "";
    let date;
    date = moment(assignDate).format("MMMM D, YYYY");
    return date;
  };
  return (
    <section
      style={{
        background: `url(${ArticleData?.img})`,
        height: "350px",
      }}
      className="w-full  bg-cover-norepeat  "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-full"
      >
        <div className="lg:w-80vw w-90vw mx-auto pt-8 flex flex-col lg:items-start items-center justify-center h-full">
          <p className="lg:text-5xl text-2xl font-semibold text-white lg:w-2/4">
            {ArticleData?.title}
          </p>
          <p className="text-white my-2 text-lg">
            {getDate(ArticleData?.created_at)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
