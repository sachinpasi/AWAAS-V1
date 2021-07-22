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
        background: `url(/assets/images/articles/bg.png)`,
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full "
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
        }}
        className="w-full h-full"
      >
        <div className="customContainer flex flex-col items-start justify-center h-full">
          <p className="text-5xl font-semibold text-white w-2/4">
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
