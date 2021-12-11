exports.up = function (knex) {
	return knex.schema.createTable("users", users => {
		users.increments("user_id");
		users.string("username", 128).unique().notNullable();
		users.string("password").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("users");
};
