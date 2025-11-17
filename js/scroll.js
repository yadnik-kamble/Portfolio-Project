// Simple reveal on scroll for elements with .fade-in
const toReveal = document.querySelectorAll(".fade-in");

function onScrollReveal() {
  toReveal.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScrollReveal);
window.addEventListener("load", onScrollReveal);
