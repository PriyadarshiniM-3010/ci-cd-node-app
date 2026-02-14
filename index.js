const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD pipeline app is running 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
