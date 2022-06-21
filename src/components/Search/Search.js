import React from "react";
import "./Search.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search(props) {
  const searchChangeHandler = (event) => {
    props.onChangeSearchFilter(event.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="search">
        <label>Search</label>
        <input onChange={searchChangeHandler}></input>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}
export default Search;