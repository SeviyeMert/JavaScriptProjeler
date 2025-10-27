import React, { useContext, useEffect } from "react";
import { StateContext } from "../Contexts/StateContext";
import "../css/Project.css";
import SearchButton from "./SearchButton";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

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

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSaveProject = () => {
    setProjects([...projects, projectName]);
    localStorage.setItem(
      "projects",
      JSON.stringify([...projects, projectName])
    );
    setProjectName("");
    setIsInput(false);
  };

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  const handleDeleteClick = (projectDelete) => {
    setProjects((prev) => {
      const updatedProjects = prev.filter((p) => p !== projectDelete);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return updatedProjects;
    });
  };

  const handleEditClick = (project) => {
    setEditedProjectName(project);
    setEditableProject(project);
  };

  const handleEditInputChange = (e) => {
    setEditedProjectName(e.target.value);
  };

  const handleSaveEdit = () => {
    setProjects((prev) => {
      const updatedProjects = prev.map((p) =>
        p === editableProject ? editedProjectName : p
      );
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return updatedProjects;
    });
    setEditableProject(null);
    setEditedProjectName("");
  };

  return (
    <div className="projects">
      <ul className="project-list">
        <div className="header-line">
          <button>Projects</button>
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

        {(filteredProjects || projects).map((project) => (
          <li key={project}>
            {editableProject === project ? (
              <>
                <input
                  type="text"
                  value={editedProjectName}
                  onChange={handleEditInputChange}
                />
                <div>
                  <button
                    className="ok-button"
                    onClick={() => handleSaveEdit(project)}
                  >
                    <TiTick />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteClick(project)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{project}</span>
                <div>
                  <button
                    className="edit-button"
                    onClick={() => handleEditClick(project)}
                  >
                    <CiEdit />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteClick(project)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
