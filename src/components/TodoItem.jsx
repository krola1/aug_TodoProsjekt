import { useState } from "react";

export default function TodoItem({ title, id, createdAt, completed }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="wrapper">
      <p>{createdAt}</p>
      <h3>{title}</h3>
      <label>
        completed <input type="checkbox" checked={completed} />
      </label>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button>Delete</button>
    </div>
  );
}
