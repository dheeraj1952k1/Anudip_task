const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  res.send(`Hello, ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
