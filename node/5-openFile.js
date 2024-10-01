const fs = require('fs');

fs.open('myNewFile1.txt', 'w', function (err) {
	if (err) throw err;
	console.log('Saved');
});
