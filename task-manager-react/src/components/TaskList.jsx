import TaskItem from "./TaskItem";

// Shows list of tasks (if there are any) + message if empty (depending on filter state)
function TaskList({ tasks, onToggle, onDelete, filter = "all" }) {
  // If the tasks arr is empty, display no tasks message
  if (tasks.length === 0) {
    // Added custom messages depending on the filter set
    const message =
      filter === "active"
        ? "No active tasks yet!"
        : filter === "completed"
        ? "No completed tasks yet!"
        : "No tasks yet!";

    return (
      <div className="empty-state" role="status" aria-live="polite">
        <p className="empty-title">{message}</p>
      </div>
    );
  }
  // Else: render list of TaskItem components
  return (
    <ul>
      {/* Using .map to loop through each task and render its corresponding TaskItem */}
      {tasks.map((task) => (
        // Added each items unique key prop (as per assignment)
        <li key={task.id}>
          {/* Using task data/handlers to create TaskItem */}
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

// Makes component available in other files
export default TaskList;
