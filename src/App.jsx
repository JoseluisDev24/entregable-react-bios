import { Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp";
import EditTask from "./components/pages/EditTask/EditTask";
function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/" element={<TodoApp />} />

      <Route path="/edit-task" element={<EditTask />} />
    </Routes>
  );
}

export default App;
