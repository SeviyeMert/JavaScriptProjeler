import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function SearchButton() {
  const [searchVal, setSearchVal] = useState("");

    const handleSearchClick() {
        
    }

  return (
    <div className="search-button">
      <input type="text" placeholder="search" />
      <button onClick={handleSearchClick}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchButton;
