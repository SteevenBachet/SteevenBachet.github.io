// ouverture/fermeture menu

const liste = document.querySelectorAll(".liste-nav");
const btnMenu = document.querySelector(".menu-hamburger");

btnMenu.addEventListener("click", () => {
    liste[0].classList.toggle("active-menu");
    btnMenu.classList.toggle("active-menu");
}
)

// fermeture menu après avoir cliquer sur un item

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach(item => {
    item.addEventListener("click", () => {
        liste[0].classList.remove("active-menu");
        btnMenu.classList.toggle("active-menu");
    })
})

// scroll nav

const nav = document.querySelectorAll("nav");
const overlay = document.querySelectorAll(".overlay");
const symboles = document.querySelectorAll(".symboles");
const logo = document.querySelectorAll(".logo");

window.addEventListener("scroll", () => {

    const {scrollTop, clientHeight} = document.documentElement;

    topElementToTopViewport = overlay[0].getBoundingClientRect().top

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.6) {
        nav[0].classList.add("active");
        liste[0].classList.add("active");
        symboles[0].classList.add("active");
        logo[0].classList.add("active");
        btnMenu.classList.add("active")
    }
    else {
        nav[0].classList.remove("active");
        liste[0].classList.remove("active");
        symboles[0].classList.remove("active");
        logo[0].classList.remove("active");
        btnMenu.classList.remove("active")
    }
    
})

// CAROUSEL

class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
     * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
     */

    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
       
        let children = [].slice.call(element.children)
        this.isMobile = false
        this.currentItem = 0
        this.root = this.createDivWithClass("carousel")
        this.container = this.createDivWithClass("carousel__container")
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)

        this.items = children.map((child) => {
            let item = this.createDivWithClass("carousel__item")
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        }) 

        this.setStyle()
        this.createNavigation()
        window.addEventListener("resize", this.onWindowResize.bind(this))
    }

    /**
     * Applique les bonnes dimentions aux éléments du carousel
     */

    setStyle () {
        let ratio = this.items.length/ this.slidesVisible
        this.container.style.width = (ratio * 90) + "%"
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%"
        )
    }
    
    createNavigation() {
        let nextButton = this.createDivWithClass("carousel__next")
        let prevButton = this.createDivWithClass("carousel__prev")
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener("click", this.next.bind(this))
        prevButton.addEventListener("click", this.prev.bind(this))
    }

    next () {
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev () {
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index 
     */

    gotoItem(index) {
        if (index < 0) {
          index = this.items.length - this.slidesVisible;
        } else if (index >= this.items.length - (this.slidesVisible - 1)) {
          index = 0;
        }
        let translateX = index * (-100 / this.items.length);
        this.container.style.transform = `translate3d(${translateX}%, 0, 0)`;
        this.currentItem = index;
    }

    onWindowResize() {
        let mobile = window.innerWidth < 600
        if(mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
        }
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */

    createDivWithClass (className) {
        let div = document.createElement("div")
        div.setAttribute("class", className)
        return div
    }

    /**
     * @returns {number}
     * 
     */
    get slidesToScroll () {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    get slidesVisible () {
        return this.isMobile ? 1 : this.options.slidesVisible
    }
}

new Carousel (document.querySelector("#carousel1"), {
    slidesVisible: 2
})

/* Boutique button plus */ 

const btnMore = document.querySelector(".btn-plus")
const boutiqueContainer = document.querySelector(".boutique-container-bloc")

btnMore.addEventListener("click", () => {
    boutiqueContainer.classList.toggle("active");
    btnMore.classList.toggle("active");
}
)