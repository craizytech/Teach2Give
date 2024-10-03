const fs = require('fs');

fs.rename('myNewFile1.txt', 'myRenamedFile.js', function (err) {
	if (err) throw err;
	console.log("File Renamed!");
});
