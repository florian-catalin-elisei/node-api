const express = require("express");
const { v4: uuidv4 } = require("uuid");
const users = require("../data/users");
const fs = require("fs/promises");
const path = require("path");

const router = express.Router();
router.post("/users", async (req, res) => {
  const newUser = req.body;
  users.push({
    id: uuidv4(),
    ...newUser,
  });

  const filePath = path.join(__dirname, "../data/users.json");
  await fs.writeFile(filePath, JSON.stringify(users));

  res.send(`User with the name ${newUser.firstName} ${newUser.lastName} added`);
});

module.exports = router;
