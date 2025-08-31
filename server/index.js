require("dotenv").config();
const express = require("express"); 
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//CREATE
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *", 
      [description]
    );
    res.json(newTodo.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
})

//GET
app.get("/todos", async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);

  } catch (err) {
    console.error(err.message)
  }
});

//GET ONE
app.get("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM  todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
})

//UPDATE
app.put("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2", 
      [description, id] 
    );
    res.json("Todo was updated!");

  } catch (err) {
    console.error(err.message);
  }
})

app.delete("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1", [id]
    );
    res.json("Todo was deleted");

  } catch (err) {
    console.error(err.message);
  }
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).send("DB error");
  }
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});
