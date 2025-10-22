const navLinks = document.querySelectorAll('nav a');

const sections = document.querySelectorAll('section');

let hasClicked = false;

function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    hasClicked = true;
    showSection(targetId);
  });
});

sections.forEach(section => {
  section.style.display = 'block';
});
