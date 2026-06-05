function TaskItem({task, changeTaskStatus, deleteTask}) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Verantwortlich: {task.assignee}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => changeTaskStatus(task.id)}>Status ändern</button>
      <button onClick={() => deleteTask(task.id)}>Löschen</button>
    </div>
  );
} 

export default TaskItem;