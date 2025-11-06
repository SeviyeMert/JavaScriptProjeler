import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function ProjectItem({
  project,
  index,
  isEditing,
  editableProject,
  editedProjectName,
  handleEditInputChange,
  handleSaveEdit,
  handleEditClick,
  handleDeleteClick,
  moveProject,
}) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "PROJECT",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop(() => ({
    accept: "PROJECT",
    hover: (item, monitor) => {
      if (item.index === index) {
        return;
      }

      moveProject(item.index, index);
    },
  }));
  return (
    <li ref={(node) => dragRef(dropRef(node))}>
      {editableProject === project ? (
        <>
          <input
            type="text"
            value={editedProjectName}
            onChange={handleEditInputChange}
            style={{ flex: 1, marginRight: "10px" }}
          />
          <div>
            <button className="ok-button" onClick={handleSaveEdit}>
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
          <span>{project.name}</span>
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
  );
}

export default ProjectItem;
