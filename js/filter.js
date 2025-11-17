// filter buttons for projects
const filterButtons = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".project-card");

function setActiveButton(btn) {
  filterButtons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    setActiveButton(btn);

    projectCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
