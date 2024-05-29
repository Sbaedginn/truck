import { newSwiper } from "./modules/swiper.js";
import { newFilter } from "./modules/filter.js";
import { newTabs } from "./modules/tabs.js";
import { newAccordion } from "./modules/accordion.js";

newSwiper(".swiper")
newFilter(".products_select", ".products_item")
newTabs("#location")
newAccordion(".questions_wrap")

const modal = document.querySelector(".modal")
const btnModal = document.querySelector(".header_bottom-btn")
const clouseModal = document.querySelector(".modal_body > img")

btnModal.addEventListener("click", () => {
    modal.classList.remove("none")
})
clouseModal.addEventListener("click", () => {
    modal.classList.add("none")
})



const menu_btn = document.querySelector(".header_bottom-burgermenu")
const mobail_menu = document.querySelector(".header_mobailmenu")
menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("open")
    if (menu_btn.classList.contains("open")) {
        mobail_menu.classList.add("open")
    } else {
        mobail_menu.classList.remove("open")
    }
})