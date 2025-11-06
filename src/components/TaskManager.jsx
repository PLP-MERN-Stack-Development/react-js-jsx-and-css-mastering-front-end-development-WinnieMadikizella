import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>

      {/* Input Field + Button */}
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow border rounded p-2 dark:bg-gray-700 dark:text-white"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <Button variant="primary" onClick={addTask}>
          Add Task
        </Button>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 my-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-700"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through opacity-70" : ""
              }`}
            >
              {task.text}
            </span>

            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
