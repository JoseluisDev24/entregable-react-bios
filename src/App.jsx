import "./App.css";
import { useState, useEffect, Route, Routes } from "react";
import Title from "./components/Title/Title";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTasks(data);
    };
    getTasks();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5 font-inter">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoForm setTasks={setTasks} />
        <TodoList>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </TodoList>
        <Footer />
      </div>
    </div>
  );
}

export default App;
