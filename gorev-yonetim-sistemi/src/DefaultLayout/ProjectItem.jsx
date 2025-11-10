import React, { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import { useDrag, useDrop } from "react-dnd";
import ProjectStatusIcon from "./ProjectStatusIcon";
import { useNavigate } from "react-router-dom";

function ProjectItem({
  project,
  index,
  editableProject,
  editedProjectName,
  handleEditInputChange,
  handleSaveEdit,
  handleEditClick,
  handleDeleteClick,
  moveProject,
  handleStatusChange,
}) {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { id: project.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveProject(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  const handleProjectClick = () => {
    navigate(`/tasks/${project.id}`, { state: { projectName: project.name } });
  };

  return (
    <li ref={dragDropRef} style={{ opacity }}>
      {editableProject === project ? (
        <>
          <input
            type="text"
            value={editedProjectName}
            onChange={handleEditInputChange}
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
          <ProjectStatusIcon
            project={project}
            currentStatus={project.status || "default"}
            handleStatusChange={handleStatusChange}
          />
          <span onClick={handleProjectClick}>{project.name}</span>
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
