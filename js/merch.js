document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const orderButtons = document.querySelectorAll(".order-btn");
  
    // Load existing cart from local storage
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      updateCartUI(cart);
    };
  
    // Save cart to local storage
    const saveCart = (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };
  
    // Update the cart UI
    const updateCartUI = (cart) => {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price}</td>
        `;
        cartItemsContainer.appendChild(row);
        total += parseFloat(item.price);
      });
  
      cartTotalElement.textContent = total.toFixed(2);
    };
  
    // Add item to cart
    const addItemToCart = (name, price) => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name, price });
      saveCart(cart);
      updateCartUI(cart);
    };
  
    // Handle order button clicks
    orderButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        addItemToCart(name, price);
        new bootstrap.Offcanvas(document.getElementById("offcanvasCart")).show();
      });
    });
  
    // Initialize cart on page load
    loadCart();
  });
  