import axios from "axios";

async function autoplayBanner() {

  let autoplayBannerWrapper = document.querySelector(".autoplayBannerWrapper");

  function initautoplayBanner() {
    var swiper = new Swiper(".myAutoplayBanner", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  async function fetchSlides() {
    try {
      let res = await axios.get("http://localhost:3000/autoplayBanner");
      let slide = res.data.map((item) => {
        return `<div class="swiper-slide !w-full !h-full">
                <a href="#">
                  <img src=${item.src}
                    alt="" class="w-full h-full object-cover">
                </a>
              </div>`
      });
      autoplayBannerWrapper.insertAdjacentHTML("beforeend", slide.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  

  await fetchSlides();
  initautoplayBanner();
};
export default autoplayBanner;
