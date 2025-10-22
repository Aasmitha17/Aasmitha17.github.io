// Select all navigation links
const navLinks = document.querySelectorAll('nav a');
// Select all sections
const sections = document.querySelectorAll('section');

// Function to show only the selected section
function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Add click event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Get the target section id (e.g., "#about" -> "about")
    const targetId = this.getAttribute('href').substring(1);

    // Show the selected section and hide others
    showSection(targetId);
  });
});

// Initially show only the About section (or whichever you prefer)
showSection('about');
