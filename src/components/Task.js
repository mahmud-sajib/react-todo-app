import React, { useContext } from "react";
import { TaskContext } from "../context/TaskListContext";

// Define a functional component called "Task" that receives a "task" object as a prop
const Task = ({ task }) => {
  // Destructure "deleteTask" and "findTask" functions from the TaskContext
  const { deleteTask, findTask } = useContext(TaskContext);

  // Render the following JSX markup
  return (
    <>
      <li className="list-item">
        <span>{task.title}</span>
        <div>
          <button
            className="btn-delete task-btn"
            // When the "Delete" button is clicked, invoke the "deleteTask" function with the ID of the current task
            onClick={() => deleteTask(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="btn-edit task-btn"
            // When the "Edit" button is clicked, invoke the "findTask" function with the ID of the current task
            onClick={() => findTask(task.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </>
  );
};

// Export the Task component as the default export
export default Task;
