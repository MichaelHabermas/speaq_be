const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const db = require("../data/dbConfig");

function logger(req, res, next) {
	console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
	next();
}

// prevents access to certain endpoints
const restricted = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				next({ status: 401, message: "token invalid" });
			} else {
				req.decodedJwt = decoded;
				next();
			}
		});
	} else {
		next({ status: 401, message: "Token Required" });
	}
};

module.exports = {
	restricted,
	logger,
};
