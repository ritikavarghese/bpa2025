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
