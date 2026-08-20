const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");

// Array to store products
let products = JSON.parse(localStorage.getItem("products")) || [];

// Display existing products when page loads
displayProducts();

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = form.name.value.trim();
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quanity.value;

    // Create product object
    const product = {
        name,
        category,
        price,
        quantity
    };

    // Store in array
    products.push(product);

    // Save in localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Display updated table
    displayProducts();

    // Clear form
    form.reset();
});

// Function to display products
function displayProducts() {
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>₹${product.price}</td>
                <td>${product.quantity}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}