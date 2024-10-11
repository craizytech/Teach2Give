import initializeDB from './database.js';  // Ensure the import matches the file structure

async function seedDatabase() {
    const db = await initializeDB();

    // Insert sample data
    await db.run(`INSERT INTO products (name, description, price, category, stock) 
                  VALUES ('Sample Product', 'Description of product', 99.99, 'Category1', 100)`);

    console.log('Database seeded successfully');
}

seedDatabase();
