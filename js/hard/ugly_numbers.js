var fs  = require("fs");
var memory = {};

function myParseInt(n) {
	return parseInt(n, 10);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line)
	{
	if (line === "") return;
	// console.log("input: " + line);

	memory = {};

	var
		digits = line.split('').map(myParseInt),
		sums = getSums(digits),
		num_ugly = 0;

	for (var idx=sums.length; idx--;) {
		if (
			(sums[idx] % 2 === 0) ||
			(sums[idx] % 3 === 0) ||
			(sums[idx] % 5 === 0) ||
			(sums[idx] % 7 === 0)
		)
		{
			num_ugly++;
		}
	}
	process.stdout.write(num_ugly + '\n');
});

function getSums(digits, startIdx) {
	if (!startIdx) startIdx = 0;
	
	if (memory[startIdx]) return memory[startIdx];
	
	// console.log(digits.slice(startIdx));
	
	var len = digits.length;
	
	if (startIdx >= len) return [];
	
	var
		cumulated = digits[startIdx],
		res = [];

	for (var idx=startIdx+1; idx<len; idx++) {
		var sums = getSums(digits, idx);
		for (var jdx=sums.length; jdx--;) {
			res.push(cumulated - sums[jdx]);
			res.push(cumulated + sums[jdx]);
		}
		cumulated = cumulated*10 + digits[idx];
	}
	res.push(cumulated);
	
	return memory[startIdx] = res;
}
