var fs  = require("fs");
process.stdout.write(
	fs.readFileSync(process.argv[2]).toString().toLowerCase()
);