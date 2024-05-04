import React from "react";
import "./TaskComplete.css";
import TaskItem from "../TaskItem/TasklItem";

function TaskComplete({ tasks, handleDeleteTask }) {
  // Filtrer les tâches avec la valeur de la checkbox à true
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <div className="container padd">
        <h2 className="taskitem1">Task Complete</h2>
        <div className="tasklist">
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              disableCheckbox={true}
              hideIcons={true}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskComplete;
