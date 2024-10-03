//Fetch data from JSON server
fetch('http://localhost:3000/products')
.then(response => response.json()) //parse json response
.then(data => {
    const products = document.getElementById('products');

    // loop through the data and display each user
    data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classname = 'product';
        productDiv.innerHTML = `
        <strong>Name: ${product.name} </strong>
        <p>Description: ${product.description}</p>
        <p>Price: ${product.price} </p>
        <p>Category: ${product.category}</p>
        <p>Stock: ${product.stock}</p>
        <div class="buttonsDiv">
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
            <button id="view">View</button>
        </div>
        `
        products.appendChild(productDiv);

    });
})
.catch(error => console.error('Error fetching data:', error));