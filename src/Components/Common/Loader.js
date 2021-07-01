import React from "react";
import Lottie from "react-lottie";
import loaderData from "../Common/LoaderData.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-md">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={"10rem"}
        width={"10rem"}
      />
    </div>
  );
}

export default Loader;
