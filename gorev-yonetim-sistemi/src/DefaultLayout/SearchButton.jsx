import React, { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";
import { IoSearchSharp } from "react-icons/io5";
import "../css/SearchButton.css";

function SearchButton() {
  const {
    searchVal,
    setSearchVal,
    projects,
    tasks,
    setFilteredProjects,
    setFilteredTasks,
  } = useContext(StateContext);

  const handleSearchClick = (e) => {
    const newSearchValue = e.target.value;
    setSearchVal(newSearchValue);

    if (projects) {
      const results = projects.filter((item) =>
        item.name.toLowerCase().includes(newSearchValue.toLowerCase())
      );
      setFilteredProjects(results);
    }
    if (tasks) {
      const results = tasks.filter((item) =>
        item.name.toLowerCase().includes(newSearchValue.toLowerCase())
      );
      setFilteredTasks(results);
    }
  };

  return (
    <div className="search-button">
      <input
        type="text"
        placeholder="search"
        value={searchVal}
        onChange={handleSearchClick}
        autoFocus
      />
      <IoSearchSharp />
    </div>
  );
}

export default SearchButton;
