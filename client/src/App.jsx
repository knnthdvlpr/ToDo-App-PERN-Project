import React, { Fragment } from "react"
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Navbar />
        <InputTodo />
        <ListTodos />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
