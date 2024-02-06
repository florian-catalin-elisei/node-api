const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const users = require("../data/users");

const router = express.Router();
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUsers = users.filter((user) => user.id !== id);

  const filePath = path.join(__dirname, "../data/users.json");
  await fs.writeFile(filePath, JSON.stringify(updatedUsers));

  res.send(`User with the id ${id} deleted`);
});

module.exports = router;
