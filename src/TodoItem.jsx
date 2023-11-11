import React from "react";

function TodoItem({ item, onMarkComplete, onRemove }) {
  return (
    <div className={`singleTodoItem ${item.completed ? "completed" : ""}`}>
      <div>
        <button className="markCompleteTodoItem" onClick={onMarkComplete}>
          Complete
        </button>
        <button className="removeTodoItem" onClick={onRemove}>
          X
        </button>
      </div>
      <span>{item.text}</span>
    </div>
  );
}

export default TodoItem;
