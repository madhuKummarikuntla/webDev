import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [task, setTask] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    setTask([...task, { title, des }]);
    setTitle("");
    setDes("");
  };

  const onDel = (i) => {
    const prevTask = [...task];
    prevTask.splice(i, 1);
    setTask(prevTask);
  };

  let taskRender = <h2 className="task1">### No Task's Available ###</h2>;
  if (task.length > 0) {
    taskRender = task.map((t, i) => {
      return (
        <li className="list-item">
          <h2>
            {" "}
            <span className="count">{i + 1 + "." + "   "}</span>
            {t.title}
          </h2>
          <h3>{t.des}</h3>
          <button type="button" onClick={onDel} className="btn">
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div className="con">
      <h1 className="head">My Todo's List</h1>

      <form onSubmit={submitForm} className="submit" className="form-con">
        <label className="lbl" htmlFor="title">
          Title :-
        </label>
        <input
          type="text"
          id="title"
          value={title}
          className="input"
          placeholder="Enter Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="lbl" htmlFor="des">
          Description :-
        </label>

        <input
          type="text"
          placeholder="Enter Description"
          className="input"
          id="des"
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Add Task
        </button>
      </form>
      <ul>{taskRender}</ul>
    </div>
  );
};
export default App;
