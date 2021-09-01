import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API } from "../../API";
import Layout from "../../Components/Layout/Layout";
import Banner from "../../Components/PagesComponents/PropertyForSaleDetails/Banner";
import PropertySaleSection from "../../Components/PagesComponents/PropertyForSaleDetails/PropertySaleDetailsSection/PropertyDetailsSection";
import PropertyRentSection from "../../Components/PagesComponents/PropertyForRentDetails/PropertyRentDetailsSection/PropertyDetailsSection";

import {
  REMOVE_PROPERTY_SALE_DETAILS,
  SET_PROPERTY_SALE_DETAILS,
} from "../../Redux/_features/_PropertySaleDetailsSlice";
import { SET_PROPERTY_RENT_DETAILS } from "../../Redux/_features/_PropertyRentDetailsSlice";
import { useForm } from "react-hook-form";

const VerifyProperty = () => {
  const [Data, setData] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isEditClicked, setisEditClicked] = useState(false);
  const [isAnyThingUpdated, setisAnyThingUpdated] = useState(false);

  const FetchData = async () => {
    const res = await axios.get(`${API}/property/id/${id}/0`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
      if (res.data.data.property_for === "sell") {
        dispatch(
          SET_PROPERTY_SALE_DETAILS({
            Data: res.data.data,
          })
        );
      }
      if (res.data.data.property_for === "rent") {
        dispatch(
          SET_PROPERTY_RENT_DETAILS({
            Data: res.data.data,
          })
        );
      }
    }
  };

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(REMOVE_PROPERTY_SALE_DETAILS());
    };
  }, [id, isAnyThingUpdated, dispatch]);
  return (
    <Layout>
      <Banner
        isEditClicked={isEditClicked}
        setisEditClicked={setisEditClicked}
        setisAnyThingUpdated={setisAnyThingUpdated}
      />
      {Data?.property_for === "rent" && (
        <PropertyRentSection
          isEditClicked={isEditClicked}
          setisEditClicked={setisEditClicked}
        />
      )}
      {Data?.property_for === "sell" && (
        <PropertySaleSection
          isEditClicked={isEditClicked}
          setisEditClicked={setisEditClicked}
        />
      )}
    </Layout>
  );
};

export default VerifyProperty;
