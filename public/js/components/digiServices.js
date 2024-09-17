function digiServices() {
    function initdigiServices() {
        var swiper = new Swiper(".myDigiServices", {
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
        });
    }
    initdigiServices();

    let digiServicesMore = document.querySelector(".digiServicesMore");
    let digiServicesMore__cover = document.querySelector(".digiServicesMore__cover");
    let digiServicesMore__container = document.querySelector(".digiServicesMore__container");
    let digiServicesMore__closeButton = document.querySelector(".digiServicesMore__closeButton");
    let digiServicesMore__active = document.querySelector(".digiServicesMore__active"); 
    let scrollControl = document.querySelector(".scrollControl");
    

    digiServicesMore.addEventListener("click",function () {
        digiServicesMore__cover.classList.remove("hidden");
        digiServicesMore__cover.classList.add("block");
        digiServicesMore__active.classList.remove("hidden");
        digiServicesMore__active.classList.add("block");
        scrollControl.classList.add("overflow-hidden");
        setTimeout(function () {
            digiServicesMore__active.classList.remove("mobile:translate-y-full");
            digiServicesMore__active.classList.add("mobile:translate-y-0");
        }, 30) 
    })
    digiServicesMore__container.addEventListener("click",function () {
        digiServicesMore__cover.classList.remove("block");
        digiServicesMore__cover.classList.add("hidden");
        digiServicesMore__active.classList.add("hidden");
        digiServicesMore__active.classList.remove("block");
        scrollControl.classList.remove("overflow-hidden")  
    })
    digiServicesMore__closeButton.addEventListener("click",function () {
        digiServicesMore__active.classList.add("mobile:translate-y-full");
        digiServicesMore__active.classList.remove("mobile:translate-y-0");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            digiServicesMore__cover.classList.remove("block");
            digiServicesMore__cover.classList.add("hidden");
        }, 200)  
    })
}

export default digiServices;