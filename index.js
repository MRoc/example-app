const express = require("express");
const swStats = require('swagger-stats');

const app = express();
app.use(swStats.getMiddleware());

app.get("/", (req, res) => {
  res.send(`Hello World from ${process.env.MESSAGE ?? "Matthias"}`);
});

app.get("/comments", (req, res) => {
  res.send("Comments");
});

app.get("/threads", (req, res) => {
  res.send("Threads");
});

app.get("/replies", (req, res) => {
  res.send("replies");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
