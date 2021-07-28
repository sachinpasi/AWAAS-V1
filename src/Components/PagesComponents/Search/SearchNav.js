import React, { useEffect, useState } from "react";

import { IoMdHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectUser } from "../../../Redux/_features/_userSlice";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import Fuse from "fuse.js";
import axios from "axios";
import { API } from "../../../API";

const SearchNav = ({ setPropertyFor, PropertyFor, setLocality }) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [LocalityList, setLocalityList] = useState([]);

  const HandleNavScroll = () => {
    if (window.scrollY >= 40) {
      setisNavOpen(true);
    } else {
      setisNavOpen(false);
    }
  };

  const user = useSelector(selectUser);
  const history = useHistory();

  const FetchLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };

  const options = LocalityList.map((_) => ({
    name: _.name,
    value: _.id,
  }));
  function fuzzySearch(options) {
    const fuse = new Fuse(options, {
      keys: ["name", "groupName", "items.name"],
      threshold: 0.3,
    });

    return (value) => {
      if (!value.length) {
        return options;
      }

      return fuse.search(value);
    };
  }
  useEffect(() => {
    FetchLocality();
  }, []);

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
          <SelectSearch
            closeOnSelect
            onChange={(selected) => setLocality(selected)}
            options={options}
            placeholder="Search For Locality"
            filterOptions={fuzzySearch}
            search
          />
        </div>
        <button
          onClick={HandlePostProperty}
          className="bg-green w-56 mx-2  text-white h-full  rounded font-medium"
        >
          Post Property For Free
        </button>
        <Link
          to="/home-loans"
          className="flex w-52 justify-center ml-2 items-center border-2  rounded cursor-pointer  px-4 h-full"
        >
          <IoMdHome className="text-white text-2xl mr-2" />
          <p className="text-lg text-white">Home Loan</p>
        </Link>
      </div>
    </div>
  );
};

export default SearchNav;
