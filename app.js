const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
