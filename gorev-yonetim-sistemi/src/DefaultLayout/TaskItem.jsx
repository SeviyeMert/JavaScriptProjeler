import React, { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import TaskStatusIcon from "./TaskStatusIcon.jsx";
import { useDrag, useDrop } from "react-dnd";

function TaskItem({
  task,
  index,
  editableTask,
  editedTaskName,
  handleEditInputChange,
  handleSaveEdit,
  handleEditClick,
  handleDeleteClick,
  moveTask,
  handleStatusChange,
}) {
  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "taskItem",
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "taskItem",
    hover: (item, monitor) => {
      if (!ref.current || item.index === index || !moveTask) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveTask(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  return (
    <li ref={dragDropRef} style={{ opacity }} className="task-item">
      {editableTask && editableTask.id === task.id ? (
        <>
          <input
            type="text"
            value={editedTaskName}
            onChange={handleEditInputChange}
          />
          <div className="task-actions">
            <button className="ok-button" onClick={handleSaveEdit}>
              <TiTick />
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteClick(task)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </>
      ) : (
        <>
          <TaskStatusIcon
            task={task}
            currentStatus={task.status || "default"}
            handleStatusChange={handleStatusChange}
          />
          <span className="task-name">{task.name}</span>
          <div className="task-actions">
            <button
              className="edit-button"
              onClick={() => handleEditClick(task)}
            >
              <CiEdit />
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteClick(task)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
