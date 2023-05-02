// Import React and useContext hook
import React, { useContext } from "react";
// Import the TaskContext from its module
import { TaskContext } from "../context/TaskListContext";
// Import the Task component
import Task from "./Task";

const TaskList = () => {
  // Retrieve the taskList array from the TaskContext
  const { taskList } = useContext(TaskContext);

  return (
    <div>
      {taskList.length > 0 ? ( // Conditional rendering based on the length of the taskList array
        <ul className="list">
          {taskList.map((task) => {
            return <Task task={task} key={task.id} />; // Render a Task component for each task in the taskList array
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div> // If the taskList array is empty, render a "No Tasks" message
      )}
    </div>
  );
};
// Export the TaskList component
export default TaskList;
