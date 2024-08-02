import { createPortal } from "react-dom"
import Task from "./Task"

const TaskList = ({ tasks, toggleTaskCompletion }) => {
    return createPortal(
        <div className="task-list">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </div>,
        document.getElementById("task-portal")
    )
}

export default TaskList
