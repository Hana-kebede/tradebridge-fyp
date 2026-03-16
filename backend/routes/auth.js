const express = require("express");
const User = require("../models/user");

const router = express.Router();

const users = [
  new User(1, "retailer1", "1234", "retailer"),
  new User(2, "supplier1", "1234", "supplier")
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful", role: user.role });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;