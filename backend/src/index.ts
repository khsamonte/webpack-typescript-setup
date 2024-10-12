import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// Enable CORS
app.use(cors());

// Enable JSON body parsing for POST/PUT requests
app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: "Ken S.", email: "ken@example.com" },
  { id: 2, name: "Abygaille M.", email: "abby@example.com" },
];

// GET /api/users - Fetch all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Fetch user by id
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// POST /api/users - Create a new user
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id - Update user by ID
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

// DELETE /api/users/:id - Delete user by ID
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send(); // 204 No Content for successful deletion
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
