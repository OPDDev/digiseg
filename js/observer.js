const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class when the element enters the viewport
      entry.target.classList.add("visible");
    } else {
      // Remove the 'visible' class when the element leaves the viewport
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.25 // The element needs to be 50% visible to trigger the effect
});

// Select all 'container' elements
const containers = document.querySelectorAll('.container');

// Check if there are any containers, then start observing them
if (containers.length > 0) {
  containers.forEach(container => observer.observe(container));
} else {
  console.error("No 'container' elements found!");
}

const track = document.getElementById('carouselTrack');
const logos = Array.from(track.children);

// Clona os logos uma vez para criar o loop
logos.forEach(logo => {
  const clone = logo.cloneNode(true);
  track.appendChild(clone);
});
