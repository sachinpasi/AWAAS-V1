import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { API } from "../API";
import {
  SET_PROPERTY_SALE_DETAILS,
  REMOVE_PROPERTY_SALE_DETAILS,
} from "../Redux/_features/_PropertySaleDetailsSlice";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/PropertyForSaleDetails/Banner";

const PropertyForSaleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const FetchData = async () => {
    const res = await axios.get(`${API}/property/id/${id}`);
    console.log(res.data.data);
    if (res.status === 200) {
      dispatch(
        SET_PROPERTY_SALE_DETAILS({
          Data: res.data.data,
        })
      );
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
      <Banner />
    </Layout>
  );
};

export default PropertyForSaleDetails;
