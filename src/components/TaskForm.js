import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskListContext";

// TaskForm component
const TaskForm = () => {
  // Retrieve the necessary functions and state variables from the TaskContext
  const { addTask, clearTask, editTitle, editTask } = useContext(TaskContext);

  // Declare a state variable called taskTitle and a function to update it called setTaskTitle
  const [taskTitle, setTaskTitle] = useState("");

  // Function to handle changes to the input field value
  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  // Function to handle submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // If there is no task being edited, call the addTask function with the taskTitle and reset taskTitle to an empty string
    if (editTitle === null) {
      addTask(taskTitle);
      setTaskTitle("");
    }
    // If there is a task being edited, call the editTask function with the updated taskTitle and the ID of the task being edited
    else {
      editTask(taskTitle, editTitle.id);
    }
  };

  // useEffect hook to update the taskTitle state variable when the editTitle state variable changes
  useEffect(() => {
    if (editTitle !== null) {
      setTaskTitle(editTitle.title);
    } else {
      setTaskTitle("");
    }
  }, [editTitle]);

  // Return the JSX for the TaskForm component
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={taskTitle}
        className="task-input"
        placeholder="Add Task"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editTitle ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clearTask}>
          Clear
        </button>
      </div>
    </form>
  );
};

// Export the TaskForm component
export default TaskForm;
