import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Filter from "../Components/PagesComponents/Search/Filter";
import Result from "../Components/PagesComponents/Search/Result";
import SearchNav from "../Components/PagesComponents/Search/SearchNav";
import queryString from "query-string";

const Search = () => {
  const { search } = useLocation();
  const { property_for } = queryString.parse(search);
  const [PropertyFor, setPropertyFor] = useState(property_for);
  const [Locality, setLocality] = useState();

  console.log(property_for);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <SearchNav
        setLocality={setLocality}
        PropertyFor={PropertyFor}
        setPropertyFor={setPropertyFor}
      />
      <main className="bg-textbg pt-28">
        <div className="customContainer flex h-full justify-between  ">
          <Filter Locality={Locality} PropertyFor={PropertyFor} />
          <Result />
        </div>
      </main>
    </Layout>
  );
};

export default Search;
