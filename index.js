const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/portofolio", (req, res) => {
  res.send("Portofolio Slebew");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
