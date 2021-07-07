import React from "react";

export function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  return (
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "completed" : ""}`}
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <h3>{todo.item}</h3>
    </div>
  );
}
