import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import API_BASE from "./api";

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteOneTodo = await fetch(`${API_BASE}/todos/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)

    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch(`${API_BASE}/todos`)
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <button
                  className="btn btn-light btn-lg d-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target={`#id${todo.todo_id}`}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-lg d-flex align-items-center gap-2"
                  onClick={() => deleteTodo(todo.todo_id)}>
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {" "}
      {todos.map(todo => (
        <EditTodo key={`modal-${todo.todo_id}`} todo={todo} />
      ))}
    </Fragment>
  );
}

export default ListTodos;