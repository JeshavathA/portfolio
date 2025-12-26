// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Carousel infinite loop (duplicate images once)
const track = document.getElementById("carouselTrack");
if (track) {
  const imgs = Array.from(track.querySelectorAll("img"));
  imgs.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });
}
