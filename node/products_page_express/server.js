import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/database.js';

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// GET all products
app.get('/products', async (req, res) => {
    try {
        const products = await db.all('SELECT * FROM products');
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST new product
app.post('/add_product', async (req, res) => {
    const { name, description, price, category, stock } = req.body;
    try {
        const result = await db.run(
            'INSERT INTO products (name, description, price, category, stock) VALUES (?, ?, ?, ?, ?)',
            [name, description, price, category, stock]
        );
        res.status(201).json({ id: result.lastID, ...req.body });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT update product
app.put('/update_product', async (req, res) => {
    const { id, name, description, price, category, stock } = req.body;
    try {
        const result = await db.run(
            'UPDATE products SET name = ?, description = ?, price = ?, category = ?, stock = ? WHERE id = ?',
            [name, description, price, category, stock, id]
        );
        if (result.changes === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ id, name, description, price, category, stock });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE product
app.delete('/delete_product', async (req, res) => {
    const { id } = req.body;
    try {
        const result = await db.run('DELETE FROM products WHERE id = ?', id);
        if (result.changes === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
