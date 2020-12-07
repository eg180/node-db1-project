const express = require("express");

const PostRouter = require('./api/the-router.js');

const server = express();

server.use(express.json());

server.use("/api/posts", PostRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
});

module.exports = server;
