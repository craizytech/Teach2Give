const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Helper function to read request body
    const readBody = () => {
        return new Promise((resolve, reject) => {
            let body = '';
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => resolve(body));
            req.on('error', reject);
        });
    };

    // Route handler
    const handleRequest = async () => {
        try {
            if (req.url === '/products' && req.method === 'GET') {
                const jsonData = fs.readFileSync('./db.json', 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(jsonData);
            } 
            else if (req.url === '/add_product' && req.method === 'POST') {
                const body = await readBody();
                const jsonData = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
                const newProduct = JSON.parse(body);
                jsonData.push(newProduct);
                fs.writeFileSync('./db.json', JSON.stringify(jsonData, null, 2));
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product added successfully' }));
            }
            else if (req.url === '/update_product' && req.method === 'PUT') {
                const body = await readBody();
                const jsonData = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
                const updatedProduct = JSON.parse(body);
                
                const index = jsonData.findIndex(item => item.id === updatedProduct.id);
                if (index === -1) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Product not found' }));
                    return;
                }
                
                jsonData[index] = updatedProduct;
                fs.writeFileSync('./db.json', JSON.stringify(jsonData, null, 2));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product updated successfully' }));
            }
            else if (req.url === '/delete_product' && req.method === 'DELETE') {
                const body = await readBody();
                const jsonData = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
                const { id } = JSON.parse(body);
                
                const index = jsonData.findIndex(item => item.id === id);
                if (index === -1) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Product not found' }));
                    return;
                }
                
                jsonData.splice(index, 1);
                fs.writeFileSync('./db.json', JSON.stringify(jsonData, null, 2));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product deleted successfully' }));
            }
            else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Not Found' }));
            }
        } catch (error) {
            console.error(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
        }
    };

    handleRequest().catch(error => {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});