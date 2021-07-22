import React from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";
const Data = ({ ArticleData }) => {
  return (
    <div className="w-65percent  bg-white rounded-lg shadow-lg  p-6 flex flex-col items-start my-8">
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
  );
};

export default Data;
