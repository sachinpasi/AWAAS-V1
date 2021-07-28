import React from "react";
import Layout from "../../Components/Layout/Layout";
import Sidebar from "../../Components/PagesComponents/Profile/Sidebar";

const Profile = () => {
  return (
    <Layout>
      <main className="w-full min-h-screen bg-white relative flex items-center justify-between ">
        <Sidebar />
        <div className="w-4/5 h-full p-8 -mt-28"></div>
      </main>
    </Layout>
  );
};

export default Profile;
