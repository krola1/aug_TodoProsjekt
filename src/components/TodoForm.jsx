import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo: onAdd } = useTodo();

  // onsubit for preventing reload and add
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
