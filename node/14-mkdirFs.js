const fs = require('fs');

// creates a new folder asynchronously
fs.mkdir('./newFolder', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Created');
    }
})