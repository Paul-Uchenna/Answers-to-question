import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  // Déclaration des états pour le nom de la tâche, la description de la tâche et les erreurs
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");

  // Gestion du changement du nom de la tâche
  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  // Gestion du changement de la description de la tâche
  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification si les champs sont vides
    if (!taskName || !taskDescription) {
      setError("Please complete all fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
    };
    console.log("New Task:", newTask);
    addTask(newTask);
    setTaskName("");
    setTaskDescription("");
    setError("");
  };

  return (
    <>
      <div className="container padd">
        <h2>Add your task</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <label htmlFor="name">Task Name</label>
            <input
              className="inputName"
              value={taskName}
              onChange={handleTaskName}
              type="text"
              placeholder="eg: John Doe"
            />
          </div>

          <div className="field">
            <label htmlFor="message">Description</label>
            <textarea
              value={taskDescription}
              onChange={handleTaskDescription}
              className="textarea"
              placeholder=" ..."
              rows="5"
              cols="33"
            ></textarea>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btnSubmit">
            {" "}
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
