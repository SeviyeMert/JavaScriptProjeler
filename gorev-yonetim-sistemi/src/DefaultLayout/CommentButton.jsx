import React, { useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { StateContext } from "../Contexts/StateContext";

function CommentButton({ project }) {
  const { setIsCommentSectionOpen, setSelectedProjectForComment } =
    useContext(StateContext);

  const handleCommentClick = () => {
    setIsCommentSectionOpen(true);
    setSelectedProjectForComment(project);
  };

  return (
    <button onClick={handleCommentClick}>
      <FaRegCommentDots />
    </button>
  );
}

export default CommentButton;
