import { useState } from "react";
import "./App.css";

// Example component structure -> from assignment write up
function App() {
  // Added useState to keep track of task array
  const [tasks, setTasks] = useState([]);
  // Added useState to keep track of filter state -> default val: "all"
  const [filter, setFilter] = useState("all");

  // Add new task to state
  const addTask = (taskText) => {
    // Creating new task obj with id, text, and completion status
    const newTask = { id: Date.now(), text: taskText, completed: false };
    // Creating new arr with prev tasks + new one
    const updatedTaskArr = [...tasks, newTask];
    // Update state with updated array
    setTasks(updatedTaskArr);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    // Using map, we check if task id matches given id
    const updatedTaskArr = tasks.map(
      (task) =>
        // If it does, switch completion to opposite state
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      // Otherwise, return unmodified task
    );
    // Update state with updated array
    setTasks(updatedTaskArr);
  };

  // Remove task from state
  const deleteTask = (id) => {
    // Filter tasks to build array w/o task we want to delete (via id)
    const updatedTaskArr = tasks.filter((task) => task.id !== id);
    // Update state with updated array
    setTasks(updatedTaskArr);
  };

  // Filtering Tasks (using code given in readme file)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all'
  });

  return (
    <div className="app">
      <TaskForm onAddTask={addTask} />
      <TaskCounter tasks={tasks} />
      {/* Updated Task List to account for filtered list */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
