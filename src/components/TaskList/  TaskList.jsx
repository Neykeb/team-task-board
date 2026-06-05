import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, changeTaskStatus, deleteTask }) {
    if (tasks.length === 0) {
        return <p>Keine Aufgaben vorhanden.</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    changeTaskStatus={changeTaskStatus}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;