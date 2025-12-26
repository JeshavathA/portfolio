// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

