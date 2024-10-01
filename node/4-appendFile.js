const fs = require('fs');

fs.appendFile('myNewFile.txt', 'Temporary String', (err) => {
    if (err) throw err;
    console.log("saved");
});
