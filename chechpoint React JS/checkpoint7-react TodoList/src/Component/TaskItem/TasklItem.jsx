import React, { useState } from "react";
import "./TaskItem.css";

function TaskItem({
  task,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
  disableCheckbox,
  hideIcons,
}) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const enableEditing = () => {
    setEditing(true);
  };

  const submitEdit = () => {
    handleEditTask(task.id, editedTitle, editedDescription);
    setEditing(false);
  };

  return (
    <div className="taskItem">
      <input
        type="checkbox"
        className="checkbox"
        checked={task.completed}
        onChange={() => handleCompleteTask(task.id)}
        disabled={disableCheckbox}
      />
      <div className="content">
        {editing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              className="editTitle"
            />
            <textarea
              value={editedDescription}
              onChange={handleDescriptionChange}
              rows="5"
              cols="33"
              className="editDescription"
            />
            <button onClick={submitEdit} className="saveButton">
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="taskTitle">{task.name}</h2>
            <p className="taskDescription">{task.description}</p>
          </>
        )}
      </div>
      <div className="actions">
        {!hideIcons && (
          <>
            <button onClick={enableEditing} className="editButton">
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="deleteButton"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
