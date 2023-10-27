import Alpine from "alpinejs";
import darkLogo from './images/LOGO_DARK.png';
import lightLogo from './images/LOGO_LIGHT.png';

window.Alpine = Alpine;

Alpine.start();

// Funció par establir el tema oscur o clar y actualitzar el logo
function setTheme(theme) {
  localStorage.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  const logoElement = document.getElementById("logo");
  if (logoElement) {
    logoElement.src = theme === "dark" ? darkLogo : lightLogo;
  }
}

// Comprova si ja existeix una preferència en localStorage
const storedTheme = localStorage.theme;

// Si hay una preferencia guardada, establece el tema y actualiza el logotipo en consecuencia
if (
  storedTheme === "dark" ||
  (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  setTheme("dark");
} else {
  setTheme("light");
}

// Agrega l'event click al botó per alternar entre els modes
document.getElementById("theme-toggle").addEventListener("click", () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  setTheme(isDarkMode ? "light" : "dark");
});

// Botó per tornar a dalt
const topBtn = document.querySelector("#topButton");

// Funció per fer el scroll a dalt
function scrolltoTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Per fer el scroll suau
    });
}

// Event click al botó
topBtn.addEventListener('click', scrolltoTop);

// Event scroll per mostrar o amagar el botó
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        topBtn.classList.remove("hidden");
        topBtn.style.display = "flex";
    } else {
        topBtn.classList.add("hidden");
        topBtn.style.display = "none";
    }
});