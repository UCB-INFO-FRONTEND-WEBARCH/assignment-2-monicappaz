function TaskList({ tasks, onToggle, onDelete }) {
  // If the tasks arr is empty, TODO
  if (tasks.length === 0) {
    return;
  }
  return (
    <ul>
      <li>{TaskItem}</li>
    </ul>
  );
}

// Makes component available in other files
export default TaskList;
