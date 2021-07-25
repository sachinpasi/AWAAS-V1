import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectUser } from "../../../Redux/_features/_userSlice";
const SearchNav = ({ setPropertyFor, PropertyFor }) => {
  const [isNavOpen, setisNavOpen] = useState(false);

  const HandleNavScroll = () => {
    if (window.scrollY >= 40) {
      setisNavOpen(true);
    } else {
      setisNavOpen(false);
    }
  };

  const user = useSelector(selectUser);
  const history = useHistory();

  const HandlePostProperty = () => {
    if (user.isLoggedIn) {
      history.push("/post-property");
    } else {
      // setisLoginModalOpen(true);
    }
  };

  window.addEventListener("scroll", HandleNavScroll);
  return (
    <div
      style={{
        transition: "0.3s all ease",
      }}
      className={`w-full h-20 bg-blue flex justify-center items-center z-10 fixed ${
        isNavOpen ? "top-0" : ""
      } `}
    >
      <div className="customContainer flex justify-between items-center h-58percent ">
        <select
          value={PropertyFor}
          onChange={(e) => setPropertyFor(e.target.value)}
          className="w-48 h-full mr-2 text-xl  rounded px-2"
        >
          <option value="sell">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <div className=" w-8/12 mx-2 flex  justify-between items-center rounded bg-white px-4 h-full ">
          <input type="text" className="w-full " placeholder="Search" />
          <BsSearch className="text-xl text-gray-600" />
        </div>
        <button
          onClick={HandlePostProperty}
          className="bg-green w-56 mx-2  text-white h-full  rounded font-medium"
        >
          Post Property For Free
        </button>
        <Link
          to="/home-loans"
          className="flex w-48 justify-center ml-2 items-center border-2  rounded cursor-pointer  px-4 h-full"
        >
          <IoMdHome className="text-white text-2xl mr-2" />
          <p className="text-lg text-white">Home Loan</p>
        </Link>
      </div>
    </div>
  );
};

export default SearchNav;
