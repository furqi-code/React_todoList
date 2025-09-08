import { use, useState } from "react";

export function Cards({
  id,
  title,
  discription,
  status,
  created_at,
  dueDate,
  updated_at,
  removingTask,
  savingTask,
}) {
  const [isEditing, setisEditing] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    id,
    title: title,
    discription: discription,
    created_at,
    dueDate,
    updated_at: new Date().toISOString().split("T")[0],
    status: "just now",
  });
  // if we dont edit one of the input fields thats why using default state
  // couldn't use updatedTitle/discription as key names bcz cards are being made using title, discription props only

  return (
    <div class="todo-card my-4">
      {!isEditing && (
        <>
          <h2 class="todo-title">{title}</h2>
          <div>
            <p class="todo-description">{discription}</p>
          </div>
        </>
      )}

      {isEditing && (
        <>
          <div className="p-2">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Edit this Title"
              name="title"
              defaultValue={title}
              // value={updatedTitle}
              onChange={(event) => {
                setUpdatedTask({ ...updatedTask, title: event.target.value });
              }}
            ></input>
          </div>
          <div className="p-2 mb-2">
            <textarea
              className="form-control me-2"
              type="search"
              placeholder="Edit this Discription"
              aria-label="Search"
              id="exampleFormControlInput1"
              name="discrip"
              defaultValue={discription}
              // value={updatedDiscription}
              onChange={(event) => {
                setUpdatedTask({
                  ...updatedTask,
                  discription: event.target.value,
                });
              }}
            />
          </div>
        </>
      )}

      <div className="todo-meta">
        <div>
          <span className="todo-status status-in-progress">{status}</span>
        </div>
        <div className="d-flex flex-column align-items-end">
          <span className="todo-date">Due: {dueDate}</span>
          {/* {isUpdated && <span className="todo-date">Edited: {updated_at}</span>}
          <span className="todo-date">Created: {created_at}</span> */}
        </div>
      </div>

      <div class="todo-actions">
        {!isEditing && (
          <>
            <button
              type="button"
              className="canvaBtn btn-edit"
              onClick={() => setisEditing(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="canvaBtn btn-delete"
              onClick={() => removingTask(id)}
            >
              Delete
            </button>
          </>
        )}
        {isEditing && (
          <>
            <button
              type="button"
              className="canvaBtn btn-cancel"
              onClick={() => setisEditing(false)}
            >
              cancel
            </button>
            <button
              type="button"
              className="canvaBtn btn-save"
              onClick={() => {
                savingTask(updatedTask);
                setisEditing(false);
                setisUpdated(true);
              }}
            >
              💾 save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
