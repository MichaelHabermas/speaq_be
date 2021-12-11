require("dotenv").config();
const server = require("./api/server");

if (process.env.NODE_ENV === "production") {
	console.log("this means this code is deployed");
}

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
	console.log(`\n*** Server Running on http://localhost:${PORT}***\n`);
});
