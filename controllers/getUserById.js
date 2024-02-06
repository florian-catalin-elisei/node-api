const express = require("express");
const users = require("../data/users");

const router = express.Router();
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

module.exports = router;
