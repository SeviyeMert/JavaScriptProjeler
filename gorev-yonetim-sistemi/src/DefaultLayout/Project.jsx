import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts/StateContext";
import "../css/Project.css";
import SearchButton from "./SearchButton";
// import ProjectItem from "./ProjectItem";
import ListItem from "./ListItem.jsx";
import CommentSection from "./CommentSection.jsx";
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
    searchVal,
    setSearchVal,
    isCommentSectionOpen,
  } = useContext(StateContext);
  const { language } = useLanguage();
  const t = projectTranslations[language];

  const handleInputChange = (e) => setProjectName(e.target.value);

  const handleSaveProject = () => {
    if (!projectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: projectName,
      status: "default",
      comments: [],
    };
    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    setProjectName("");
    setIsInput(false);
  };

  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) setProjects(JSON.parse(stored));
  }, []);

  const handleDeleteClick = (projectDelete) => {
    const updated = projects.filter((p) => p && p.id !== projectDelete.id);
    setProjects(updated);

    localStorage.setItem("projects", JSON.stringify(updated));

    setSearchVal("");
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

  const moveProject = (dragIndex, hoverIndex) => {
    if (searchVal && searchVal.trim().length > 0) {
      return;
    }

    const dragProject = projects[dragIndex];
    const newProjects = [...projects];
    newProjects.splice(dragIndex, 1);
    newProjects.splice(hoverIndex, 0, dragProject);

    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  const handleStatusChange = (projectId, newStatus) => {
    const updatedProjects = projects.map((p) =>
      p.id === projectId ? { ...p, status: newStatus } : p
    );
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div className="projects">
      <ul className="project-list">
        <div className="header-line">
          <button>{t.projects_header}</button>
          <SearchButton />
        </div>

        {isInput && (
          <li className="new-project-input-item">
            <input
              className="input"
              type="text"
              value={projectName}
              onChange={handleInputChange}
              placeholder={t.project_input_placeholder}
            />
            <button onClick={handleSaveProject}>{t.add_button}</button>
          </li>
        )}

        {(filteredProjects || projects)
          .filter((project) => project != null)
          .map((project, index) => (
            <ListItem
              key={project.id}
              item={project}
              index={index}
              editableItem={editableProject}
              editedItemName={editedProjectName}
              handleEditInputChange={handleEditInputChange}
              handleSaveEdit={handleSaveEdit}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              moveItem={moveProject}
              handleStatusChange={handleStatusChange}
              dragType="item"
              hasCommentButton={true}
            />
          ))}
      </ul>
      {isCommentSectionOpen && <CommentSection />}
    </div>
  );
}

export default Project;
