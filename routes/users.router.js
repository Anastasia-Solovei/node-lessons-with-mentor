const e = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();
const usersFilePath = path.normalize(__dirname, +"/../db/users.json");

router.get("/users", async (req, res) => {
  try {
    const users = JSON.parse(await fs.readFile(usersFilePath));
    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = JSON.parse(await fs.readFile(usersFilePath));

    const user = users.filter((user) => (user.id = id));

    res.status(200).jsom(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
