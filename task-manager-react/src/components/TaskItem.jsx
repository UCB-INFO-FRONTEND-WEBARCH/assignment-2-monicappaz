// TODO: STYLE TASK TEXT WITH CONDITIONAL STYLING
// TODO: MAKE SURE RENDER IS SEMANTIC???

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div>
      {/* Creating checkbox for each task item, showing if it is checked or not, and togging when pressed */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {/* Added corresponding task text */}
      <p>{task.text}</p>
      {/* Added delete button for the task */}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

// Makes component available in other files
export default TaskItem;
