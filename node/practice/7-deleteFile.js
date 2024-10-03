const fs = require('fs');

fs.unlink('myNewFile3.txt', (err) => {
	if (err) throw err;
	console.log('File Deleted!');
});
