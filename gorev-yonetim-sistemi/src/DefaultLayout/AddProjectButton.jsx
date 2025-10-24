import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { StateContext } from "../Contexts/StateContext.jsx";
import "../css/AddProjectButton.css";

function AddProjectButton() {
  const { isInput, setIsInput, ProjectName, setProjectName } =
    useContext(StateContext);

  function handleStartAddProject() {
    setIsInput(true);
    setProjectName("");
  }

  return (
    <button className="add-project-button" onClick={handleStartAddProject}>
      <GoPlus />
      Add Project
    </button>
  );
}

export default AddProjectButton;
