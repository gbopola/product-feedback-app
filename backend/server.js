const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const path = require("path");

connectDB();

const app = express();

// Serve static files from the "public" directory in the frontend folder
app.use(express.static(path.join(__dirname, "../frontend/index.html")));

// Handle all other requests by serving the index.html for your frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/roadmap", require("./routes/roadmapRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
