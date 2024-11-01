// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slide menu back when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const heroTitle = document.querySelector(".hero-title");
heroTitle.classList.add("fade-in");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const header = document.querySelector("header");
  if (scrollPos > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
