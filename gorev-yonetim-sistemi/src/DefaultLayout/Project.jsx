import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts/StateContext";
import "../css/Project.css";
import SearchButton from "./SearchButton";
// import ProjectItem from "./ProjectItem";
import ListItem from "./ListItem.jsx";
import CommentSection from "./CommentSection.jsx";
import AddProjectTaskButton from "./AddProjectButton.jsx";
import { IoCloseSharp } from "react-icons/io5";
import { useLanguage } from "../Contexts/languageContext.jsx";
import { projectTranslations } from "../i18n/Project.js";

function Project() {
  const {
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
    filteredProjects,
    setFilteredProjects,
    searchVal,
    setSearchVal,
    isCommentSectionOpen,
    deleteModal,
    setDeleteModal,
  } = useContext(StateContext);
  const { language } = useLanguage();
  const t = projectTranslations[language];

  const handleInputChange = (e) => setProjectName(e.target.value);

  function handleAddProject() {
    setIsInput(true);
    setProjectName("");
  }

  const handleSaveProject = () => {
    if (!projectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: projectName,
      status: "default",
      comments: [],
    };
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    setProjectName("");
    setIsInput(false);
  };

  const handleCancelInput = () => {
    setIsInput(false);
    setProjectName("");
  };

  const handleCancelEdit = () => {
    setEditableProject(null);
    setEditedProjectName("");
  };

  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) setProjects(JSON.parse(stored));
  }, [setProjects]);

  const handleDeleteClick = (projectDelete) => {
    setDeleteModal(projectDelete);
  };

  const confirmDelete = () => {
    if (!deleteModal) return;
    const updated = projects.filter((p) => p && p.id !== deleteModal.id);
    setProjects(updated);

    localStorage.setItem("projects", JSON.stringify(updated));

    setSearchVal("");

    setDeleteModal(null);
  };

  const handleEditClick = (project) => {
    setEditedProjectName(project.name);
    setEditableProject(project);
  };

  const handleEditInputChange = (e) => setEditedProjectName(e.target.value);

  const handleSaveEdit = () => {
    const updated = projects.map((p) =>
      p === editableProject ? { ...p, name: editedProjectName } : p
    );
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    setEditableProject(null);
    setEditedProjectName("");
  };

  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map((p) =>
      p.id === projectId ? { ...p, status: newStatus } : p
    );
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const moveProjects = (fromIndex, toIndex) => {
    const newProjects = [...projects];
    const [moveProject] = newProjects.splice(fromIndex, 1);
    newProjects.splice(toIndex, 0, moveProject);

    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  return (
    <div className="projects">
      <ul className="project-list">
        <div className="header-line">
          <button>{t.projects_header}</button>
          <SearchButton
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            setFilteredItems={setFilteredProjects}
            filterItems={filteredProjects}
          />
        </div>

        {isInput && (
          <li className="new-project-input-item">
            <input
              className="input"
              type="text"
              value={projectName}
              onChange={handleInputChange}
              placeholder={t.project_input_placeholder}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSaveProject();
              }}
            />
            <div className="item-actions">
              <button onClick={handleSaveProject}>{t.add_button}</button>
              <button onClick={handleCancelInput}>
                <IoCloseSharp />
              </button>
            </div>
          </li>
        )}

        {filteredProjects.map((project, index) => (
          <ListItem
            key={project.id}
            item={project}
            index={index}
            editableItem={editableProject}
            editedItemName={editedProjectName}
            handleEditInputChange={handleEditInputChange}
            handleSaveEdit={handleSaveEdit}
            handleEditClick={handleEditClick}
            handleCancelEdit={handleCancelEdit}
            handleDeleteClick={handleDeleteClick}
            handleStatusChange={handleStatusChange}
            hasCommentButton={true}
            moveProjects={moveProjects}
          />
        ))}
      </ul>

      <div className="add-project-wrapper">
        <AddProjectTaskButton onClick={handleAddProject} text={t.add_project} />
      </div>

      {isCommentSectionOpen && <CommentSection />}

      {deleteModal && (
        <div className="delete-modal-container">
          <p>
            You are about to delete the file named{" "}
            <strong>{deleteModal.name}</strong>. Are you sure?
          </p>
          <div className="delete-cancel-button">
            <button onClick={() => setDeleteModal(null)}>Cancel</button>
            <button onClick={confirmDelete}>Yes, Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
