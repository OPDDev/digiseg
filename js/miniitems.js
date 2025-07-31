const section = document.getElementById('servicos');
const links = document.querySelectorAll('.mini-items a');
let currentIndex = 0;
let autoChangeInterval;

// Function to activate a link and change the section background
function activateLink(link) {
// Remove 'active' class from all links
links.forEach(a => a.classList.remove('active'));

// Add 'active' class to the selected link
link.classList.add('active');

// Change the section background to the color specified in data-bg
const bg = link.getAttribute('data-bg');
section.style.backgroundImage = `url("${bg}"`;

// Update currentIndex to keep in sync with automatic change
currentIndex = Array.from(links).indexOf(link);
}

// Add mouseenter event to activate link on hover
links.forEach(link => {
link.addEventListener('mouseenter', () => {
    activateLink(link);
});
});

// Automatically activate the next link every 5 seconds
function startAutoChange() {
autoChangeInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % links.length;
    activateLink(links[currentIndex]);
}, 4000); // Change every 5000ms = 5 seconds
}

// Activate the first link initially
activateLink(links[0]);

// Start automatic cycling
startAutoChange();