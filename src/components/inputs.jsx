import { useState } from "react";

export function Input({ addTask }) {
  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");
  let [status, setStatus] = useState("Pending");
  let [created_at, setCreated_at] = useState(new Date().toLocaleDateString());
  let [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

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
              value={title}
              onChange={(event) => setTitle(event.target.value)}
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
              value={discription}
              onChange={(event) => setDiscription(event.target.value)}
            />
          </div>
          <div className="p-2">
            <label for="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              className="form-select"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
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
              onChange={(event) => setDueDate(event.target.value)}
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
              onChange={(event) => setCreated_at(event.target.value)}
            />
          </div>
          <div className="p-2 text-endd">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => addTask({title, discription, status, created_at, dueDate})}
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
