import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        placeholder={query}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {error.show && <p className="error"> {error.msg}</p>}
    </form>
  );
};

export default SearchForm;
