let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const numItems = document.getElementById("num-items");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });

  numItems.innerText = cart.length;
  cartTotal.innerText = total.toFixed(2);
}

function toggleCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  cartSidebar.style.display = cartSidebar.style.display === "flex" ? "none" : "flex";
}
