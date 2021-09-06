import React from "react";
import Routes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Awaasonline - Buy, Sell, Rent Property In Panipat</title>
        <meta name="description" content="" />
      </Helmet>
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
