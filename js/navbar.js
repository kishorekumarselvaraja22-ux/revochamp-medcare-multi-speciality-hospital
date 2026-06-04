function toggleDrawer(open) {
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  if (drawer && overlay) {
    if (open) {
      drawer.classList.add('active');
      overlay.classList.add('active');
    } else {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
}