import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("low");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, priority }]);
      setNewTodo("");
      setPriority("low");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 border-red-500";
      case "medium":
        return "bg-yellow-100 border-yellow-500";
      case "low":
        return "bg-green-100 border-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Todo List
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            className="border flex-grow p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <select
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            onClick={addTodo}
          >
            Save
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 border rounded-lg ${getPriorityClass(
                todo.priority
              )}`}
            >
              <span className="flex-grow text-gray-800">{todo.text}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
