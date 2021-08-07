import React from "react";

const loader = () => {
  return (
    <div className="w-full fixed h-screen top-0 left-0 flex justify-center items-center bg-opacity-80 z-40 bg-white">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default loader;
