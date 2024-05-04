import React from "react";
import "./TaskList.css";
import TaskItem from "../TaskItem/TasklItem";

function TaskList({
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  return (
    <>
      <div className="container padd">
        <h2>Task List</h2>
        <div className="tasklist">
          {tasks.map((task) => (
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
    </>
  );
}

export default TaskList;
