const menu = document.getElementById("mobile-nav");
const hamburgerButton = document.getElementById("hamburger-menu");
const closeButton = document.querySelector(".close-menu");

hamburgerButton.addEventListener("click", function (e) {
  menu.classList.add("show");
  setAriaExpanded();
});

function closeNav() {
  menu.classList.remove("show");
  setAriaExpanded();
}

/* Set aria expanded on menu button */
function setAriaExpanded() {
  var x = hamburgerButton.getAttribute("aria-expanded");
  if (x === "false") {
    x = "true";
  } else {
    x = "false";
  }
  hamburgerButton.setAttribute("aria-expanded", x);
}
