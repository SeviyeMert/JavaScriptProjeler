import React, { useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { useDrag, useDrop } from "react-dnd";
import StatusIcon from "./StatusIcon";
import CommentButton from "./CommentButton";
import { useNavigate } from "react-router-dom";

function ListItem({
  item,
  index,
  editableItem,
  editedItemName,
  handleEditInputChange,
  handleSaveEdit,
  handleEditClick,
  handleCancelEdit,
  handleDeleteClick,
  moveProjects,
  handleStatusChange,
  hasCommentButton = false,
}) {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "row",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "row",
      drop: (item) => {
        const fromIndex = item.index;
        const toIndex = index;

        moveProjects(fromIndex, toIndex);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [index, moveProjects]
  );

  const dragDropRef = drag(drop(ref));

  const handleItemClick = () => {
    navigate(`/projects/tasks/${item.id}`, {
      state: { projectName: item.name },
    });
  };

  const isEditable = editableItem && editableItem.id === item.id;

  return (
    <div className="row">
      <li
        ref={dragDropRef}
        style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
        className="list-item"
      >
        {isEditable ? (
          <>
            <input
              type="text"
              value={editedItemName}
              onChange={handleEditInputChange}
            />
            <div className="item-actions">
              <button className="ok-button" onClick={handleSaveEdit}>
                <TiTick />
              </button>
              <button className="cancel-button" onClick={handleCancelEdit}>
                <IoCloseSharp />
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <StatusIcon
                itemId={item.id}
                currentStatus={item.status || "default"}
                handleStatusChange={handleStatusChange}
              />
              <span onClick={handleItemClick} className="item-name">
                {item.name}
              </span>
            </div>
            <div className="item-actions">
              <button
                className="edit-button"
                onClick={() => handleEditClick(item)}
              >
                <CiEdit />
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteClick(item)}
              >
                <MdDeleteOutline />
              </button>
              {hasCommentButton && <CommentButton project={item} />}
            </div>
          </>
        )}
      </li>
    </div>
  );
}

export default ListItem;
