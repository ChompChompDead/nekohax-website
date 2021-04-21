const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/frontend/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/html/index.html"));
});

app.get("/buy", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/html/buy.html"));
});

const listener = app.listen(3000, () => {
  console.log("Website is listening on port " + listener.address().port);
});
