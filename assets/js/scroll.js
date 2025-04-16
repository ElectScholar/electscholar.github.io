// Add this JavaScript to your existing code
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Scroll event to handle navbar shrinking/growing
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle (if you want to implement this functionality)
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function() {
        header.classList.toggle('menu-open');
      });
    }
  });