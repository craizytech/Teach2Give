const http = require('http');
const fs = require('fs');
const url = require('url');

// Helper function to read db.json
function getProducts() {
    const data = fs.readFileSync('db.json');
    return JSON.parse(data).products;
}

// Helper function to write to db.json
function saveProducts(products) {
    const data = JSON.stringify({ products }, null, 2);
    fs.writeFileSync('db.json', data);
}

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    
    // Serve the HTML file on root route
    if (parsedUrl.pathname === '/' && method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // Serve the CSS file
    else if (parsedUrl.pathname === '/style.css' && method === 'GET') {
        fs.readFile('./style.css', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }

    // Serve the products as JSON
    else if (parsedUrl.pathname === '/products' && method === 'GET') {
        const products = getProducts();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    }

    // Add a new product (POST /add-product)
    else if (parsedUrl.pathname === '/add-product' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const product = JSON.parse(body);
            const products = getProducts();
            // Assign a new id based on the last product's id
            product.id = (parseInt(products[products.length - 1]?.id || 0) + 1).toString();
            products.push(product);
            saveProducts(products);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product added successfully' }));
        });
    }

    // Edit a product (POST /edit-product)
    else if (parsedUrl.pathname === '/edit-product' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const updatedProduct = JSON.parse(body);
            let products = getProducts();
            products = products.map(product => 
                product.id === updatedProduct.id ? updatedProduct : product
            );
            saveProducts(products);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Product updated successfully' }));
        });
    }

    // Delete a product (DELETE /delete-product?id=)
    else if (parsedUrl.pathname === '/delete-product' && method === 'DELETE') {
        const productId = parsedUrl.query.id;
        let products = getProducts();
        products = products.filter(product => product.id !== productId);
        saveProducts(products);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product deleted successfully' }));
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
