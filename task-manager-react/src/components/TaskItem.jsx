// Creates individual tasks with check box + delete button
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <>
      {/* Creating checkbox for each task item, showing if it is checked or not, and togging when pressed */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {/* Added corresponding task text */}
      <p className={task.completed ? "task-text completed" : "task-text"}>
        {task.text}
      </p>
      {/* Added delete button for the task */}
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </>
  );
}

// Makes component available in other files
export default TaskItem;
