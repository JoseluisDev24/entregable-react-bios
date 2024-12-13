import { useState, useEffect } from "react";
import Title from "../Title/Title";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";



const TodoApp = ({tasks, setTasks}) => {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 font-inter">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoForm tasks={tasks} setTasks={setTasks} />
        <TodoList>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </TodoList>
        <Footer tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default TodoApp;
