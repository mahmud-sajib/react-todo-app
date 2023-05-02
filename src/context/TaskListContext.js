// Import necessary modules from React and uuid
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Create a context object to pass state down the component tree
const TaskContext = React.createContext();

// Define a functional component that provides state and methods for tasks
const TaskContextProvider = (props) => {
  // Load tasks from local storage or create an empty array if none exist
  const initialtaskListState =
    JSON.parse(localStorage.getItem("taskList")) || [];

  // Set state for the task list and a variable to track the task being edited
  const [taskList, setTaskList] = useState(initialtaskListState);
  const [editTitle, setEditTitle] = useState(null);

  // Update local storage when the task list state changes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // Function to add a new task to the list
  const addTask = (taskTitle) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { title: taskTitle, id: uuidv4() }];
    });
  };

  // Function to delete a task from the list
  const deleteTask = (id) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => task.id !== id);
    });
  };

  // Function to clear all tasks from the list
  const clearTask = () => {
    setTaskList([]);
  };

  // Function to find a task in the list by its ID
  const findTask = (id) => {
    setEditTitle(taskList.find((task) => task.id === id));
  };

  // Function to edit the title of a task in the list
  const editTask = (title, id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => (task.id === id ? { title, id } : task))
    );
    setEditTitle(null);
  };

  // Pass down the state and functions as values to the context provider
  return (
    <TaskContext.Provider
      value={{
        taskList,
        editTitle,
        addTask,
        deleteTask,
        clearTask,
        findTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

// Export the context object and provider component
export { TaskContext, TaskContextProvider };
