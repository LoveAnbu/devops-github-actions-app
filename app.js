const express = require("express");
const app = express();

// 🔒 Security fix (VERY IMPORTANT)
app.disable("x-powered-by");

// Basic route
app.get("/", (req, res) => {
  console.log("Request received");
  res.send("Hello from GitHub Actions 🚀");
});

// Health check endpoint (DevOps best practice)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(9000, () => {
  console.log("App running on port 8000");
});
