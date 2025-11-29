import React, { useState, useEffect } from "react";
import { LuCircleDashed } from "react-icons/lu";
import "../css/StatusIcon.css";

function StatusIcon({ itemId, currentStatus, handleStatusChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocalStatusChange = (newStatus) => {
    handleStatusChange(itemId, newStatus);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        !event.target.closest(".status-container") &&
        !event.target.closest(".dropdown-status")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen)
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
          document.getElementById("in-progress").focus();
        }
        if (e.key === "ArrowDown") {
          document.getElementById("completed").focus();
        }
      });
  }, [isDropdownOpen]);
  const statusClass = `status-${currentStatus}`;

  return (
    <div className="status-container">
      <button
        className={`status-button ${statusClass}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <LuCircleDashed />
      </button>

      {isDropdownOpen && (
        <div className="dropdown-status">
          <button
            className="in-progress"
            onClick={() => handleLocalStatusChange("in-progress")}
            id="in-progress"
          >
            <LuCircleDashed
              style={{ backgroundColor: "rgba(255, 255, 218, 1)" }}
            />
            In Progress
          </button>
          <button
            className="completed"
            onClick={() => handleLocalStatusChange("completed")}
            id="completed"
          >
            <LuCircleDashed style={{ backgroundColor: "rgb(255,192,110)" }} />
            Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default StatusIcon;
