import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../Components/Preloader/Loader";
import { Helmet } from "react-helmet";

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
  const [isBookmarkChanged, setisBookmarkChanged] = useState(false);
  const [Data, setData] = useState();
  const [Title, setTitle] = useState(
    "Awaasonline - Buy, Sell, Rent Property In Panipat"
  );

  const FetchData = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/property/id/${id}`);
    console.log(res.data.data);
    if (res.status === 200) {
      setData(res.data.data);
      dispatch(
        SET_PROPERTY_SALE_DETAILS({
          Data: res.data.data,
        })
      );
      setisLoading(false);
    }
  };

  const Capitalize = (str) => {
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
  };

  useEffect(() => {
    FetchData();
    window.scrollTo(0, 0);
    return () => {
      dispatch(REMOVE_PROPERTY_SALE_DETAILS());
    };
  }, [id]);
  useEffect(() => {
    if (Data) {
      setTitle(`${Data.title} | ${Data?.locality_name}
              ${Data?.city}`);
    }
  }, [Data]);

  return (
    <Layout isBookmarkChanged={isBookmarkChanged}>
      <Helmet>
        <meta charset="utf-8" />(
        <title className="capitalize">{Capitalize(Title)}</title>
        )
        <meta name="description" content={Data?.description} />
      </Helmet>
      {isLoading && <Loader />}
      <Banner setisBookmarkChanged={setisBookmarkChanged} />
      <PropertySaleSection />
      <PropertySale />
    </Layout>
  );
};

export default PropertyForSaleDetails;
