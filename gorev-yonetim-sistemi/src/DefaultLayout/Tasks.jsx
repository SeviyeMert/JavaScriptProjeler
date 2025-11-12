import React, { useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../Contexts/StateContext";
import "../css/Tasks.css";
import SearchButton from "./SearchButton";
import TaskItem from "./TaskItem.jsx";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Tasks() {
  const { projectId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const projectName = location.state?.projectName || "Tasks";

  const {
    tasks,
    setTasks,
    taskName,
    setTaskName,
    isInput,
    setIsInput,
    editableTask,
    setEditableTask,
    editedTaskName,
    setEditedTaskName,
    searchValTask,
    setSearchValTask,
    filteredTasks,
    setFilteredTasks,
  } = useContext(StateContext);

  const allProjectTasks = tasks.filter((task) => task.projectId === projectId);

  const tasksToDisplay = searchValTask ? filteredTasks : allProjectTasks;

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, [setTasks]);

  useEffect(() => {
    if (searchValTask && allProjectTasks.length > 0) {
      const results = allProjectTasks.filter((task) =>
        task.name.toLowerCase().includes(searchValTask.toLowerCase())
      );
      setFilteredTasks(results);
    } else {
      setFilteredTasks(allProjectTasks);
    }
  }, [searchValTask, tasks, projectId]);

  const handleSaveTask = () => {
    if (!taskName.trim()) return;
    const newTaskId = Date.now();
    const newTask = {
      id: newTaskId,
      projectId: projectId,
      name: taskName,
      status: "default",
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTaskName("");
    setIsInput(false);
  };

  const handleDeleteClick = (taskToDelete) => {
    const updated = tasks.filter((t) => t && t.id !== taskToDelete.id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    if (searchValTask) {
      setFilteredTasks((prev) => prev.filter((t) => t.id !== taskToDelete.id));
    }
  };

  const handleEditClick = (task) => {
    setEditedTaskName(task.name);
    setEditableTask(task);
  };

  const handleEditInputChange = (e) => setEditedTaskName(e.target.value);

  const handleSaveEdit = () => {
    const updated = tasks.map((t) =>
      t === editableTask ? { ...t, name: editedTaskName } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setEditableTask(null);
    setEditedTaskName("");
  };

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const moveTask = (dragIndex, hoverIndex) => {
    if (searchValTask && searchValTask.trim().length > 0) {
      return;
    }

    const dragTask = allProjectTasks[dragIndex];
    const newProjectTasks = [...allProjectTasks];

    newProjectTasks.splice(dragIndex, 1);
    newProjectTasks.splice(hoverIndex, 0, dragTask);

    const tasksWithoutCurrentProject = tasks.filter(
      (t) => t.projectId !== projectId
    );

    const updatedTasks = [...tasksWithoutCurrentProject, ...newProjectTasks];

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleGoBackToProjects = () => {
    navigate("/projects");
  };

  const TaskSearchButton = () => {
    return (
      <div className="search-button">
        <input
          type="text"
          placeholder="search tasks"
          value={searchValTask}
          onChange={(e) => setSearchValTask(e.target.value)}
        />
        <IoSearchSharp />
      </div>
    );
  };

  return (
    <div className="tasks">
      <ul className="tasks-list">
        <div className="header-line">
          <button onClick={() => setIsInput(true)}>{projectName} Tasks</button>
          <TaskSearchButton />
          <button
            className="close-tasks-button"
            onClick={handleGoBackToProjects}
          >
            <IoCloseSharp />
          </button>
        </div>

        {isInput && (
          <li className="new-task-input-item">
            <input
              className="input"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Yeni Görev Adı Girin"
            />
            <button onClick={handleSaveTask}>Add Task</button>
          </li>
        )}

        {tasksToDisplay
          .filter((task) => task != null)
          .map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              editableTask={editableTask}
              editedTaskName={editedTaskName}
              handleEditInputChange={handleEditInputChange}
              handleSaveEdit={handleSaveEdit}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              handleStatusChange={handleStatusChange}
              moveTask={moveTask}
            />
          ))}
      </ul>
    </div>
  );
}

export default Tasks;
