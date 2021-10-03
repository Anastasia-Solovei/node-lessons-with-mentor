const fs = require("fs/promises");
const path = require("path");

const usersFilePath = path.normalize(__dirname + "/../db/users.json");

const getAll = async (req, res) => {
  try {
    const users = JSON.parse(await fs.readFile(usersFilePath));
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = JSON.parse(await fs.readFile(usersFilePath));

    const user = users.filter((user) => user.id === Number(id));

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const createOne = async (req, res) => {
  try {
    const body = req.body;
    const users = JSON.parse(await fs.readFile(usersFilePath));
    const newUser = {
      id: Date.now(),
      ...body,
    };
    users.push(newUser);
    await fs.writeFile(usersFilePath, JSON.stringify(users));
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const users = JSON.parse(await fs.readFile(usersFilePath));

    const updatedUserList = users.filter((user) => user.id !== Number(id));

    await fs.writeFile(usersFilePath, JSON.stringify(updatedUserList));

    res.status(200).json("User was successfully deleted!");
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { getAll, getOneById, createOne, deleteOne };
