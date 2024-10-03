const http = require('http');
const fs = require('fs');



http.createServer((req, res) => {
    if (req.url === '/products') {
        // read from the db.json file && Parse the data as a javascript Object
        try {
            const products = fs.readFileSync('./db.json', 'utf-8');

            // return the response as JSON
            res.writeHead(200, {'Content-Type': 'application/json',});
            res.end(products);
        } catch(error) {
            console.log('The error below Occured');
            console.log(error);
        }
    }
}).listen(8080);