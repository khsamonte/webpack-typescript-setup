import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Enable CORS
app.use(cors());

// API endpoint
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
