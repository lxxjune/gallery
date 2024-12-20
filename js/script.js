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

  // 스크롤에 따른 헤더 스타일 변경
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });

  // 페이지 로드시 맨 위로 스크롤
  window.scrollTo(0, 0);

  // Filter Projects by Category
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      //ALL btn
      if (category === "all") {
        boxes.forEach((box) => (box.style.display = "block"));
        return;
      }
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
