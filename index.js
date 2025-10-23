const express = require("express");
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
