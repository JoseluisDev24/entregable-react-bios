import { Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp";
import EditTask from "./components/pages/EditTask/EditTask";
import { useState, useEffect } from "react";

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
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/" element={<TodoApp tasks={tasks} setTasks={setTasks} />} />

      <Route path="/edit-task" element={<EditTask tasks={tasks} />} />
    </Routes>
  );
}

export default App;
