// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const header = document.querySelector(".header");

  if (mobileMenuButton && header) {
    mobileMenuButton.addEventListener("click", function () {
      header.classList.toggle("mobile-menu-open");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !header.contains(event.target) &&
      header.classList.contains("mobile-menu-open")
    ) {
      header.classList.remove("mobile-menu-open");
    }
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
          });

          // Update URL without page reload
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Highlight active navigation items
  const currentPath = window.location.pathname;
  document.querySelectorAll(".navigation a").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (
      currentPath === linkPath ||
      (linkPath !== "/" && currentPath.startsWith(linkPath))
    ) {
      link.classList.add("active");
      link.style.fontWeight = "bold";
      link.style.opacity = "1";
    }
  });
});
