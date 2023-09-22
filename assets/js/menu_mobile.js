export function setupMenu() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const headerNav = document.getElementById("header-nav");
    headerNav.classList.toggle("active");
    const active = headerNav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  function closeMenuOnOptionSelect() {
    const headerNav = document.getElementById("header-nav");
    headerNav.classList.remove("active");
    btnMobile.setAttribute("aria-expanded", false);
    btnMobile.setAttribute("aria-label", "Abrir Menu");
  }

  const menuItems = document.querySelectorAll(".wc-header__menu--nav_item a");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", closeMenuOnOptionSelect);
  });

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
