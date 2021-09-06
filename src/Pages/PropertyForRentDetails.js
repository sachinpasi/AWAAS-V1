import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API } from "../API";
import { Helmet } from "react-helmet";

import Layout from "../Components/Layout/Layout";
import Banner from "../Components/PagesComponents/PropertyForRentDetails/Banner";
import {
  REMOVE_PROPERTY_RENT_DETAILS,
  SET_PROPERTY_RENT_DETAILS,
} from "../Redux/_features/_PropertyRentDetailsSlice";
import PropertyRent from "../Components/PagesComponents/Homepage/PropertyRent/PropertyRent";
import PropertyRentSection from "../Components/PagesComponents/PropertyForRentDetails/PropertyRentDetailsSection/PropertyDetailsSection";
import Loader from "../Components/Preloader/Loader";

const PropertyForRentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
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
        SET_PROPERTY_RENT_DETAILS({
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
      dispatch(REMOVE_PROPERTY_RENT_DETAILS());
    };
  }, [id]);
  useEffect(() => {
    if (Data) {
      setTitle(`${Data.title} | ${Data?.locality_name}
              ${Data?.city}`);
    }
  }, [Data]);
  return (
    <Layout>
      {isLoading && <Loader />}
      <Helmet>
        <meta charset="utf-8" />(
        <title className="capitalize">{Capitalize(Title)}</title>
        )
        <meta name="description" content={Data?.description} />
      </Helmet>
      <Banner />
      <PropertyRentSection />
      <PropertyRent />
    </Layout>
  );
};

export default PropertyForRentDetails;
