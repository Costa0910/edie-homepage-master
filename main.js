const navLinks = document.querySelector(".head__nav");
const menuOpen = document.getElementById("icon-open");
const menuClose = document.getElementById("icon-close");

menuOpen.addEventListener("click", handleOpen);
menuClose.addEventListener("click", handleClose);


function handleOpen() {
  menuOpen.classList.add("close");
  navLinks.classList.add("show");
  menuClose.classList.remove("close");
  navLinks.classList.remove("nav__menu");
}

function handleClose() {
  menuClose.classList.add("close");
  navLinks.classList.remove("show");
  menuOpen.classList.remove("close");
  navLinks.classList.add("nav__menu");
}
