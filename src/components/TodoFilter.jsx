import { FILTERS } from "../constants/filter";
import { useTodo } from "../context/TodoContext";
export default function TodoFilter() {
  const { filter, setFilter } = useTodo();
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      {FILTERS.map((filter) => (
        <option key={filter.value} value={filter.value}>
          {filter.label}
        </option>
      ))}
    </select>
  );
}
