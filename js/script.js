document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");
  const scrollDown = document.getElementById("scroll-down");
  const projectsSection = document.getElementById("projects");
  const navButtons = document.querySelectorAll(".nav-btn");
  const boxes = document.querySelectorAll(".box");

  // Reset Functionality
  resetButton.addEventListener("click", () => {
    boxes.forEach((box) => (box.style.display = "block"));
  });

  // Scroll to Projects Section
  scrollDown.addEventListener("click", () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Filter Projects by Category
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      boxes.forEach((box) => {
        if (box.classList.contains(category)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
