import React, { useState } from "react";

function TaskNote({ task, onClose, onSave }) {
  const [taskName, setTaskName] = useState(task.name);
  const [noteContent, setNoteContent] = useState(task.noteContent || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleAction = () => {
    if (isEditing) {
      onSave(task.id, taskName, noteContent);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h2>{taskName}</h2>
        <button onClick={onClose}>X</button>

        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          disabled={!isEditing}
          style={{
            fontSize: "1.5em",
            padding: "5px",
            border: isEditing ? "1px solid #555" : "none",
          }}
        />

        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Buraya notlarınızı yazın..."
          readOnly={!isEditing}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <button onClick={handleAction}>
            {isEditing ? "Kaydet" : "Düzenle"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskNote;
