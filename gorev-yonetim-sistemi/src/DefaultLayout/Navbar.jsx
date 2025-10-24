import React from "react";
import { GoPlus } from "react-icons/go";
import ListButton from "./ListButton";
import BoardButton from "./BoardButton";
import CalendarButton from "./CalendarButton";
import TableButton from "./TableButton";
import AddProjectButton from "./AddProjectButton";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="add-delete-list-bar">
      <ul>
        <li>
          <AddProjectButton />
        </li>
        <li>
          <ListButton />
        </li>
        <li>
          <BoardButton />
        </li>
        <li>
          <CalendarButton />
        </li>
        <li>
          <TableButton />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
