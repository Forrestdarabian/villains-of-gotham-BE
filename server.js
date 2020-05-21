require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const usersRouter = require("./users/usersRouter");
const squadsRouter = require("./squads/squadsRouter");

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/users", usersRouter);
server.use("/api/users/squads", squadsRouter);

server.get("/", (req, res) => {
  res.send(
    "Riddle me this, riddle me that...Who's afraid of the big, black bat?"
  );
});

module.exports = server;
