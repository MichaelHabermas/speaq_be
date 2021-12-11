exports.seed = function (knex) {
	return knex("users").insert([
		{
			username: "Michael",
			password: "$2a$06$LDSvLwkgy3cGHv4lm7R5Suf8O4zch7.fsTzf6qcVPpeouSgh8ZdWu",
		},
	]);
};
