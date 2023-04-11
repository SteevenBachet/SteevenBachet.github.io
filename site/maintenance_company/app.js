// ouverture/fermeture menu

const menu = document.querySelector(".liste-nav");
const btnMenu = document.querySelector(".menu-hamburger");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    btnMenu.classList.toggle("active")
}
)

// ouverture/fermeture des items avec les dropdown

const items = document.querySelectorAll(".item-nav");

items.forEach(item => {
    item.addEventListener("click", () => {

        if (item.firstElementChild.classList.contains("active-menu")) 
        {
            item.firstElementChild.classList.remove("active-menu");
        }
        else {

            items.forEach(event => {
                event.firstElementChild.classList.remove("active-menu")
            })

            item.firstElementChild.classList.toggle("active-menu");
        }
        
    }
    )
})

// sortir des menus en cliquant sur un des link 

const allLinks = document.querySelectorAll(".dropdown-content");

allLinks.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active-menu");
        btnMenu.classList.toggle("active")
    })
})

// animation scroll

const reveals = document.querySelectorAll(".explain-bloc")

function reveal() {
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
      }
}

window.addEventListener("scroll", reveal);