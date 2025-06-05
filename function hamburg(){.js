// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu a');
    const body = document.body;

    // Toggle menu
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked'); // Debug log
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking a link
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Close menu
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');

            // Scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Prevent menu close when clicking inside menu
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Debug log to confirm script is running
    console.log('Mobile menu script loaded');
}); 
