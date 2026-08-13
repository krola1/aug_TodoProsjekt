import { SORTS } from "../constants/sort";
import { useTodo } from "../context/TodoContext";

export default function TodoSort() {
  const { sort, setSort } = useTodo();

  return (
    <select value={sort} onChange={(e) => setSort(e.target.value)}>
      {SORTS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
