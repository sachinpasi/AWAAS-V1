import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { API } from "../API";
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

  const FetchData = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/property/id/${id}`);
    console.log(res.data.data);
    if (res.status === 200) {
      dispatch(
        SET_PROPERTY_RENT_DETAILS({
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
      dispatch(REMOVE_PROPERTY_RENT_DETAILS());
    };
  }, [id]);
  return (
    <Layout>
      {isLoading && <Loader />}
      <Banner />
      <PropertyRentSection />
      <PropertyRent />
    </Layout>
  );
};

export default PropertyForRentDetails;
