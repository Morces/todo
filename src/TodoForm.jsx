import React from "react";

function TodoForm({ inputText, setInputText, handleAddItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="itemInput"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="addItemButton" type="submit">
        Add Item
      </button>
    </form>
  );
}

export default TodoForm;
