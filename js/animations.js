document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .hero-title, .hero-desc, .section-header').forEach(el => {
    el.classList.add('reveal-element');
    observer.observe(el);
  });
});