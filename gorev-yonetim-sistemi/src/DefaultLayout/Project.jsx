import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts/StateContext";
import "../css/Project.css";
import SearchButton from "./SearchButton";
import ProjectItem from "./ProjectItem";

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
  } = useContext(StateContext);

  const handleInputChange = (e) => setProjectName(e.target.value);

  const handleSaveProject = () => {
    if (!projectName.trim()) return;
    const newProject = {
      id: Date.now(),
      name: projectName,
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
    const updated = projects.filter((p) => p.id !== projectDelete);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  const handleEditClick = (project) => {
    setEditedProjectName(project.name);
    setEditableProject(project);
  };

  const handleEditInputChange = (e) => setEditedProjectName(e.target.value);

  const handleSaveEdit = () => {
    const updated = projects.map((p) =>
      p === editableProject ? editedProjectName : p
    );
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    setEditableProject(null);
    setEditedProjectName("");
  };

  const moveProject = (fromIndex, toIndex) => {
    const updated = [...projects];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setProjects(updated);
    // localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div className="projects">
      <ul className="project-list">
        <div className="header-line">
          <button onClick={() => setIsInput(true)}>Projects</button>
          <SearchButton />
        </div>

        {isInput && (
          <li className="new-project-input-item">
            <input
              className="input"
              type="text"
              value={projectName}
              onChange={handleInputChange}
              placeholder="Proje Adı Girin"
            />
            <button onClick={handleSaveProject}>Add</button>
          </li>
        )}

        {(filteredProjects || projects).map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            id={project.id}
            index={index}
            editableProject={editableProject}
            editedProjectName={editedProjectName}
            handleEditInputChange={handleEditInputChange}
            handleSaveEdit={handleSaveEdit}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            moveProject={moveProject}
          />
        ))}
      </ul>
    </div>
  );
}

export default Project;
