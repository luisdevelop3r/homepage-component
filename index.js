const body = document.getElementsByTagName("body")[0];
const menu = document.getElementsByClassName("menu")[0];
const burgerMenuIcon = document.getElementById("burger-menu-icon");
const closeButton = document.getElementById("close-btn");
const darkModeIcon = document.getElementById("dark-mode");
const lightModeIcon = document.getElementById("light-mode");
const about = document.getElementById("about");
const description = document.getElementsByClassName("description")[0];
let darkMode = true;

function iniciarWeb() {
  burgerMenuIcon.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  darkModeIcon.addEventListener("click", toogleDarkMode);
  lightModeIcon.addEventListener("click", toogleDarkMode);
}

function openMenu() {
  menu.style.display = "flex";
}
function closeMenu() {
  menu.style.display = "none";
}
function toogleDarkMode() {
  if (darkMode) {
    darkMode = !darkMode;
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "inline-block";
    body.style.backgroundColor = "#111729";
    about.style.color = "white";
    description.style.color = "white";
    burgerMenuIcon.style.backgroundColor = "white";
    console.log("es de noche");
  } else {
    darkMode = !darkMode;
    darkModeIcon.style.display = "inline-block";
    lightModeIcon.style.display = "none";
    body.style.backgroundColor = "#F2F9FE";
    about.style.color = "#223344";
    description.style.color = "#223344";
    burgerMenuIcon.style.backgroundColor = "none";
    console.log("es de dia");
    console.log(description);
  }
}

// window.addEventListener("load", iniciarWeb);
window.onload = function() {
  iniciarWeb()
};
