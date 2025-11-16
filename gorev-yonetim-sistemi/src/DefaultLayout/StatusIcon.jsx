import React, { useState } from "react";
import { LuCircleDashed } from "react-icons/lu";
import "../css/ProjectStatusIcon.css";

function StatusIcon() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocalStatusChange = (newStatus) => {
    handleLocalStatusChange(itemId, newStatus);
    setIsDropdownOpen(false);
  };

  const statusClass = "status-${currentStatus}";

  return (
    <div className="status-container">
      <button
        className={"status-button ${statusClass"}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <LuCircleDashed />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-status">
          <button
            className="in-progress"
            onClick={() => handleLocalStatusChange("in-progress")}
          >
            <LuCircleDashed style={{ backgroundColor: "rgb(255,255,125" }} />
            In Progress
          </button>
          <button
            className="completed"
            onClick={() => handleLocalStatusChange("completed")}
          >
            <LuCircleDashed style={{ backgroundColor: "rgb(255,192,110" }} />
            Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default StatusIcon;
