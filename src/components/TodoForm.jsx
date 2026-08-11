import { useState } from "react";

export default function TodoForm() {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
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
