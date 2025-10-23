import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [editableProject, setEditableProject] = useState(null);
  const [editedProjectName, setEditedProjectName] = useState("");

  return (
    <StateContext.Provider
      value={{
        projects,
        setProjects,
        projectName,
        setProjectName,
        isInput,
        setIsInput,
        editableProject,
        setEditableProject,
        editedProjectName,
        setEditedProjectName,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
