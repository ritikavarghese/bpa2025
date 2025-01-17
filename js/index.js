document.addEventListener('DOMContentLoaded', () => {
  const tourDates = document.querySelectorAll('.tour-date'); 

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 }); 
  tourDates.forEach(tourDate => observer.observe(tourDate));
});


document.getElementById("cart-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("cart-sidebar").classList.toggle("open");
});

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
}

// Open the cart sidebar
document.getElementById("cart-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("cart-sidebar").classList.add("open");
});

// Close the cart sidebar
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
}


document.getElementById("cart-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("active");
});

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
}