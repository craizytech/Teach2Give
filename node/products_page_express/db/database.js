import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Use dynamic import for sqlite3
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function initializeDB() {
    const db = await open({
        filename: `${__dirname}/products.db`,
        driver: sqlite3.Database
    });

    // Initialize the database schema
    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            price REAL,
            category TEXT,
            stock INTEGER
        );
    `);

    return db;
}

export default initializeDB;
