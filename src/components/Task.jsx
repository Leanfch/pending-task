export default function Task({ task, toggleTaskCompletion }) {
    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
            <span>{task.text}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Desmarcar" : "Completar"}
            </button>
        </div>
    )
}
