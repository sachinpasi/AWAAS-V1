import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-multilevel-dropdown";
import SelectSearch from "react-select-search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { API } from "../../../API";
import { SET_LOGIN_MODAL_OPEN } from "../../../Redux/_features/_LoginModalSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";
import "./Banner.css";
import "react-select-search/style.css";
import Fuse from "fuse.js";
import { BsChevronDown } from "react-icons/bs";

const MobileSearchWidget = () => {
  const history = useHistory();
  const [Locality, setLocality] = useState();
  const [ParentPropertyType, setParentPropertyType] = useState("");
  const [CurrentTab, setCurrentTab] = useState("sell");
  const [PropertyType, setPropertyType] = useState("Property Type");
  const [BudgetMin, setBudgetMin] = useState(0);
  const [BudgetMax, setBudgetMax] = useState(0);
  const [LocalityList, setLocalityList] = useState([]);
  const [PARAMS, setPARAMS] = useState();
  const [isAnyThingSelected, setisAnyThingSelected] = useState(false);

  const BudgetMinItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMin(Value)}
      value={Value}
    >
      {title}
    </li>
  );
  const BudgetMaxItem = ({ Value, title }) => (
    <li
      className="p-1 cursor-pointer text-xs"
      onClick={() => setBudgetMax(Value)}
      value={Value}
    >
      {title}
    </li>
  );

  const FetchLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };

  const options = LocalityList.sort()
    .reverse()
    .map((_) => ({
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

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const HandlePostProperty = () => {
    if (user.isLoggedIn) {
      history.push("/post-property");
    } else {
      dispatch(
        SET_LOGIN_MODAL_OPEN({
          isLoginModalOpen: true,
        })
      );
    }
  };

  const HandleProject = () => {
    history.push("/search/projects");
  };

  const HandleSearch = () => {
    history.push({ pathname: "/search", search: PARAMS });
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (CurrentTab) {
      params.append("property_for", CurrentTab);
    } else {
      params.delete("property_for");
    }
    if (Locality) {
      params.append("locality_id", Locality);
    } else {
      params.delete("locality_id");
    }
    if (ParentPropertyType) {
      params.append("parent_type", ParentPropertyType);
    } else {
      params.delete("parent_type");
    }
    if (PropertyType !== "Property Type") {
      params.append("property_type", PropertyType);
    } else {
      params.delete("property_type");
    }
    if (BudgetMin) {
      params.append("mini_budget", BudgetMin);
    } else {
      params.delete("mini_budget");
    }
    if (BudgetMax) {
      params.append("max_budget", BudgetMax);
    } else {
      params.delete("max_budget");
    }

    setPARAMS(params.toString());
  }, [
    Locality,
    ParentPropertyType,
    PropertyType,
    BudgetMin,
    BudgetMax,
    CurrentTab,
  ]);

  return (
    <div className="w-90vw  mx-auto my-8">
      <div className="flex justify-between items-center w-full mx-auto  ">
        <WidgetNav
          Active={CurrentTab === "sell"}
          Name="SELL"
          onClick={() => setCurrentTab("sell")}
        />
        <WidgetNav
          Active={CurrentTab === "rent"}
          Name="Rent"
          onClick={() => setCurrentTab("rent")}
        />

        <WidgetNav Name="Sell / List" onClick={HandlePostProperty} />
      </div>
      <div className="w-full h-full flex-col flex">
        <div className="w-full h-12 my-0.5">
          <select
            className="border-l-1 text-base border-t-1 border-b-1 w-full h-full flex items-center justify-center px-4 outline-none "
            disabled
          >
            <option defaultChecked value="Panipat">
              Panipat
            </option>
          </select>
        </div>
        <div className="w-full h-12 border-l-1 border-t-1 border-b-1 text-base my-0.5">
          <SelectSearch
            closeOnSelect
            onChange={(selected) => setLocality(selected)}
            options={options}
            placeholder=" Locality / Area / Sector"
            filterOptions={fuzzySearch}
            search
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="w-full h-12 my-0.5">
            <div className=" border-l-1 border-t-1 border-b-1 w-full h-full flex items-center justify-center outline-none ">
              <div className="dropdown inline-block relative w-full h-full">
                <button
                  onMouseEnter={() => setisAnyThingSelected(false)}
                  // onClick={() => setisAnyThingSelected(false)}
                  className="w-full h-full text-darkgray py-2 px-4 justify-between rounded inline-flex items-center"
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
          </div>

          <div className="w-full h-12 border-1 flex justify-center items-center px-4 my-0.5 ">
            {CurrentTab === "sell" ? (
              <Dropdown
                wrapperClassName="SelectWrapper"
                buttonClassName="SelectButton"
                menuClassName="MenuBudegt"
                title={
                  BudgetMin || BudgetMax
                    ? `₹ ${BudgetMin} - ₹ ${BudgetMax}`
                    : " Budget (in Rs)"
                }
              >
                <Dropdown.Item className="ItemBudget">
                  <div className="w-2/4 border-r-1">
                    <ul className="list-none m-0 p-0 text-center">
                      Min (in Rs)
                      <BudgetMinItem Value="1000000" title="10 Lacs" />
                      <BudgetMinItem Value="2000000" title="20 Lacs" />
                      <BudgetMinItem Value="3000000" title="30 Lacs" />
                      <BudgetMinItem Value="4000000" title="40 Lacs" />
                      <BudgetMinItem Value="5000000" title="50 Lacs" />
                      <BudgetMinItem Value="6000000" title="60 Lacs" />
                      <BudgetMinItem Value="7000000" title="70 Lacs" />
                      <BudgetMinItem Value="8000000" title="80 Lacs" />
                      <BudgetMinItem Value="9000000" title="90 Lacs" />
                      <BudgetMinItem Value="10000000" title="1 Cr" />
                      <BudgetMinItem Value="15000000" title="1.5 Cr" />
                      <BudgetMinItem Value="20000000" title="2 Cr" />
                      <BudgetMinItem Value="30000000" title="3 Cr" />
                      <BudgetMinItem Value="40000000" title="4 Cr" />
                      <BudgetMinItem Value="50000000" title="5 Cr" />
                      <BudgetMinItem Value="60000000" title="6 Cr" />
                      <BudgetMinItem Value="70000000" title="7 Cr" />
                      <BudgetMinItem Value="80000000" title="8 Cr" />
                    </ul>
                  </div>
                  <div className="w-2/4">
                    <ul className="list-none m-0 p-0 text-center">
                      Max (in Rs)
                      <BudgetMaxItem Value="1500000" title="15 Lacs" />
                      <BudgetMaxItem Value="2500000" title="25 Lacs" />
                      <BudgetMaxItem Value="3500000" title="35 Lacs" />
                      <BudgetMaxItem Value="4500000" title="45 Lacs" />
                      <BudgetMaxItem Value="5500000" title="55 Lacs" />
                      <BudgetMaxItem Value="6500000" title="65 Lacs" />
                      <BudgetMaxItem Value="7500000" title="75 Lacs" />
                      <BudgetMaxItem Value="8500000" title="85 Lacs" />
                      <BudgetMaxItem Value="9500000" title="95 Lacs" />
                      <BudgetMaxItem Value="15000000" title="1.5 Cr" />
                      <BudgetMaxItem Value="25000000" title="2.5 Cr" />
                      <BudgetMaxItem Value="35000000" title="3.5 Cr" />
                      <BudgetMaxItem Value="45000000" title="4.5 Cr" />
                      <BudgetMaxItem Value="55000000" title="5.5 Cr" />
                      <BudgetMaxItem Value="65000000" title="6.5 Cr" />
                      <BudgetMaxItem Value="75000000" title="7.5 Cr" />
                      <BudgetMaxItem Value="85000000" title="8.5 Cr" />
                      <BudgetMaxItem Value="90000000" title="9 Cr" />
                    </ul>
                  </div>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Dropdown
                wrapperClassName="SelectWrapper"
                buttonClassName="SelectButton"
                menuClassName="MenuBudegt"
                title={
                  BudgetMin || BudgetMax
                    ? `₹ ${BudgetMin} - ₹ ${BudgetMax}`
                    : " Budget (in Rs)"
                }
              >
                <Dropdown.Item className="ItemBudget">
                  <div className="w-2/4 border-r-1">
                    <ul className="list-none m-0 p-0 text-center">
                      Min (in Rs)
                      <BudgetMinItem Value="2500" title="2500" />
                      <BudgetMinItem Value="5000" title="5000" />
                      <BudgetMinItem Value="10000" title="10000" />
                      <BudgetMinItem Value="20000" title="20000" />
                      <BudgetMinItem Value="30000" title="30000" />
                      <BudgetMinItem Value="40000" title="40000" />
                      <BudgetMinItem Value="50000" title="50000" />
                      <BudgetMinItem Value="60000" title="60000" />
                      <BudgetMinItem Value="70000" title="70000" />
                      <BudgetMinItem Value="80000" title="80000" />
                      <BudgetMinItem Value="90000" title="90000" />
                      <BudgetMinItem Value="100000" title="1 Lac" />
                      <BudgetMinItem Value="120000" title="1.2 Lac" />
                      <BudgetMinItem Value="140000" title="1.4 Lac" />
                      <BudgetMinItem Value="160000" title="1.6 Lac" />
                      <BudgetMinItem Value="180000" title="1.8 Lac" />
                      <BudgetMinItem Value="200000" title="2 Lac" />
                      <BudgetMinItem Value="250000" title="2.5 Lac" />
                      <BudgetMinItem Value="300000" title="3 Lac" />
                      <BudgetMinItem Value="350000" title="3.5 Lac" />
                      <BudgetMinItem Value="400000" title="4 Lac" />
                      <BudgetMinItem Value="500000" title="5 Lac" />
                    </ul>
                  </div>
                  <div className="w-2/4">
                    <ul className="list-none m-0 p-0 text-center">
                      Max (in Rs)
                      <BudgetMaxItem Value="5000" title="5000" />
                      <BudgetMaxItem Value="10000" title="10000" />
                      <BudgetMaxItem Value="20000" title="20000" />
                      <BudgetMaxItem Value="30000" title="30000" />
                      <BudgetMaxItem Value="40000" title="40000" />
                      <BudgetMaxItem Value="50000" title="50000" />
                      <BudgetMaxItem Value="60000" title="60000" />
                      <BudgetMaxItem Value="70000" title="70000" />
                      <BudgetMaxItem Value="80000" title="80000" />
                      <BudgetMaxItem Value="90000" title="90000" />
                      <BudgetMaxItem Value="100000" title="1 Lac" />
                      <BudgetMaxItem Value="120000" title="1.2 Lac" />
                      <BudgetMaxItem Value="140000" title="1.4 Lac" />
                      <BudgetMaxItem Value="160000" title="1.6 Lac" />
                      <BudgetMaxItem Value="180000" title="1.8 Lac" />
                      <BudgetMaxItem Value="200000" title="2 Lac" />
                      <BudgetMaxItem Value="250000" title="2.5 Lac" />
                      <BudgetMaxItem Value="300000" title="3 Lac" />
                      <BudgetMaxItem Value="350000" title="3.5 Lac" />
                      <BudgetMaxItem Value="400000" title="4 Lac" />
                      <BudgetMinItem Value="500000" title="5 Lac" />
                      <BudgetMinItem Value="600000" title="6 Lac" />
                    </ul>
                  </div>
                </Dropdown.Item>
              </Dropdown>
            )}
          </div>
        </div>

        <div className="w-11/12 mx-auto flex justify-center items-center my-2">
          <button
            onClick={HandleSearch}
            className="cursor-pointer h-12 w-52 bg-blue text-1xl font-medium text-white  flex justify-center items-center"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSearchWidget;

const WidgetNav = ({ Name, onClick, Active }) => (
  <div
    className={`${
      Active ? "bg-blue" : "bg-lightblue"
    } w-1/3 flex justify-center items-center text-white font-medium  h-12 uppercase mx-0.5 cursor-pointer`}
    onClick={onClick}
  >
    <p>{Name}</p>
  </div>
);
