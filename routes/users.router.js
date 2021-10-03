const express = require("express");
const { Router } = require("express");
const usersController = require("../controllers/users.controller");

const router = Router();

router.get("/users", usersController.getAll);

router.get("/users/:id", usersController.getOneById);

router.post("/users", usersController.createOne);

router.delete("/users/:id", usersController.deleteOne);

module.exports = router;
