const express = require("express");
const getUsers = require("./controllers/getUsers");
const createUser = require("./controllers/createUser");
const getUserById = require("./controllers/getUserById");
const deleteUser = require("./controllers/deleteUser");
const updateUser = require("./controllers/updateUser");

const router = express.Router();
router.get("/", (req, res) => res.send("Node Users API"));
router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

module.exports = router;
