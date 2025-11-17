// Theme toggle + persist
localStorage.removeItem("theme");

const themeBtn = document.querySelector("#theme-toggle");

// Apply saved theme
function applyTheme(theme) {
  if (theme === "dark") document.body.classList.add("dark");
  else document.body.classList.remove("dark");
}

const stored = localStorage.getItem("theme");
applyTheme(stored || "light");

// Set correct icon on load
themeBtn.textContent = stored === "dark" ? "☀️" : "🌙";

// Toggle theme on click
themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
});
