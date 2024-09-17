

function searchBar() {
    function initsearchBar() {
        var swiper = new Swiper(".mySearchBar", {
            slidesPerView: "auto",
            spaceBetween: 8,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    initsearchBar()

    let searchBar = document.querySelector(".searchBar");
    let searchBar__mob = document.querySelector(".searchBar__mob");
    let searchBar__active = document.querySelector(".searchBar__active");
    let searchBar__active__mob = document.querySelector(".searchBar__active__mob");
    let searchBar__container = document.querySelector(".searchBar__container");
    let searchBar__container__mob = document.querySelector(".searchBar__container__mob");
    let scrollControl = document.querySelector(".scrollControl");
    let searchBar__closeButton = document.querySelector(".searchBar__closeButton");
    let searchBar__closeButton__mob = document.querySelector(".searchBar__closeButton__mob");

    searchBar.addEventListener("click", function () {
        searchBar__active.classList.remove("hidden");
        searchBar__active.classList.add("block");
        searchBar__container.classList.remove("hidden");
        searchBar__container.classList.add("block");
        scrollControl.classList.add("overflow-hidden");
        setTimeout(function () {
            searchBar__active.classList.remove("mobile:translate-y-full");
            searchBar__active.classList.add("mobile:translate-y-0");
        }, 30)
    });

    searchBar__mob.addEventListener("click", function () {
        searchBar__active__mob.classList.remove("hidden");
        searchBar__active__mob.classList.add("block");
        searchBar__container__mob.classList.remove("hidden");
        searchBar__container__mob.classList.add("block");
        scrollControl.classList.add("overflow-hidden");
        setTimeout(function () {
            searchBar__active__mob.classList.remove("mobile:translate-y-full");
            searchBar__active__mob.classList.add("mobile:translate-y-0");
        }, 30)
    });

    searchBar__closeButton.addEventListener("click", function () {
        searchBar__active.classList.add("mobile:translate-y-full");
        searchBar__active.classList.remove("mobile:translate-y-0");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            searchBar__active.classList.remove("block");
            searchBar__active.classList.add("hidden");
            searchBar__container.classList.remove("block");
            searchBar__container.classList.add("hidden");
        }, 300)
    });

    searchBar__closeButton__mob.addEventListener("click", function () {
        searchBar__active__mob.classList.add("mobile:translate-y-full");
        searchBar__active__mob.classList.remove("mobile:translate-y-0");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            searchBar__active__mob.classList.remove("block");
            searchBar__active__mob.classList.add("hidden");
            searchBar__container__mob.classList.remove("block");
            searchBar__container__mob.classList.add("hidden");
        }, 300)
        searchBar__active.classList.add("mobile:translate-y-full");
        searchBar__active.classList.remove("mobile:translate-y-0");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            searchBar__active.classList.remove("block");
            searchBar__active.classList.add("hidden");
            searchBar__container.classList.remove("block");
            searchBar__container.classList.add("hidden");
        }, 300)
    });
    
    searchBar__container.addEventListener("click", function () {
        searchBar__active__mob.classList.add("mobile:translate-y-full");
        searchBar__active__mob.classList.remove("mobile:translate-y-0");
        searchBar__active.classList.remove("block");
        searchBar__active.classList.add("hidden");
        searchBar__container.classList.remove("block");
        searchBar__container.classList.add("hidden");
        scrollControl.classList.remove("overflow-hidden");
    });


}
export default searchBar;