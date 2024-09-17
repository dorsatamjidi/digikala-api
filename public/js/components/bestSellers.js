function initbestSellers() {
    var swiper = new Swiper(".myBestSellers", {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
export default initbestSellers;