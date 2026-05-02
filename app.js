const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("Hello from GitHub Actions 🚀");
});

app.listen(8000, () => {
  console.log("App running on port 8000");
});
