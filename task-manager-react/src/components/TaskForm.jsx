import { useState } from "react";

// Form component to add new tasks
function TaskForm({ onAddTask }) {
  // Setting up local state for task input from user
  const [taskText, setTaskText] = useState("");

  // Update state every time the user types
  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  // Takes care of form submission when the user adds a task
  const handleSubmit = (event) => {
    // Given in write up, to stop form from refreshing page
    event.preventDefault();
    // Checking for empty/whitespace input and ignoring
    // (Empty task validation)
    if (taskText.trim() === "") {
      return;
    }
    // Sending valid task to add it to our list
    onAddTask(taskText);
    // Clears the text input after submitting
    setTaskText("");
  };

  // JSX Rendering Code:
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {/* Added input to type in task text */}
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleChange} // Updates task text on each char of input
      />
      {/* Added button to add task */}
      <button type="submit">Add</button>
    </form>
  );
}

// Makes component available in other files
export default TaskForm;
