import { useState } from "react";
import { useTodo } from "../context/TodoContext";

//.......................................
export default function TodoItem({ title, id, createdAt, completed }) {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTodo: onDelete, toggleTodo: onToggle } = useTodo();

  const date = new Date(createdAt).toLocaleDateString();

  //----------------------------------------------------
  return (
    <div className="wrapper">
      <p>{date}</p>
      <h3>{title}</h3>
      <label>
        completed
        <input
          onChange={() => onToggle(id, "completed")}
          type="checkbox"
          checked={completed}
        />
      </label>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
