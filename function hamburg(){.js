// Mobile menu toggle functions
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-100%)';
    document.body.style.overflow = ''; // Restore scrolling
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.dropdown .links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            cancel();
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
