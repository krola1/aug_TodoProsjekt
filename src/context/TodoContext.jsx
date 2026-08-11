/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { todoTemplate } from "../utils/todoTemplate";

const TodoContext = createContext(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo must be called inside a provider");
  }
  return context;
};

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([todoTemplate()]);

  const addTodo = (text) => {
    setTodos((prev) => [prev, todoTemplate(text)]);
  };

  const value = {
    todos,
    addTodo,
  };
  return <TodoContext value={{ ...value }}>{children}</TodoContext>;
}
