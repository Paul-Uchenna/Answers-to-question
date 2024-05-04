import React from "react";
import "./TaskTodo.css";
import TaskItem from "../TaskItem/TasklItem";

function TaskTodo({
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  // Filtrer les tâches avec la valeur de la checkbox à false
  const todoTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container padd">
      <h2>Task Todo</h2>
      <div className="tasklist">
        {todoTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskTodo;
