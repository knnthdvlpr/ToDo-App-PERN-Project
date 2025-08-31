
import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${API_BASE}/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });


      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className="modal fade"
      id={`id${todo.todo_id}`}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit Todo</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            data-bs-dismiss="modal"
            onClick={e => updateDescription(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;