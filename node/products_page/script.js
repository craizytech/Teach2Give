// Constants
const API_URL = 'http://localhost:3000';
const productModal = document.getElementById('productModal');
const viewModal = document.getElementById('viewModal');
const productForm = document.getElementById('productForm');
const addProductBtn = document.getElementById('addProductBtn');
const productsContainer = document.getElementById('products');
let isEditing = false;

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchProducts);
addProductBtn.addEventListener('click', () => openModal());
productForm.addEventListener('submit', handleFormSubmit);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal || e.target === viewModal) {
        closeModals();
    }
});

// Close buttons in modals
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', closeModals);
});

// Fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        showToast('Error fetching products', 'error');
    }
}

function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <div class="product-info">
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Stock:</strong> ${product.stock}</p>
            </div>
            <div class="product-actions">
                <button class="btn btn-view" onclick="viewProduct('${product.id}')">View</button>
                <button class="btn btn-edit" onclick="editProduct('${product.id}')">Edit</button>
                <button class="btn btn-delete" onclick="deleteProduct('${product.id}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Modal handlers
function openModal(product = null) {
    isEditing = !!product;
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = isEditing ? 'Edit Product' : 'Add New Product';

    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('price').value = product.price;
        document.getElementById('category').value = product.category;
        document.getElementById('stock').value = product.stock;
    } else {
        productForm.reset();
        document.getElementById('productId').value = '';
    }

    productModal.style.display = 'block';
}

function closeModals() {
    productModal.style.display = 'none';
    viewModal.style.display = 'none';
    productForm.reset();
}

// CRUD Operations
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const productData = {
        id: document.getElementById('productId').value || Date.now().toString(),
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        category: document.getElementById('category').value,
        stock: parseInt(document.getElementById('stock').value)
    };

    try {
        const url = `${API_URL}/${isEditing ? 'update_product' : 'add_product'}`;
        const method = isEditing ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        await fetchProducts();
        closeModals();
        showToast(`Product ${isEditing ? 'updated' : 'added'} successfully`, 'success');
    } catch (error) {
        showToast(`Error ${isEditing ? 'updating' : 'adding'} product`, 'error');
    }
}

async function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/delete_product`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        await fetchProducts();
        showToast('Product deleted successfully', 'success');
    } catch (error) {
        showToast('Error deleting product', 'error');
    }
}

async function viewProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        const product = products.find(p => p.id === id);
        
        if (!product) {
            throw new Error('Product not found');
        }

        const productDetails = document.getElementById('productDetails');
        productDetails.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
        `;
        
        viewModal.style.display = 'block';
    } catch (error) {
        showToast('Error viewing product', 'error');
    }
}

async function editProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        const product = products.find(p => p.id === id);
        
        if (!product) {
            throw new Error('Product not found');
        }

        openModal(product);
    } catch (error) {
        showToast('Error loading product for editing', 'error');
    }
}

// Helper function for showing toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}