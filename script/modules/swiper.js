class Swiper {
    constructor(swiperClass) {
        this.swiper = document.querySelector(swiperClass)
        this.i = 1;
        this.n = this.swiper.querySelectorAll(".swiper_body-slide").length
        this.shift = 0
        this.resize_slide(this.swiper)
        let self = this
        this.left = this.swiper.querySelector(".swiper-left")
        this.right = this.swiper.querySelector(".swiper-right")
        this.left.addEventListener("click", self.previous_slide.bind(self))
        this.right.addEventListener("click", self.next_slide.bind(self))
    }

    resize_slide(sw) {
        document.documentElement.style.setProperty("--width_slide_photes", `${sw.offsetWidth}px`);
        this.shift = this.swiper.offsetWidth * (this.i - 1)
            this.swiper.querySelector(".swiper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
    }

    next_slide() {
        if (this.i != this.n) {
            this.shift = this.shift + this.swiper.offsetWidth
            this.swiper.querySelector(".swiper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i++
        } else {
            this.shift = 0
            this.swiper.querySelector(".swiper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i = 1
        }
    }
    previous_slide() {
        if (this.i != 1) {
            this.shift = this.shift - this.swiper.offsetWidth
            this.swiper.querySelector(".swiper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i--
        } else {
            this.shift = this.swiper.offsetWidth * (this.n - 1)
            this.swiper.querySelector(".swiper_body").style.transform = `translate3d(-${this.shift}px, 0px, 0px)`
            this.i = this.n
        }
    }
}

function newSwiper(swiperClass) {
    let sw = new Swiper(swiperClass)
    
    window.addEventListener("resize", () => {
        console.log("resize");
        sw.resize_slide(sw.swiper)
    })

    return sw
}

export { newSwiper }