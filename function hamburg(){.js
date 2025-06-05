// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const menuLinks = document.querySelectorAll('.dropdown .links a');

    // Toggle menu when hamburger is clicked
    window.hamburg = function() {
        dropdown.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    // Close menu when X is clicked
    window.cancel = function() {
        dropdown.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdown.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = dropdown.contains(event.target);
        const isClickOnHamburger = event.target.closest('.hamburg');
        const isMenuActive = dropdown.classList.contains('active');
        
        if (isMenuActive && !isClickInsideMenu && !isClickOnHamburger) {
            cancel();
        }
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
