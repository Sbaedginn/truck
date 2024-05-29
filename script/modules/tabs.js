class Tabs {
    constructor(tabsClass) {
        this.tabs = document.querySelector(tabsClass)
        this.num = this.tabs.querySelectorAll(".location_places li")
        this.workItems = this.tabs.querySelectorAll(".location_place")
        this.self = this
    }

    clickNum(e) {
        this.num.forEach(el => {
            el.classList.remove("active_tab")
        });
        e.target.classList.add("active_tab")
        let numClick = parseInt(e.target.getAttribute("data-n-place"))
        let i = 0
        this.workItems.forEach(el => {
            if (i == numClick) {
                el.classList.remove("none")
            } else {
                el.classList.add("none")
            }
            i++
        })
    }
}

export function newTabs(tabsClass) {
    let tabs = new Tabs(tabsClass)

    tabs.num.forEach(el => {
        el.addEventListener("click", (e) => {
            tabs.self.clickNum(e)
        })
    });

    return tabs
}