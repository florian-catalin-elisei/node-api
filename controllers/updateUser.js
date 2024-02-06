const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const users = require("../data/users");

const router = express.Router();
router.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  } else if (lastName) {
    user.lastName = lastName;
  } else if (age) {
    user.age = age;
  } else {
    res.send("Invalid update parameters");
  }

  const filePath = path.join(__dirname, "../data/users.json");
  await fs.writeFile(filePath, JSON.stringify(users));

  res.send(`User with the id ${id} updated`);
});

module.exports = router;
