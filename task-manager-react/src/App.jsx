import { useState } from "react";
// Added additional imports for the components I created
import FilterButtons from "./components/FilterButtons";
import TaskCounter from "./components/TaskCounter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

// Main Application Component
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

  // Render Application
  return (
    <div>
      <header>
        {/* Left Side: Adding Menu icon + Search Bar in header */}
        <section>
          <img src="/img_assets/menu_icon.png" alt="Menu" />
          <input type="text" id="search-bar" placeholder="Quick Find" />
        </section>

        {/* Right side of the header: Check Icon + Task Counts */}
        <section className="header-right">
          <img
            className="check-icon"
            src="/img_assets/check_icon.png"
            alt="Completed Tasks"
          />
          {/* Rendering Task Counter Components */}
          <TaskCounter allTasks={tasks} />
        </section>
      </header>

      <section className="container">
        <nav>
          <ul>
            <li>
              <img src="/img_assets/inbox_icon.png" alt="Inbox" />
              <span>Inbox</span>
              <span className="task-count">{tasks.length}</span>
            </li>
            <li>
              <img src="/img_assets/calendar_icon.png" alt="Today" />
              <span>Today</span>
              <span className="task-count">5</span>
            </li>
            <li>
              <img src="/img_assets/upcoming_icon.png" alt="Upcoming" />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>

        <main>
          <h1>Inbox</h1>
          <TaskForm onAddTask={addTask} />

          <div className="filter-buttons">
            {/* Added filter components to add it to the page render */}
            <FilterButtons filter={filter} setFilter={setFilter} />
          </div>

          {/* Updated Task List to account for filtered list */}
          <TaskList
            tasks={filteredTasks}
            filter={filter} // Added filter to customize messages depending on the state
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </section>
    </div>
  );
}

export default App;
