import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Filter from "../Components/PagesComponents/Search/Filter";
import Result from "../Components/PagesComponents/Search/Result";
import SearchNav from "../Components/PagesComponents/Search/SearchNav";
import queryString from "query-string";
import { Helmet } from "react-helmet";

const Search = () => {
  const { search } = useLocation();
  const { property_for } = queryString.parse(search);
  const [PropertyFor, setPropertyFor] = useState(property_for);
  const [ParentPropertyType, setParentPropertyType] = useState();
  const [PropertyType, setPropertyType] = useState();

  const [Locality, setLocality] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />(<title>Search</title>
        )
        <meta name="description" content="" />
      </Helmet>
      <SearchNav
        setLocality={setLocality}
        PropertyFor={PropertyFor}
        setPropertyFor={setPropertyFor}
        setParentPropertyType={setParentPropertyType}
        ParentPropertyType={ParentPropertyType}
        setPropertyType={setPropertyType}
        PropertyType={PropertyType}
      />
      <main className="bg-textbg lg:pt-28 pt-20">
        <div className="lg:w-80vw w-90vw mx-auto flex h-full justify-between  ">
          <Filter
            setParentPropertyType={setParentPropertyType}
            ParentPropertyType={ParentPropertyType}
            Locality={Locality}
            PropertyFor={PropertyFor}
            setPropertyType={setPropertyType}
            PropertyType={PropertyType}
            setPropertyFor={setPropertyFor}
            setLocality={setLocality}
          />
          <Result />
        </div>
      </main>
    </Layout>
  );
};

export default Search;
