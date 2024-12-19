import React from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../ContextProvider/ContextProvider";

function TodoItem({ task }) {
  const { tasks, setTasks } = useContextProvider();
  const handleDeleteTask = async (id) => {
    const url = `http://localhost:5137/todos/tasks/${id}`;
    try {
      const response = await fetch(url, { method: "DELETE" });

      if (response.ok) {
        setTasks((tasks) => tasks.filter((task) => task._id !== id));
      } else {
        console.error("Error deleting task:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSetCompleted = async (id, isCompleted) => {
    const url = `http://localhost:5137/todos/tasks/${id}`;

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !isCompleted }),
      });

      if (response.ok) {
        const updatedTask = await response.json();

        setTasks((tasks) =>
          tasks.map((task) =>
            task._id === id
              ? { ...task, isCompleted: updatedTask.isCompleted }
              : task
          )
        );
      } else {
        console.error("Error updating task:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center">
        {task.isCompleted ? (
          <div
            className="bg-green-700 rounded-full border border-transparent p-1 cursor-pointer"
            onClick={() => handleSetCompleted(task._id)}
          >
            <img className="h-4 w-4" src="check.svg" alt="check icon" />
          </div>
        ) : (
          <span
            className="border border-solid border-gray-500 rounded-full p-3 cursor-pointer"
            onClick={() => handleSetCompleted(task._id)}
          ></span>
        )}

        <p className={`pl-3 ${task.isCompleted && "line-through"}`}>
          {task.title}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Link to={`edit-task`}>
          <img
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
            src="edit.svg"
            alt="edit icon"
          />
        </Link>
        <img
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
          src="close.svg"
          alt="delete icon"
          onClick={() => handleDeleteTask(task._id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
