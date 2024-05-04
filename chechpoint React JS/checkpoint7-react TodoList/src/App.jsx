import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import TaskForm from "./Component/TaskForm/TaskForm";
import TaskList from "./Component/TaskList/TaskList";
import TaskComplete from "./Component/TaskComplete/TaskComplete";
import TaskTodo from "./Component/TaskTodo/TaskTodo";

function App() {
  // État pour stocker les tâches
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) ?? [];
    } catch {
      console.error("Impposible d'afficher des taches");
      return [];
    }
  });

  // Sauvegarde des tâches dans le stockage du navigateur à chaque modification
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Fonction pour ajouter une tâche à la liste
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, name: newTitle, description: newDescription }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Navbar tasks={tasks} />
      <Routes>
        <Route
          path="/"
          element={
            <TaskList
              tasks={tasks}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
            />
          }
        />
        <Route path="/taskform" element={<TaskForm addTask={addTask} />} />
        <Route
          path="/taskcomplete"
          element={
            <TaskComplete tasks={tasks} handleDeleteTask={handleDeleteTask} />
          }
        />
        <Route
          path="/tasktodo"
          element={
            <TaskTodo
              tasks={tasks}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
