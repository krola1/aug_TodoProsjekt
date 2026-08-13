/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { todoTemplate } from "../utils/todoTemplate";
import { FILTER } from "../constants/filter";
import { filterTodos } from "../utils/filterTodos";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SORT } from "../constants/sort";
import { sortTodos } from "../utils/sortTodos";
//initializing contex
const TodoContext = createContext(undefined);

//hook for ease of use
export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo must be called inside a provider");
  }
  return context;
};
//provider
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todoList_aug");

  //------------Functions-----------------------------
  const addTodo = (text) => {
    setTodos((prev) => [...prev, todoTemplate(text)]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => id !== todo.id));
  };

  const toggleTodo = (id, key) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, [key]: !todo[key] } : todo,
      ),
    );
  };
  //-----------------------------------
  const [filter, setFilter] = useState(FILTER.ALL);
  const [sort, setSort] = useState(SORT.NEWEST);

  const filteredTodos = filterTodos(todos, filter);
  const visibleTodos = sortTodos(filteredTodos, sort);

  //-------------Transporter obj
  const value = {
    setFilter,
    visibleTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    sort,
    setSort,
  };
  return <TodoContext value={{ ...value }}>{children}</TodoContext>;
}
