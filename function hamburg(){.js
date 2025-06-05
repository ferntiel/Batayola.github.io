// Wait for DOM to be fully loaded
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

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Text content for the typewriter effect
const texts = [
    "DEVELOPER",
    "CS STUDENT",
    "PROGRAMMER"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

// Function to type text character by character
function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

// Function to erase text character by character
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;
