const express = require("express");
const usersRouter = require("./routes/users.router");
require("dotenv").config();

const PORT = process.env.PORT || 4500;

const app = express();
app.use(express.json());
app.use(usersRouter);

app.listen(PORT, console.log(`Server is running on the port ${PORT}`));
