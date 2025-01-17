import React from "react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

//creando el contexto
const Context = createContext();

export function ContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch("https://back-next-js.vercel.app/api/tasks");
      const data = await response.json();
      setTasks(data);
    };
    getTasks();
  }, []);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export const useContextProvider = () => useContext(Context);
