sal();

window.addEventListener("load", () => {
  /* HAMBURGER MENU */
  // drop down menu on hamburger icon click
  const hamburgerEl = document.getElementsByClassName("navigation__hamburger")[0];
  const navListEl = document.querySelector("header > nav");
  const navLinks = document.querySelector("header > nav > a");

  const toggleHamburger = () => {
    const isVisible = navListEl.style.display === "flex";
    if (isVisible) {
      navListEl.style.display = "none";
      document.body.style.height = "100%";
      document.body.style.overflow = "auto";
    } else {
      navListEl.style.display = "flex";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  }

  // toggle hamburger visibility on click
  hamburgerEl.addEventListener("click", () => {
    toggleHamburger();
  });

  // hide hamburger when a navlink is pressed
  for (const item of navLinks) {
    item.addEventListener("click", () => {
      const isVisible = navListEl.style.display === "flex";

      if (isVisible) toggleHamburger();
    });
  }

  // reset nav list and body styles on resize
  window.addEventListener("resize", () => {
    navListEl.style.display = "";
    document.body.style.height = "";
    document.body.style.overflow = "";
  });
});