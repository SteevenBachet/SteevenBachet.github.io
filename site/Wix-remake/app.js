const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".menu-hamburger");


btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
}
)

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active-menu");
    })
})
