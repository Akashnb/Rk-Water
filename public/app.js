document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarDefault = document.getElementById("navbar-default");
  const menuIcon = document.getElementById("menu-toggle-icon");
  const closeIcon = document.getElementById("menu-toggle-x");
  const navLinks = document.querySelectorAll(".nav-link");
  const updateActiveLink = () => {
    const currentHash = window.location.hash;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentHash) {
        link.classList.add("text-primary");
      } else {
        link.classList.remove("text-primary");
      }
    });
  };

  menuToggle.addEventListener("click", function () {
    // Toggle the visibility of the navbar
    navbarDefault.classList.toggle("hidden");

    // Toggle between the menu and close icons
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  updateActiveLink(); // Update the active link on page load

  // Update the active link on hash change
  window.addEventListener("hashchange", updateActiveLink);
});
