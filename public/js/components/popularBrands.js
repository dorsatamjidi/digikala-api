function initpopularBrands() {
    var swiper = new Swiper(".myPopularBrands", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
export default initpopularBrands;