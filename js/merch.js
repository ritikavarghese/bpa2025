document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to order buttons after the page loads
    document.querySelectorAll('.order-btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Find the closest parent element (the card) and grab the item's name and price
            const card = this.closest('.card');
            const itemName = card.querySelector('.card-title').textContent;
            const itemPrice = card.querySelector('.card-text').textContent.trim();

            // Add the item to the cart
            addToCart(itemName, itemPrice);
        });
    });

    // Initialize cart UI
    updateCartUI();
});

// Add item to the cart
function addToCart(itemName, itemPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new item to cart array
    cart.push({ name: itemName, price: itemPrice });

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart UI and open the cart
    updateCartUI();
    openCart();
}

// Open and close cart
function openCart() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// Update cart UI
function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items in the cart

    let total = 0;

    // Loop through cart items and create rows
    cart.forEach(item => {
        const itemRow = document.createElement('tr');
        itemRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
        `;
        cartItemsContainer.appendChild(itemRow);
        total += parseFloat(item.price.replace('$', ''));
    });

    // Add total row to the cart
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>$${total.toFixed(2)}</strong></td>
    `;
    cartItemsContainer.appendChild(totalRow);
}
