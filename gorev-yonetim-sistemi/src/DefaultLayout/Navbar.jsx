import React from "react";
import { GoPlus } from "react-icons/go";
import { PiUserCircleGearLight } from "react-icons/pi";

function Navbar() {
  return (
    <div className="projectsPage-container">
      <div className="add-delete-list-bar">
        <ul>
          <li>
            <button
              className="add-project-button"
              onClick={handleStartAddProject}
            >
              <GoPlus /> Add Project
            </button>
          </li>
          <li>
            <button> List </button>
          </li>
          <li>
            <button> Board </button>
          </li>
          <li>
            <button>Calendar</button>
          </li>
          <li>
            <button>Table</button>
          </li>
        </ul>
      </div>
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
              <span>{projectName}</span>
              {editable ? (
                <>
                  <input
                    type="text"
                    value={editedProjectName}
                    onChange={handleEditInputChange}
                    placeholder="Proje Adı Düzenle"
                  />
                  <button onClick={() => handleSaveEdit(projectName)}>
                    OK
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditClick(project)}>Edit</button>
                </>
              )}
              <button onClick={() => handleDeleteClick(project)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
