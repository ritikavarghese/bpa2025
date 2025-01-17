document.addEventListener('DOMContentLoaded', () => {
  const tourDates = document.querySelectorAll('.tour-date'); // Target individual tour date items

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the "visible" class when the section is in the viewport
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is in the viewport

  // Observe each tour date item
  tourDates.forEach(tourDate => observer.observe(tourDate));
});
