// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        // Show item if category matches or 'all'
        item.style.display = (category === 'all' || itemCategory === category)
          ? 'block'
          : 'none';
      });

      // Highlight the active button (optional)
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});