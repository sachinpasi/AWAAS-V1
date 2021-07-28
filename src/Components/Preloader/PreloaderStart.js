import React from "react";

const PreloaderStart = ({ isLoading }) => {
  return (
    <main
      className={`${
        isLoading ? "" : "-translate-y-full bg-opacity-0"
      }  fixed w-full h-screen bg-white z-50 transform ease-in-out duration-1000 `}
    >
      <div className="w-full h-full flex justify-center items-center">
        <img className="zoom" src="/assets/images/logo/logo2.svg" alt="" />
      </div>
    </main>
  );
};

export default PreloaderStart;
