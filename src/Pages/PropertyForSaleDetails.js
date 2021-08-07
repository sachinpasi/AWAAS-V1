import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../Components/Preloader/Loader";

import { API } from "../API";
import {
  SET_PROPERTY_SALE_DETAILS,
  REMOVE_PROPERTY_SALE_DETAILS,
} from "../Redux/_features/_PropertySaleDetailsSlice";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/PropertyForSaleDetails/Banner";
import PropertySaleSection from "../Components/PagesComponents/PropertyForSaleDetails/PropertySaleDetailsSection/PropertyDetailsSection";
import PropertySale from "../Components/PagesComponents/Homepage/PropertySale/PropertySale";

const PropertyForSaleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);

  const FetchData = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/property/id/${id}`);
    console.log(res.data.data);
    if (res.status === 200) {
      dispatch(
        SET_PROPERTY_SALE_DETAILS({
          Data: res.data.data,
        })
      );
      setisLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(REMOVE_PROPERTY_SALE_DETAILS());
    };
  }, [id]);

  return (
    <Layout>
      {isLoading && <Loader />}
      <Banner />
      <PropertySaleSection />
      <PropertySale />
    </Layout>
  );
};

export default PropertyForSaleDetails;
