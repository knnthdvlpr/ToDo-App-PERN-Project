import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  // 👇 Base URL switches automatically between localhost and Render
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://your-server.onrender.com"; // replace with your Render server URL

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${API_BASE}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 task-title">My Task List</h1>
      <div className="input-container">
        <form className="task-form" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="task-input"
            placeholder=" "
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="task-label">Enter Task</label>
          <button className="add-btn">+</button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
