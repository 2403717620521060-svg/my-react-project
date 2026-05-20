import { useState } from "react";
import "./App.css";

function App() {
  const [destination, setDestination] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (destination.trim() === "") {
      setError("Please enter a destination");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: destination,
    };

    setTasks([...tasks, newTask]);
    setDestination("");
    setError("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>AI Travel Planner</h1>

      <div className="form-box">
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <button onClick={addTask}>Add Plan</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="task-list">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <span>{task.name}</span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;