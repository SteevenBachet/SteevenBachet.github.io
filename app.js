const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".logo-menu");


btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    console.log("yo")
}
)

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active-menu");
    })
})