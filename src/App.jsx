import { Header } from "./components/header.jsx";
import { Searchbar } from "./components/searchbar.jsx";
import { Input } from "./components/inputs.jsx";
import { Cards } from "./components/taskCard.jsx";
import { useState } from "react";

export function App() {
  const [searchText, setSearchText] = useState("");
  const [taskList, setTasklist] = useState([]);
  console.log(taskList);

  const deletingTask = (id) => {
    setTasklist(taskList.filter((task) => task.id !== id));
  };

  const updatingTask = (updatedTask) => {
    setTasklist(
      taskList.map((task) => {
        return task.id !== updatedTask.id ? task : updatedTask;
      })
    );
  };

  const renderedTask = () => {
    if (taskList.length === 0)
      return <h5 className="text-center p-2">Zero task added</h5>;
    const filteredTask = taskList.filter((task) => {
      if (searchText === "") return true;
      const regex = new RegExp(searchText, "i");
      return regex.test(task.title);
    });
    if (filteredTask.length !== 0) {
      filteredTask.sort((a, b) => a.title.localeCompare(b.title));
      return filteredTask.map((task) => (
        <Cards
          key={task.id}
          {...task}
          removingTask={deletingTask}
          savingTask={updatingTask}
        ></Cards>
      ));
    } else {
      return (
        <>
          <p className="text-center p-2">
            Task not found!!!! <br /> click to add ?
          </p>
          <button
            className={"btn btn-outline-success"}
            onClick={() => {
              setTasklist([
                ...taskList,
                {
                  id: taskList.length + 1,
                  title: searchText,
                  discription: "default static discription",
                  status: "just now",
                  date: new Date().toLocaleDateString("ar-EG"),
                },
              ]);
              setSearchText("");
            }}
          >
            Add card
          </button>
        </>
      );
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container my-2 box">
        <div>
          <Searchbar
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></Searchbar>

          {renderedTask()}
        </div>
        <div>
          <Input
            addTask={(task) =>
              setTasklist([
                ...taskList,
                {...task, id: taskList.length + 1},
              ])
            }
          ></Input>
        </div>
      </div>
    </>
  );
}
