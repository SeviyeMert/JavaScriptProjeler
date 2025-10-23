import React, { useContext } from "react";
import { StateContext } from "../Contexts/StateContext";

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
  } = useContext(StateContext);

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSaveProject = () => {
    setProjects([...projects, projectName]);
    setProjectName("");
    setIsInput(false);
  };

  const handleDeleteClick = (projectDelete) => {
    setProjects((prev) => prev.filter((p) => p !== projectDelete));
  };

  const handleEditClick = (project) => {
    setEditedProjectName(project);
    setEditableProject(project);
  };

  const handleEditInputChange = (e) => {
    setEditedProjectName(e.target.value);
  };

  const handleSaveEdit = () => {
    setProjects((prev) =>
      prev.map((p) => (p === editableProject ? editedProjectName : p))
    );
    setEditableProject(null);
    setEditedProjectName("");
  };

  return (
    <div className="projects">
      <ul className="project-list">
        {isInput && (
          <li className="new-project-input-item">
            <input
              type="text"
              value={projectName}
              onChange={handleInputChange}
              placeholder="Proje Adı Girin"
            />
            <button onClick={handleSaveProject}>Add</button>
          </li>
        )}

        {projects.map((project) => (
          <li key={project}>
            {editableProject === project ? (
              <>
                <input
                  type="text"
                  value={editedProjectName}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => handleSaveEdit(project)}>OK</button>
                <button onClick={() => handleDeleteClick(project)}>
                  Delete
                </button>
              </>
            ) : (
              <>
                <span>{project}</span>
                <button onClick={() => handleEditClick(project)}>Edit</button>
                <button onClick={() => handleDeleteClick(project)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
