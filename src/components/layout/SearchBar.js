import { useRef } from "react";
import React from "react";

function SearchBar(props) {
  const searchBarText = useRef();

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        className="searchBar"
        spellCheck={false}
        ref={searchBarText}
      />
    </div>
  );
}

export default SearchBar;
