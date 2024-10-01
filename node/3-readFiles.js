// const http = require('http');
const fs = require('fs');

// http.createServer(function (req, res) {
//     fs.readFile('myfile.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

fs.readFile('./myNewFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('File read successfully! here is the data below');
        console.log(data);
    }
})