var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line === "") return;

	process.stdout.write(
		parseInt(line, 16)
		+ "\n"
	);
});