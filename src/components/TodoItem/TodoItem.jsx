import React from "react";

function TodoItem({ task }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center">
        <span className="border border-solid border-gray-500 rounded-full p-3 cursor-pointer"></span>
        <p className="pl-3">{task.name}</p>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
          src="edit.svg"
          alt="close icon"
        />
        <img
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
          src="close.svg"
          alt="close icon"
        />
      </div>
    </div>
  );
}

export default TodoItem;
