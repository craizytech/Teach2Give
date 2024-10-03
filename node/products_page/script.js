// Fetch products and display them
async function fetchProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="viewProduct('${product.id}')">View</button>
            <button onclick="editProduct('${product.id}')">Edit</button>
            <button onclick="deleteProduct('${product.id}')">Delete</button>
        `;
        productList.appendChild(div);
    });
}

// Open the add product form
function openAddForm() {
    openForm('Add Product', {}, saveNewProduct);
}

// Open the form with existing product data (edit/view)
function openForm(title, product, saveAction) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('name').value = product.name || '';
    document.getElementById('description').value = product.description || '';
    document.getElementById('price').value = product.price || '';
    document.getElementById('category').value = product.category || '';
    document.getElementById('stock').value = product.stock || '';
    document.getElementById('popup-form').style.display = 'block';
    document.getElementById('save-btn').onclick = saveAction;
}

// Close the popup form
function closeForm() {
    document.getElementById('popup-form').style.display = 'none';
}

// Save new product
async function saveNewProduct() {
    const product = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        category: document.getElementById('category').value,
        stock: parseInt(document.getElementById('stock').value)
    };
    await fetch('/add-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    closeForm();
    fetchProducts();
}

// Edit existing product
async function editProduct(id) {
    const products = await fetch('/products').then(res => res.json());
    const product = products.find(p => p.id === id);
    openForm('Edit Product', product, async () => {
        product.name = document.getElementById('name').value;
        product.description = document.getElementById('description').value;
        product.price = parseFloat(document.getElementById('price').value);
        product.category = document.getElementById('category').value;
        product.stock = parseInt(document.getElementById('stock').value);
        await fetch('/edit-product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        closeForm();
        fetchProducts();
    });
}

// View product
function viewProduct(id) {
    editProduct(id); // Use the same form as edit but without editing
    document.getElementById('save-btn').style.display = 'none'; // Hide the save button
}

// Delete a product
async function deleteProduct(id) {
    await fetch(`/delete-product?id=${id}`, { method: 'DELETE' });
    fetchProducts();
}

// Initialize the product list on page load
fetchProducts();
