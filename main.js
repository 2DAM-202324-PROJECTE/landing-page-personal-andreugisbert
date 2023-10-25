import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// Funció par establir el tema oscur o clar y actualitzar el logo
function setTheme(theme) {
  localStorage.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  const logoElement = document.getElementById("logo");
  if (logoElement) {
    logoElement.src =
      theme === "dark" ? "images/LOGO_DARK.png" : "images/LOGO_LIGHT.png";
  }
}

// Comprova si ja existeix una preferència a localStorage
const storedTheme = localStorage.theme;

// Si hi ha una preferència guardada, estableix el tema y actualitza el logo segons la preferència
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
