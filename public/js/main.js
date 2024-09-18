import digiServices from "./components/digiServices.js";
import initcategory from "./components/category.js";
import initpopularBrands from "./components/popularBrands.js";
import initbestSellers from "./components/bestSellers.js";
import citySelection from "./components/citySelection.js";
import searchBar from "./components/searchBar.js";
import applicationDownload from "./components/applicationDownload.js";
import contactUs from "./components/contactUs.js";
import footer from "./components/footer.js";
import supermarket from "./components/superMarket.js";
import header from "./components/header.js";
citySelection();
digiServices();
initcategory();
initpopularBrands();
initbestSellers();
searchBar();
applicationDownload();
contactUs();
footer();
supermarket();
header();

// amazingoffer api
async function amzingOffer() {

    let amazingOffersWrapper = document.querySelector(".amazingOffersWrapper");
  
    function initamzingOffer() {
      var swiper = new Swiper(".myAmzingOffer", {
        slidesPerView: "auto",
        spaceBetween: 4,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
  
    async function fetchSlides() {
      try {
        let data = await fetch("http://localhost:3000/amazingOffers");
        let res = await data.json();
        let slides = res.map((item) => {
          return `<div class="swiper-slide mobile:!w-[130px] deskt:!w-[160px] !h-full bg-white px-[10px] py-3">
                   <a href="" class="w-full h-full flex flex-col justify-between items-center">
                    <div class="w-fit h-fit relative">
                      <img src=${item.src} alt="" class="mobile:w-[114px] deskt:w-[132px]">
                      <div
                        class="absolute left-0 bottom-0 w-[34px] h-[20px] bg-[rgb(211,47,47)] rounded-2xl mobile:flex deskt:hidden items-center justify-center">
                        <span class="text-[12px] text-white font-[iranYekanFaNum]">${item.off}</span>
                      </div>
                    </div>
                    <div class="w-full h-[40px] mt-3">
                      <h3 class="text-[12px] text-[rgb(98,102,109)] truncate">${item.caption}</h3>
                    </div>
                    <div class="w-full flex mobile:justify-end deskt:justify-between items-start">
                      <div
                        class="mobile:hidden w-[34px] h-[20px] bg-[rgb(211,47,47)] rounded-2xl deskt:flex items-center justify-center">
                        <span class="text-[12px] text-white font-[iranYekanFaNum]">${item.off}</span>
                      </div>
                      <div class="text-center">
                        <div class="flex justify-between items-center">
                          <span class="text-[14px] text-[#3f4064] font-[iranYekanFaNum]">${item.price}</span>
                          <svg style="width: 16px; height: 16px; fill: #424750;">
                            <path fill-rule="evenodd"
                              d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <div class="">
                          <span class="text-[12px] text-[#c0c2c5] font-[iranYekanFaNum] line-through">${item.previousprice}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>`
        });
        amazingOffersWrapper.insertAdjacentHTML("beforeend", slides.join(""));
      } catch (error) {
        console.log(error.message);
  
      }
  
      
    }
    await fetchSlides();
    initamzingOffer();
  }
  amzingOffer();
// autoplayBanner api
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
        let data = await fetch("http://localhost:3000/autoplayBanner");
        let res = await data.json();
        let slide = res.map((item) => {
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
  
  }
  autoplayBanner();
// bestOffers api
  function bestOffers() {

    let bestOffersWrapper = document.querySelector(".bestOffersWrapper");

    async function fetchProducts() {
        try {
            let data = await fetch("http://localhost:3000/bestOffers");
            let res = await data.json();
            let products = res.map((item) =>{
                return`<a href="" class="w-full h-full flex flex-col justify-between items-center px-2 py-3 bg-white">
                  <div class="w-fit h-fit relative">
                    <img src=${item.src} alt="" class="mobile:w-[130px] deskt:w-[150px]">
                  </div>
                  <div class="w-full flex justify-between items-start pt-2">
                    <div class="w-[34px] h-[20px] bg-[rgb(211,47,47)] rounded-2xl flex items-center justify-center">
                      <span class="text-[12px] text-white font-[iranYekanFaNum]">${item.off}</span>
                    </div>
                    <div class="text-center">
                      <div class="flex justify-between items-center">
                        <span class="text-[14px] text-[#3f4064] font-[iranYekanFaNum]">${item.price}</span>
                        <svg style="width: 16px; height: 16px; fill: #424750;">
                          <path fill-rule="evenodd"
                            d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <div class="">
                        <span class="text-[12px] text-[#c0c2c5] font-[iranYekanFaNum] line-through">${item.previousprice}</span>
                      </div>
                    </div>
                  </div>
                </a>`
            });
            bestOffersWrapper.insertAdjacentHTML("beforeend", products.join(""));
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchProducts();

}
bestOffers();
// popularCategory api
function popularCategory() {

    let popularCategoryWrapper__1 = document.querySelector(".popularCategoryWrapper__1");
    let popularCategoryWrapper__2 = document.querySelector(".popularCategoryWrapper__2");

    async function fetchProducts__1() {
        try {
            let data = await fetch("http://localhost:3000/popularCategory__1");
            let res = await data.json();
            let products = res.map((item) =>{
                return `<div class="px-5 py-2 bg-white">
              <div class="py-2">
                <h4 class="text-[16px] font-[iranYekanBold] text-[#23254e] mb-2">${item.title}</h4>
                <p class="text-[11px] text-[#81858b]">بر اساس سلیقه شما</p>
              </div>
              <div class="grid grid-cols-2 grid-rows-2 gap-[1px] bg-[#f0f0f1] my-2">
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__1} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__2} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__3} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__4} alt="">
                  </a>
                </div>
              </div>
              <div class="w-full flex items-center justify-center mb-4">
                <a href="" class="flex items-center">
                  <p class="text-[12px] text-[#19bfd3] mt-1 ml-1">مشاهده</p>
                  <svg style="width: 18px; height: 18px; fill: #19bfd3; scale: 0.7;">
                    <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                  </svg>
                </a>
              </div>
            </div>`
            });
            popularCategoryWrapper__1.insertAdjacentHTML("beforeend", products.join(""));
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async function fetchProducts__2() {
        try {
            let data = await fetch("http://localhost:3000/popularCategory__2");
            let res = await data.json();
            let products = res.map((item) =>{
                return `<div class="px-5 py-2 bg-white">
              <div class="py-2">
                <h4 class="text-[16px] font-[iranYekanBold] text-[#23254e] mb-2">${item.title}</h4>
                <p class="text-[11px] text-[#81858b]">بر اساس سلیقه شما</p>
              </div>
              <div class="grid grid-cols-2 grid-rows-2 gap-[1px] bg-[#f0f0f1] my-2">
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__1} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__2} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__3} alt="">
                  </a>
                </div>
                <div class="bg-white p-2 flex justify-center items-center">
                  <a href="" class="block w-fit mx-auto">
                    <img src=${item.src__4} alt="">
                  </a>
                </div>
              </div>
              <div class="w-full flex items-center justify-center mb-4">
                <a href="" class="flex items-center">
                  <p class="text-[12px] text-[#19bfd3] mt-1 ml-1">مشاهده</p>
                  <svg style="width: 18px; height: 18px; fill: #19bfd3; scale: 0.7;">
                    <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
                  </svg>
                </a>
              </div>
            </div>`
            });
            popularCategoryWrapper__2.insertAdjacentHTML("beforeend", products.join(""));
        } catch (error) {
            console.log(error.message);
            
        }
    }
    fetchProducts__1();
    fetchProducts__2();
};
popularCategory();
// story api
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
story();


