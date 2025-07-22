import React, { useState } from "react";

function App() {
  const [todos, setToDos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    setToDos([{ text: task }, ...todos]); // store as object
    setTask("");
  };

  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setToDos(newTodos);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedText(todos[index].text);
  };

  const handleSave = (index) => {
    const updated = [...todos];
    updated[index].text = editedText;
    setToDos(updated);
    setEditingIndex(null);
    setEditedText("");
  };

  return (
    <div className="p-6 max-w-md text-center mx-auto">
      <h1 className="text-4xl font-bold mb-4">My To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-white px-4 py-2 rounded-md shadow-md flex justify-between items-center border"
          >
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-400 rounded mr-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(index)}
                    className="text-green-600 hover:text-green-800 font-semibold"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="flex-1 text-left">{todo.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-600 hover:text-yellow-800 font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
