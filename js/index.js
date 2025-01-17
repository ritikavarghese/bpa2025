let currentIndex = 0;

function moveSlide(step) {
  const items = document.querySelectorAll('.album-item');
  const totalItems = items.length;
  
  currentIndex += step;

  if (currentIndex >= totalItems) {
    currentIndex = 0; // Wrap around to the first image
  } else if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Wrap around to the last image
  }

  updateCarousel();
}

function updateCarousel() {
  const items = document.querySelectorAll('.album-item');
  const totalItems = items.length;

  const itemWidth = 320; // Fixed width for each item
  const itemMargin = 10; // Margin between items
  const totalWidth = (itemWidth + itemMargin * 2) * totalItems; // Total width of the carousel container

  // Calculate the offset (how far to slide)
  const offset = (itemWidth + itemMargin * 2) * currentIndex;

  // Move the carousel by updating the transform property
  document.querySelector('.carousel').style.transform = `translateX(-${offset}px)`;
}
