const hamburgerBtn = document.querySelector(".hamburger-button");
const menuLinks = document.querySelector(".menu-links");
const individualLinks = document.querySelectorAll(".menu-links a");

function toggleMenu() {
  hamburgerBtn.classList.toggle("open");
  menuLinks.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);

individualLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
