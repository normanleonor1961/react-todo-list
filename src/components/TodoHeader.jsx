import React, { useState } from "react";

export default function TodoHeader({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div>
        <input
          id="new-task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
          placeholder="What do you have planned?"
          style={{ width: "600px" }}
        />
        <button id="new-task-submit">Add todo</button>
      </div>
    </form>
  );
}
