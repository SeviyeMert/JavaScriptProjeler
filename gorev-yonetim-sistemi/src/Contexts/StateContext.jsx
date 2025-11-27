import React, { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [editableProject, setEditableProject] = useState(null);
  const [editedProjectName, setEditedProjectName] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [deleteModal, setDeleteModal] = useState(null);

  const [item, setItem] = useState([]);

  // Tasks

  const [taskName, setTaskName] = useState("");

  const [editableTask, setEditableTask] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const [searchValTask, setSearchValTask] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(null);

  // Comment
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [selectedProjectForComment, setSelectedProjectForComment] =
    useState(null);

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

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
        searchVal,
        setSearchVal,
        filteredProjects,
        setFilteredProjects,
        tasks,
        setTasks,
        taskName,
        setTaskName,
        editableTask,
        setEditableTask,
        editedTaskName,
        setEditedTaskName,
        searchValTask,
        setSearchValTask,
        filteredTasks,
        setFilteredTasks,
        isCommentSectionOpen,
        setIsCommentSectionOpen,
        selectedProjectForComment,
        setSelectedProjectForComment,
        deleteModal,
        setDeleteModal,
        item,
        setItem,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
