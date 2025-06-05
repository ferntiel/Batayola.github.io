// Mobile menu toggle functions
function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu when clicking a link
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', () => {
        cancel();
        // Smooth scroll to section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');
    
    if (dropdown.classList.contains('active') && 
        !dropdown.contains(e.target) && 
        e.target !== hamburg) {
        cancel();
    }
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        cancel();
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const body = document.body;

    if (!hamburger || !mobileMenu || !menuIcon) {
        console.error('Required menu elements not found');
        return;
    }

    // Toggle menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click from bubbling to document
        console.log('Hamburger clicked'); // Debug log
        toggleMenu();
    });

    // Function to toggle menu state
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Toggle menu icon
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }

    // Function to close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }

    // Handle mobile menu links
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Close menu
            closeMenu();

            // Smooth scroll to section
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
});
