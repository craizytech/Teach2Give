const API_URL = 'http://localhost:3000';
const productModal = document.getElementById('productModal');
const viewModal = document.getElementById('viewModal');
const productForm = document.getElementById('productForm');
const addProductBtn = document.getElementById('addProductBtn');
const productsContainer = document.getElementById('products');
let isEditing = false;

document.addEventListener('DOMContentLoaded', fetchProducts);
addProductBtn.addEventListener('click', () => openModal());
productForm.addEventListener('submit', handleFormSubmit);

async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) throw new Error('Error fetching products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    `).join('');
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const productData = {
        name: productForm.name.value,
        description: productForm.description.value,
        price: parseFloat(productForm.price.value),
        category: productForm.category.value,
        stock: parseInt(productForm.stock.value)
    };

    if (isEditing) {
        productData.id = productForm.productId.value;
        await fetch(`${API_URL}/update_product`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
    } else {
        await fetch(`${API_URL}/add_product`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
    }

    fetchProducts();
    productModal.style.display = 'none';
}

async function deleteProduct(id) {
    await fetch(`${API_URL}/delete_product`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    });
    fetchProducts();
}
