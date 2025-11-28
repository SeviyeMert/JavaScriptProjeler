import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StateContext } from "../Contexts/StateContext";
import "../css/Tasks.css";
import SearchButton from "./SearchButton";
// import TaskItem from "./TaskItem.jsx";
import ListItem from "./ListItem";
import { IoCloseSharp } from "react-icons/io5";
import AddProjectTaskButton from "./AddProjectButton";

function Tasks() {
  const { projectId } = useParams();

  const navigate = useNavigate();
  const projectName = "Tasks";

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
    searchVal,
    setSearchVal,
    filteredTasks,
    setFilteredTasks,
  } = useContext(StateContext);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, [setTasks]);

  const handleAddTask = () => {
    setIsInput(true);
    setTaskName("");
  };

  const handleSaveTask = () => {
    if (!taskName.trim()) return;
    const newTaskId = Date.now();
    const newTask = {
      id: newTaskId,
      projectId: projectId,
      name: taskName,
      status: "default",
    };

    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTaskName("");
    setIsInput(false);
  };

  const handleCancelInput = () => {
    setIsInput(false);
    setTaskName("");
  };

  const handleCancelEdit = () => {
    setEditableTask(null);
    setEditedTaskName("");
  };

  const handleDeleteClick = (taskToDelete) => {
    const updated = tasks.filter((t) => t && t.id !== taskToDelete.id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
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

  const handleGoBackToProjects = () => {
    navigate("/projects");
  };

  const moveTasks = (fromIndex, toIndex) => {
    const newTasks = [...tasks];
    const [moveTask] = newTasks.splice(fromIndex, 1);
    newTasks.splice(toIndex, 0, moveTask);

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="tasks">
      <ul className="tasks-list">
        <div className="header-line">
          <button onClick={() => setIsInput(true)}>{projectName}</button>
          <div className="tasks-search-close">
            <SearchButton
              searchVal={searchVal}
              setSearchVal={setSearchVal}
              setFilteredItems={setFilteredTasks}
              filterItems={filteredTasks}
            />
            <button
              className="close-tasks-button"
              onClick={handleGoBackToProjects}
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>

        {isInput && (
          <li className="new-task-input-item">
            <input
              className="input"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter new task..."
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSaveTask();
                if (e.key === "Escape") handleCancelInput();
              }}
            />
            <button onClick={handleSaveTask}>Add Task</button>
            <button onClick={handleCancelInput}>
              <IoCloseSharp />
            </button>
          </li>
        )}

        {filteredTasks.map((task, index) => (
          <ListItem
            key={task.id}
            item={task}
            index={index}
            editableItem={editableTask}
            editedItemName={editedTaskName}
            handleEditInputChange={handleEditInputChange}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handleStatusChange={handleStatusChange}
            moveProjects={moveTasks}
            hasCommentButton={false}
          />
        ))}
      </ul>

      <div className="add-project-wrapper">
        <AddProjectTaskButton onClick={handleAddTask} text="Add Task" />
      </div>
    </div>
  );
}

export default Tasks;
