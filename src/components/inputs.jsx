import { useState } from "react";

export function Input({ addTask }) {
  const initialFormState = {
    title: "",
    discription: "",
    created_at: new Date().toLocaleDateString(),
    dueDate: new Date().toISOString().split("T")[0],
    updated_at: "",
    status: "Pending",
  };
  let [task, setTask] = useState(initialFormState);

  return (
    <>
      <form>
        <div className="d-block">
          <div className="p-2">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Title"
              aria-label="Search"
              id="title"
              name="title"
              value={task.title}
              onChange={(event) =>
                setTask({ ...task, title: event.target.value })
              }
            />
          </div>
          <div className="p-2">
            <label for="discription" className="form-label">
              Discription
            </label>
            <textarea
              className="form-control me-2"
              type="search"
              placeholder="Discription"
              aria-label="Search"
              id="discription"
              name="discrip"
              value={task.discription}
              onChange={(event) =>
                setTask({ ...task, discription: event.target.value })
              }
            />
          </div>
          <div className="p-2">
            <label for="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              className="form-select"
              value={task.status}
              onChange={(event) =>
                setTask({ ...task, status: event.target.value })
              }
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="p-2">
            <label for="dueDate" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              className="form-control"
              onChange={(event) =>
                setTask({ ...task, dueDate: event.target.value })
              }
            />
          </div>
          <div className="p-2">
            <label for="date" className="form-label">
              Created_at
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              onChange={(event) =>
                setTask({ ...task, created_at: event.target.value })
              }
            />
          </div>
          <div className="p-2 text-endd">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                addTask(task);
                setTask(initialFormState);
              }}
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
