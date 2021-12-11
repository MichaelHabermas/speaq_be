const db = require("../../api/data/dbConfig");

const findAllUsers = () => {
	return db("users").select("user_id", "username");
};

const findUserById = user_id => {
	return db("users").select("user_id", "username").where({ user_id }).first();
};

async function addUser(user) {
	return db("users").insert(user, ["user_id", "username"]);
}

async function removeUser(user_id) {
	const userToBeDeleted = await findUserById(user_id);
	await db("users").where({ user_id }).del();
	return userToBeDeleted;
}

module.exports = {
	findAllUsers,
	findUserById,
	addUser,
	removeUser,
};
