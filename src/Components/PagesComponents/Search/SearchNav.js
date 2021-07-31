import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../../Redux/_features/_userSlice";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import Fuse from "fuse.js";
import axios from "axios";
import { API } from "../../../API";
import { BsChevronDown } from "react-icons/bs";

const SearchNav = ({
  setPropertyFor,
  PropertyFor,
  setLocality,
  setParentPropertyType,
  ParentPropertyType,
  PropertyType,
  setPropertyType,
}) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [LocalityList, setLocalityList] = useState([]);
  const [isAnyThingSelected, setisAnyThingSelected] = useState(false);

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
        <input
          defaultValue="Panipat"
          disabled
          className=" cursor-not-allowed h-full mr-2 bg-white text-base text-darkgray  rounded px-4"
        ></input>
        <div className="w-3/12 h-full flex justify-between items-center">
          <select
            value={PropertyFor}
            onChange={(e) => setPropertyFor(e.target.value)}
            className="w-2/5 h-full mr-2 text-base  rounded px-2"
          >
            <option value="sell">Buy</option>
            <option value="rent">Rent</option>
          </select>

          <div className="dropdown bg-white rounded inline-block  relative w-full h-full">
            <button
              onMouseEnter={() => setisAnyThingSelected(false)}
              // onClick={() => setisAnyThingSelected(false)}
              className="w-full h-full text-darkgray py-2 px-4 rounded justify-between inline-flex items-center"
            >
              <span className="capitalize">
                {PropertyType ? PropertyType : "Property Type"}
              </span>
              <BsChevronDown />
            </button>

            <ul
              id="div"
              className={`${
                isAnyThingSelected ? "" : "dropdown-content"
              }   hidden absolute z-20 w-full  text-darkgray  shadow-xl rounded-lg `}
            >
              <li className="dropdown w-full rounded-t-lg">
                <div className="rounded-t-lg cursor-pointer hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                  Residential
                </div>
                <ul className="dropdown-content rounded-lg hidden absolute z-10 w-40 shadow-xl  text-darkgray left-full  -mt-10">
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("land");
                        setParentPropertyType("residential");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white rounded-t-lg cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Land / Plot
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("villa");
                        setParentPropertyType("residential");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Villa / House
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("flat");
                        setParentPropertyType("residential");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Flat / Apartment
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("floor");
                        setParentPropertyType("residential");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Floor
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("farmhouse");
                        setParentPropertyType("residential");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white rounded-b-lg cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Farmhouse
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown w-full">
                <div className=" cursor-pointer hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                  Commercial
                </div>
                <ul className="dropdown-content rounded-lg overflow-hidden hidden absolute w-40 shadow-xl  text-darkgray left-full  -mt-10">
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("land");
                        setisAnyThingSelected(true);
                        setParentPropertyType("commercial");
                      }}
                      className="bg-white  cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Land / Plot
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("shop");
                        setParentPropertyType("commercial");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Shop / Showroom
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("officespace");
                        setParentPropertyType("commercial");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Officespace
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown w-full rounded-b-lg">
                <div className=" cursor-pointer rounded-b-lg hover:bg-textbg w-full bg-white  py-2 px-4 block whitespace-no-wrap">
                  Industrial
                </div>
                <ul className="dropdown-content rounded-lg   overflow-hidden hidden absolute w-40 shadow-xl  text-darkgray left-full  -mt-10">
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("land");
                        setParentPropertyType("industrial");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white  cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Land / Plot
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("factory");
                        setParentPropertyType("industrial");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Factory / Builtup
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setPropertyType("shop");
                        setParentPropertyType("industrial");
                        setisAnyThingSelected(true);
                      }}
                      className="bg-white cursor-pointer hover:bg-textbg py-2 px-4 block whitespace-no-wrap"
                    >
                      Shop / Showroom
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-3/4 flex h-full justify-between items-center">
          <div className=" w-72percent mx-2 flex  justify-between items-center rounded bg-white px-4 h-full ">
            <SelectSearch
              closeOnSelect
              onChange={(selected) => setLocality(selected)}
              options={options}
              placeholder="Search For Locality / Area / Sector"
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
        </div>

        {/* <Link
          to="/home-loans"
          className="flex w-52 justify-center ml-2 items-center border-2  rounded cursor-pointer  px-4 h-full"
        >
          <IoMdHome className="text-white text-2xl mr-2" />
          <p className="text-lg text-white">Home Loan</p>
        </Link> */}
      </div>
    </div>
  );
};

export default SearchNav;
