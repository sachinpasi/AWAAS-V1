import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Filter from "../Components/PagesComponents/Search/Filter";
import Result from "../Components/PagesComponents/Search/Result";
import SearchNav from "../Components/PagesComponents/Search/SearchNav";
import queryString from "query-string";

const Search = () => {
  const { search } = useLocation();
  const { propertyFor } = queryString.parse(search);
  const [PropertyFor, setPropertyFor] = useState(propertyFor);

  return (
    <Layout>
      <SearchNav setPropertyFor={setPropertyFor} />
      <main className="bg-textbg pt-28">
        <div className="customContainer flex h-full justify-between  ">
          <Filter PropertyFor={PropertyFor} />
          <Result />
        </div>
      </main>
    </Layout>
  );
};

export default Search;
