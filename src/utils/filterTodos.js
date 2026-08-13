import { FILTER } from "../constants/filter";
export const filterTodos = (list, filter) => {
  if (filter === FILTER.COMPLETED) return list.filter((todo) => todo.completed);
  if (filter === FILTER.ACTIVE) return list.filter((todo) => !todo.completed);
  return list;
};
