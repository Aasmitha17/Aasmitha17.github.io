document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      
      navLinks.forEach(l => l.classList.remove("active"));
  
      sections.forEach(sec => sec.classList.remove("active"));

      link.classList.add("active");
      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
