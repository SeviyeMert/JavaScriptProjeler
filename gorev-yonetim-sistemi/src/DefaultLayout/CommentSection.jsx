import React, { useContext, useState } from "react";
import { StateContext } from "../Contexts/StateContext";
import { FiSend } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

function CommentSection() {
  const {
    selectedProjectForComment,
    setIsCommentSectionOpen,
    setSelectedProjectForComment,
    projects,
    setProjects,
  } = useContext(StateContext);
  const [newComment, setNewComment] = useState("");

  const handleCloseCommend = () => {
    setIsCommentSectionOpen(false);
    setSelectedProjectForComment(null);
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !selectedProjectForComment) return;

    const commentObject = {
      id: Date.now(),
      text: newComment.trim(),
      date: new Date().toLocaleString(),
    };

    const updatedProjects = projects.map((p) => {
      if (p.id === selectedProjectForComment.id) {
        const updatedComments = [commentObject, ...(p.comments || [])];
        return { ...p, comments: updatedComments };
      }
      return p;
    });

    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setNewComment("");
  };

  const currentProject = projects.find(
    (p) => p.id === selectedProjectForComment?.id
  );
  const comments = currentProject ? currentProject.comments || [] : [];

  return (
    <div className="comment-section">
      <div className="comment-header">
        <h3>{selectedProjectForComment?.name} Yorumları</h3>
        <button className="close-button" onClick={handleCloseCommend}>
          <IoCloseSharp size={20} />
        </button>
      </div>
      <div className="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p>{comment.text}</p>
              <small> - {comment.date}</small>
            </div>
          ))
        )}
      </div>
      <div className="comment-input-area">
        <input
          type="text"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="send-button" onClick={handleAddComment}>
          <FiSend />
        </button>
      </div>
    </div>
  );
}

export default CommentSection;
