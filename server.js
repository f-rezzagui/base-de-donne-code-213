const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/posts", (req, res) => {
  res.send("Here are all posts");
});
app.post("/posts", (req, res) => {
  res.send("post saved");
});
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000/");
});
