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

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split('/').pop();
  const menuLinks = document.querySelectorAll('[data-page]');

  menuLinks.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('text-blue-500');
    }
  });
});
