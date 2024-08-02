import { useState, useRef } from "react"
import TaskList from "./components/TaskList"
import "./App.css"

export default function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Aprender React", completed: false },
        { id: 2, text: "Practicar useState", completed: false },
    ])
    const taskInputRef = useRef()

    const addTask = () => {
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                text: taskInputRef.current.value,
                completed: false,
            },
        ])
        taskInputRef.current.value = '';
    }

    const toggleTaskCompletion = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            }
            return task
        })
        setTasks(newTasks);
    }

    return (
        <section className="app-container">
            <h1>Lista de Tareas</h1>
            <div className="input-container">
                <input
                    type="text"
                    ref={taskInputRef}
                    placeholder="Nueva tarea"
                />
                <button onClick={addTask}>Añadir Tarea</button>
            </div>
            <h2>
                Total completadas: {tasks.filter((task) => task.completed).length}
            </h2>
            <TaskList
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </section>
    )
}
