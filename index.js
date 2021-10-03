const express = require("express");
const usersRouter = require("./routes/users.router");

const app = express();
app.use(usersRouter);

app.listen(3500, console.log("Server is running on the port 3500"));
