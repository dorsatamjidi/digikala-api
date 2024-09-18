async function story() {

    let storyWrapper = document.querySelector(".storyWrapper");
  
    function initstory() {
      var swiper = new Swiper(".myStory", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    
  
    async function fetchSlides() {
      try {
        let data = await fetch("http://localhost:3000/story");
        let res = await data.json();
        let slides = res.map((item) => {
          return `<div class="swiper-slide mobile:!w-[100px] deskt:!w-[112px]">
                  <div class="w-full h-full px-2 py-4 flex flex-col justify-start items-center">
                    <div
                      class="w-[74px] h-[74px] rounded-full overflow-hidden outline outline-[2px] outline-[#b047a0] outline-offset-[3px]">
                      <img src=${item.src} alt="" class="w-full h-full object-cover">
                    </div>
                    <span class="block text-[11px] text-[#23254e] font-[400] mt-5 text-center">${item.caption}</span>
                  </div>
                </div>`
        });
        storyWrapper.insertAdjacentHTML("beforeend", slides.join(""));
      } catch (error) {
        console.log(error.message);
  
      }
    };
  
    await fetchSlides();
    initstory();
  
};

export default story;
