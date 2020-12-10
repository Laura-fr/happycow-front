import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  let history = useHistory();
  // barre de recherche
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="top">
        <h1>Find Vegan Food</h1>
        <div className="searchbar">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
              history.push("result/" + search);
            }}
          >
            <input
              type="text"
              placeholder="Search for city, region or zipcode"
              value={search}
              onChange={(event) => {
                const value = event.target.value;
                setSearch(value);
              }}
            />
            <button type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
