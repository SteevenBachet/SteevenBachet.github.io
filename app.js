// ouverture/fermeture menu navbar

const liste = document.querySelector("nav");
const btnMenu = document.querySelector(".menu-hamburger");
const darkOverlay = document.querySelector(".dark-overlay");

btnMenu.addEventListener("click", () => {

    liste.classList.toggle("active-menu");
    btnMenu.classList.toggle("active-menu");
    darkOverlay.classList.toggle("active-menu");

    darkOverlay.addEventListener("click", () => {
        liste.classList.remove("active-menu");
        btnMenu.classList.remove("active-menu");
        darkOverlay.classList.remove("active-menu");
    });
});

document.addEventListener("click", (event) => {
    const target = event.target;
    const isClickInsideMenu = liste.contains(target);
    const isClickInsideBtnMenu = btnMenu.contains(target);

    if (!isClickInsideMenu && !isClickInsideBtnMenu) {
        liste.classList.remove("active-menu");
        btnMenu.classList.remove("active-menu");
        darkOverlay.classList.remove("active-menu");
    }
});

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach((item) => {
    item.addEventListener("click", () => {
        liste.classList.remove("active-menu");
        btnMenu.classList.remove("active-menu");
        darkOverlay.classList.remove("active-menu");
    });
});

// interaction floating menu 

const btnFloatMenu = document.querySelectorAll(".item-menu");

btnFloatMenu.forEach(item => {
    
    item.addEventListener("mouseenter", (e) => {
        const itemName = e.target.querySelector(".item-name")
     
        itemName.classList.add("active")
    })
    item.addEventListener("mouseleave", (e) => {
        const itemName = e.target.querySelector(".item-name")

        itemName.classList.remove("active")
    })
})

// interaction item Portfolio 

const itemPortfolio = document.querySelectorAll(".project-item");

itemPortfolio.forEach(item => {
    
    item.addEventListener("mouseenter", (e) => {
        const itemOverlay = e.target.querySelector(".interaction-project")
     
        itemOverlay.classList.add("active")
       
    })
    item.addEventListener("mouseleave", (e) => {
        const itemOverlay = e.target.querySelector(".interaction-project")

        itemOverlay.classList.remove("active")
       
    })
})

// modale

const modalBtns = document.querySelectorAll(".modal-btn");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    const modal = btn.parentNode.parentNode.querySelector(".modal");

    modal.style.display = "block";

    const closeModalBtn = modal.querySelector(".close");
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});

