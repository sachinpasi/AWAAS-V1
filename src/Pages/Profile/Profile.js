import React from "react";
import { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <main className=" hidden w-full min-h-screen bg-white relative lg:flex items-center justify-between ">
        <Sidebar />
        <div className="w-4/5 h-full p-8 -mt-28"></div>
      </main>

      <main className=" lg:hidden w-full min-h-screen bg-white relative  items-center justify-between pt-16 pb-12 ">
        <Sidebar />
        <div className="w-4/5 h-full p-8 -mt-28"></div>
      </main>
    </Layout>
  );
};

export default Profile;
