let cart = [];

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total-price');
  
  cartItemsContainer.innerHTML = ''; // Clear current cart items
  let total = 0;

  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)}<button onclick="removeFromCart('${item.id}')">Remove</button>`;
    cartItemsContainer.appendChild(itemElement);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
}

// Example of adding an item to the cart
// Replace with your actual product data and logic
document.getElementById('add-to-cart-button').addEventListener('click', function() {
  addToCart('1', 'T-Shirt', 20.00);
});


function proceedToCheckout() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }