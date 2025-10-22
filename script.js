
const navLinks = document.querySelectorAll('nav a');
// Select all sections
const sections = document.querySelectorAll('section');

// Function to show only the selected section
function showSection(id) {
  sections.forEach(section => {
    // Show only the section that matches the clicked link
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

    // Get the target section id (remove the "#" from href)
    const targetId = this.getAttribute('href').substring(1);

    // Show only the clicked section
    showSection(targetId);
  });
});
