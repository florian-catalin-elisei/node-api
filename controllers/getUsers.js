const express = require("express");
const users = require("../data/users");

const router = express.Router();
router.get("/users", (req, res) => res.send(users));

module.exports = router;
