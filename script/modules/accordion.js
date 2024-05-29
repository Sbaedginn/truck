class Accordion {
    constructor(accordionСlass) {
        this.accordion = document.querySelector(accordionСlass)
        this.accordionItems = this.accordion.querySelectorAll(".wrap_item")
        this.self = this
        this.old_active;
        console.log(this.accordionItems);
        this.hideAll()
    }

    hideAll() {
        this.accordionItems.forEach(element => {
            element.classList.remove("active")
        });
    }

    clickItem(el) {
        this.hideAll()
        if (this.old_active !== el) {
            this.old_active = el
            el.classList.add("active")
        } else {
            this.old_active = null
        }
    }
}

export function newAccordion(accordionСlass) {
    let accordion = new Accordion(accordionСlass)

    accordion.accordionItems.forEach(el => {
        el.addEventListener("click", (e) => {
            accordion.self.clickItem(el)
        })
    });
}