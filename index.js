const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".Barra1 ul")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})