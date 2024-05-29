class Filter {
    constructor(select, items) {
        this.select = select
        this.items = items
        this.itemsObj = {}
        let i = 0
        this.items.forEach(element => {
            const temp = {
                element: element,
                categories: element.getAttribute("data-category").split(" "),
            }
            this.itemsObj[i] = temp
            i++
        });
        this.render()
        const self = this
        this.select.addEventListener("input", self.render.bind(self))
    }

    reset() {
        this.items.forEach(element => {
            element.classList.add("none")
        });
    }
    render() {
        this.reset()
        for (let key of Object.keys(this.itemsObj)) {
            const element = this.itemsObj[key]
            if (element.categories.indexOf(this.select.value) != -1) {
                element.element.classList.remove("none")
            }
        }
    }
}


export function newFilter(select_cls, items_cls) {
    const select = document.querySelector(select_cls)
    const items = document.querySelectorAll(items_cls)
    const filter = new Filter(select, items)
    return filter
}