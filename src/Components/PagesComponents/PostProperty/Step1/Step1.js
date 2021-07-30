import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  SET_POST_PROPERTY,
  SET_POST_PROPERTY_ID,
} from "../../../../Redux/_features/_PostPropertySlice";
import { SET_CURRENT_STEP } from "../../../../Redux/_features/_PostPropertyStepSlice";
import { API } from "../../../../API";
import SideImage from "../SideImage";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import { toast } from "react-toastify";

const Step1 = () => {
  const [SelectedProperty_For, setSelectedProperty_For] = useState(null);
  const [SelectedParent_Property, setSelectedParent_Property] = useState(null);
  const [SelectedProperty_Type, setSelectedProperty_Type] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const HandleStep1Submit = async () => {
    if (
      SelectedProperty_For &&
      SelectedParent_Property &&
      SelectedProperty_Type !== null
    ) {
      const res = await axios.post(
        `${API}/property/store`,
        {
          property_for: SelectedProperty_For,
          parent_property: SelectedParent_Property,
          property_type: SelectedProperty_Type,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );

      if (res.status === 200) {
        dispatch(SET_POST_PROPERTY_ID(res.data.data.id));
        HandleContinue();
      }
    } else {
      return toast.error("All Fields Are Mandatory");
    }
  };

  const HandleContinue = () => {
    dispatch(SET_CURRENT_STEP(2));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(
      SET_POST_PROPERTY({
        Property_For: SelectedProperty_For,
        Parent_Property: SelectedParent_Property,
        Property_Type: SelectedProperty_Type,
      })
    );
  }, [
    SelectedProperty_For,
    SelectedParent_Property,
    SelectedProperty_Type,
    dispatch,
  ]);

  return (
    <div className="w-full h-full flex justify-between ">
      <SideImage />
      <div className="w-65percent flex flex-col items-start justify-between border-1  min-h-70vh h-full p-8 py-6">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <p className="text-2xl font-medium">I Am Looking To</p>
          <div className="my-8 flex justify-between items-center border-b-2 pb-4">
            <div
              onClick={() => setSelectedProperty_For("sell")}
              className={`px-7 py-2 ${
                SelectedProperty_For === "sell"
                  ? "bg-blue"
                  : "bg-littlelightgray"
              }  rounded-full cursor-pointer mr-4`}
            >
              <p
                className={`text-base font-medium text-center ${
                  SelectedProperty_For === "sell"
                    ? "text-white"
                    : "text-darkgray"
                } text-white uppercase`}
              >
                SELL
              </p>
            </div>{" "}
            <div
              onClick={() => setSelectedProperty_For("rent")}
              className={`px-7 py-2 ${
                SelectedProperty_For === "rent"
                  ? "bg-blue"
                  : "bg-littlelightgray"
              }  rounded-full cursor-pointer mr-4`}
            >
              <p
                className={`text-base font-medium text-center ${
                  SelectedProperty_For === "rent"
                    ? "text-white"
                    : "text-darkgray"
                } text-white uppercase`}
              >
                Rent / Lease
              </p>
            </div>
          </div>
          <p className="text-2xl font-medium">Type of property?</p>
          <div className="my-8 flex justify-between items-center border-b-2 pb-4">
            <div
              onClick={() => setSelectedParent_Property("residential")}
              className={`px-7 py-2 ${
                SelectedParent_Property === "residential"
                  ? "bg-blue"
                  : "bg-littlelightgray"
              }  rounded-full cursor-pointer mr-4`}
            >
              <p
                className={`text-base font-medium text-center ${
                  SelectedParent_Property === "residential"
                    ? "text-white"
                    : "text-darkgray"
                } text-white uppercase`}
              >
                Residential
              </p>
            </div>
            <div
              onClick={() => setSelectedParent_Property("commercial")}
              className={`px-7 py-2 ${
                SelectedParent_Property === "commercial"
                  ? "bg-blue"
                  : "bg-littlelightgray"
              }  rounded-full cursor-pointer mr-4`}
            >
              <p
                className={`text-base font-medium text-center ${
                  SelectedParent_Property === "commercial"
                    ? "text-white"
                    : "text-darkgray"
                } text-white uppercase`}
              >
                COMMERCIAL
              </p>
            </div>
            <div
              onClick={() => setSelectedParent_Property("industrial")}
              className={`px-7 py-2 ${
                SelectedParent_Property === "industrial"
                  ? "bg-blue"
                  : "bg-littlelightgray"
              }  rounded-full cursor-pointer mr-4`}
            >
              <p
                className={`text-base font-medium text-center ${
                  SelectedParent_Property === "industrial"
                    ? "text-white"
                    : "text-darkgray"
                } text-white uppercase`}
              >
                Industrial
              </p>
            </div>
          </div>
          {SelectedParent_Property === "residential" && (
            <div className=" flex  items-center flex-wrap ">
              <div
                onClick={() => setSelectedProperty_Type("land")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "land"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "land"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Plot / Land
                </p>
              </div>
              <div
                onClick={() => setSelectedProperty_Type("flat")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "flat"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "flat"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Apartment / Flat
                </p>
              </div>
              <div
                onClick={() => setSelectedProperty_Type("villa")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "villa"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "villa"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Independent House / Villa
                </p>
              </div>
              {/* <div
                onClick={() => setSelectedProperty_Type("farmhouse")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "farmhouse"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "farmhouse"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Farmhouse
                </p>
              </div> */}
              <div
                onClick={() => setSelectedProperty_Type("floor")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "floor"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "floor"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Floor / Builder Floor
                </p>
              </div>{" "}
              <div
                onClick={() => setSelectedProperty_Type("farmhouse")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "farmhouse"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "farmhouse"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Farmhouse
                </p>
              </div>
            </div>
          )}

          {SelectedParent_Property === "commercial" && (
            <div className=" flex  items-center flex-wrap ">
              <div
                onClick={() => setSelectedProperty_Type("land")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "land"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "land"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Plot / Land
                </p>
              </div>{" "}
              <div
                onClick={() => setSelectedProperty_Type("shop")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "shop"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "shop"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Showroom / Shop
                </p>
              </div>{" "}
              <div
                onClick={() => setSelectedProperty_Type("office")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "office"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "office"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Office
                </p>
              </div>
            </div>
          )}

          {SelectedParent_Property === "industrial" && (
            <div className=" flex  items-center flex-wrap ">
              <div
                onClick={() => setSelectedProperty_Type("land")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "land"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "land"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Plot / Land
                </p>
              </div>
              <div
                onClick={() => setSelectedProperty_Type("factory")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "factory"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "factory"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Builtup / Factory
                </p>
              </div>
              <div
                onClick={() => setSelectedProperty_Type("warehouse")}
                className={`px-7 py-2 ${
                  SelectedProperty_Type === "warehouse"
                    ? "bg-blue"
                    : "bg-littlelightgray"
                }  rounded-full cursor-pointer mr-4 mb-4`}
              >
                <p
                  className={`text-base font-medium text-center ${
                    SelectedProperty_Type === "warehouse"
                      ? "text-white"
                      : "text-darkgray"
                  } text-white uppercase`}
                >
                  Godown / Warehouse
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end w-full items-end h-full">
          <button
            onClick={HandleStep1Submit}
            className="bg-blue py-2 px-8 text-white font-medium text-xl tracking-tight"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
