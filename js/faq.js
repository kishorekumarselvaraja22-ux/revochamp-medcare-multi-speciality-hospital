document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-q').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
});