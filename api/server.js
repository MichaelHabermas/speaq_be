const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { logger, restricted } = require("./middleware/index");
const server = express();

// routers
const authRouter = require("./auth/auth-router");
const userRouter = require("./users/users-router");

// Configure your server here
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(logger);

server.use("/api/auth/", authRouter);
server.use("/api/users/", restricted, userRouter);

server.use("*", (req, res) => {
	res.send(`<h1>Up and Running</h1>`);
});

//error handling function for all middleware
// eslint-disable-next-line
server.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		custom: "Strange things are afoot at the circle K",
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;
