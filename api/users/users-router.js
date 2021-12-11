const router = require("express").Router();
const { only, restricted } = require("../middleware");
const Users = require("./users-model");

router.get("/", (req, res, next) => {
	Users.findAllUsers()
		.then(users => {
			res.json(users);
		})
		.catch(next);
});

router.get("/:user_id", (req, res, next) => {
	Users.findUserById(req.params.user_id)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(next);
});

router.post("/", (req, res, next) => {
	const user_id = req.decodedJwt.subject;
	Users.addUser(req.body, user_id)
		.then(user => {
			res.json(user);
		})
		.catch(next);
});

module.exports = router;
