import { useState } from 'react'
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleCompleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm
          inputText={inputText}
          setInputText={setInputText}
          handleAddItem={handleAddItem}
        />
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onMarkComplete={() => handleCompleteItem(index)}
            onRemove={() => handleRemoveItem(index)}
          />
        ))}
      </div>
    </div>
  );

}

export default App
