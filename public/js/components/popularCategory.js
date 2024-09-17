import axios from "axios";

function popularCategory() {

    let popularCategoryWrapper__1 = document.querySelector(".popularCategoryWrapper__1");
    let popularCategoryWrapper__2 = document.querySelector(".popularCategoryWrapper__2");

    async function fetchProducts__1() {
        try {
            let res = await axios.get("http://localhost:3000/popularCategory__1");
            let products = res.data.map((item) =>{
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
            let res = await axios.get("http://localhost:3000/popularCategory__2");
            let products = res.data.map((item) =>{
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
export default popularCategory;