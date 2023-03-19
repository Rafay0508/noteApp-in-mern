const express = require("express");

const app = express();
const dotenv = require("dotenv").config();
const notes = require("./data/node");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/note/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at port ${PORT}`));
