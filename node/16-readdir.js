const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Directory files read successfully! Here are the files:')
    console.log(files)
})