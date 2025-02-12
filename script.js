document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navContainer = document.querySelector(".nav-container");

  // Toggle menu on click
  menuIcon.addEventListener("click", () => {
    navContainer.classList.toggle("show");

    if (navContainer.classList.contains("show")) {
      navContainer.style.display = "flex";
    } else {
      navContainer.style.display = "none";
    }
  });

  //menu resets when resizing back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navContainer.classList.remove("show");
      navContainer.style.display = "flex";
    } else {
      navContainer.style.display = "none";
    }
  });
});
