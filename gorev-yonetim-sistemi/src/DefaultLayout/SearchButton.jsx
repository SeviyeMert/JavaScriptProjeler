import React, { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";
import { IoSearchSharp } from "react-icons/io5";
import "../css/SearchButton.css";

function SearchButton() {
  const { searchVal, setSearchVal, projects, setFilteredProjects } =
    useContext(StateContext);

  const handleSearchClick = (e) => {
    const newSearchValue = e.target.value;
    setSearchVal(newSearchValue);
    if (newSearchValue === "") {
      setFilteredProjects(projects);
    } else {
      const results = projects.filter((project) =>
        project.toLowerCase().includes(newSearchValue.toLowerCase())
      );
      setFilteredProjects(results);
    }
  };

  return (
    <div className="search-button">
      <input
        type="text"
        placeholder="search"
        value={searchVal}
        onChange={handleSearchClick}
      />
      <IoSearchSharp />
    </div>
  );
}

export default SearchButton;
