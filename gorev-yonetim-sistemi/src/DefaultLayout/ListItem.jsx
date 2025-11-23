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
  moveItem,
  handleStatusChange,
  dragType,
  hasCommentButton = false,
  onItemClick,
}) {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [{ isDragging }, dragRef] = useDrag({
    type: dragType,
    item: { id: item.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: dragType,
    hover: (draggedItem, monitor) => {
      if (!ref.current || draggedItem.index === index || !moveItem) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveItem(dragIndex, hoverIndex);

      draggedItem.index = hoverIndex;
    },
  });

  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick(item);
    } else if (dragType === "item") {
      navigate(`/projects/tasks/${item.id}`, {
        state: { projectName: item.name },
      });
    }
  };

  const isEditable = editableItem && editableItem.id === item.id;

  return (
    <li ref={dragDropRef} style={{ opacity }} className="list-item">
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
          <StatusIcon
            itemId={item.id}
            currentStatus={item.status || "default"}
            handleStatusChange={handleStatusChange}
          />
          <span onClick={handleItemClick} className="item-name">
            {item.name}
          </span>
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
  );
}

export default ListItem;
