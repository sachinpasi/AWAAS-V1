import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, isBookmarkChanged }) => {
  return (
    <>
      <Navbar isBookmarkChanged={isBookmarkChanged} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
