// Shows current and total number of tasks, as well as completed/active counts
function TaskCounter({ allTasks = [] }) {
  // Calculation for the Visible tasks in the current filtered view
  const total = allTasks.length;
  const completed = allTasks.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="task-counter stack">
      {/* Show filtered view count out of total + adding icon with it */}
      <span className="task-counter-ratio">
        {completed}/{total}
      </span>

      {/* Shows # of completed Tasks versus Active tasks */}
      <span className="task-counter-sub">
        Completed: {completed} · Active: {active}
      </span>
    </div>
  );
}

// Makes component available in other files
export default TaskCounter;
