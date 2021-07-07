import React, { useState } from "react";

export const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: [item]
    });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Welcome To My Todo List</h1>
        <input onChange={handleChanges} value={item} />
        <button>Add Item</button>
        <button onClick={clearCompleted}>Clear Item</button>
      </form>
    </div>
  );
};
