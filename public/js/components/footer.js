function footer() {
    function backToTop() {
        let backToTop = document.querySelector(".backToTop");

        backToTop.addEventListener("click", function () {
            document.documentElement.scrollTop = 0;
        })
    }
    backToTop();

    function growingCaptin() {
        let grow = document.querySelector(".grow");
        let grow__button = document.querySelector(".grow__button");
        let flag = true;

        grow__button.addEventListener("click", function () {
            grow.classList.toggle("h-[125px]");

            if (flag === true) {
                grow__button.innerHTML = `<span class="text-[12px] text-[#19bfd3] font-[iranYekanBold]">بستن</span>
                    <svg style="width: 18px; height: 18px; fill: #19bfd3; scale: 0.7; margin-bottom: 3px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>`;
                flag = false;
            } else {
                grow__button.innerHTML = `<span class="text-[12px] text-[#19bfd3] font-[iranYekanBold]">مشاهده بیشتر</span>
                    <svg style="width: 18px; height: 18px; fill: #19bfd3; scale: 0.7; margin-bottom: 3px;"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></svg>`;
                flag = true;
            }
        })
    }
    growingCaptin();


    function growingAccessibility__1() {
        let growingAccessibility__1 = document.querySelector(".growingAccessibility__1");
        let growingAccessibility__button__1 = document.querySelector(".growingAccessibility__button__1");
        let growingAccessibility__content__1 = document.querySelector(".growingAccessibility__content__1")
        let flag = true;

        growingAccessibility__button__1.addEventListener("click", function () {
            growingAccessibility__1.classList.toggle("h-[52px]");

            if (flag === true) {
                growingAccessibility__content__1.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1; margin-left: -4px;"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></svg>`;
                flag = false;
            } else {
                growingAccessibility__content__1.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1.3;">
                        <path
                          d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z">
                        </path>`;
                flag = true;
            }
        })
    }
    growingAccessibility__1();


    function growingAccessibility__2() {
        let growingAccessibility__2 = document.querySelector(".growingAccessibility__2");
        let growingAccessibility__button__2 = document.querySelector(".growingAccessibility__button__2");
        let growingAccessibility__content__2 = document.querySelector(".growingAccessibility__content__2")
        let flag = true;

        growingAccessibility__button__2.addEventListener("click", function () {
            growingAccessibility__2.classList.toggle("h-[52px]");

            if (flag === true) {
                growingAccessibility__content__2.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1; margin-left: -4px;"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></svg>`;
                flag = false;
            } else {
                growingAccessibility__content__2.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1.3;">
                        <path
                          d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z">
                        </path>`;
                flag = true;
            }
        })
    }
    growingAccessibility__2();


    function growingAccessibility__3() {
        let growingAccessibility__3 = document.querySelector(".growingAccessibility__3");
        let growingAccessibility__button__3 = document.querySelector(".growingAccessibility__button__3");
        let growingAccessibility__content__3 = document.querySelector(".growingAccessibility__content__3")
        let flag = true;

        growingAccessibility__button__3.addEventListener("click", function () {
            growingAccessibility__3.classList.toggle("h-[52px]");

            if (flag === true) {
                growingAccessibility__content__3.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1; margin-left: -4px;"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></svg>`;
                flag = false;
            } else {
                growingAccessibility__content__3.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1.3;">
                        <path
                          d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z">
                        </path>`;
                flag = true;
            }
        })
    }
    growingAccessibility__3();


    function growingAccessibility__4() {
        let growingAccessibility__4 = document.querySelector(".growingAccessibility__4");
        let growingAccessibility__button__4 = document.querySelector(".growingAccessibility__button__4");
        let growingAccessibility__content__4 = document.querySelector(".growingAccessibility__content__4")
        let flag = true;

        growingAccessibility__button__4.addEventListener("click", function () {
            growingAccessibility__4.classList.toggle("h-[52px]");

            if (flag === true) {
                growingAccessibility__content__4.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1; margin-left: -4px;"><path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path></svg>`;
                flag = false;
            } else {
                growingAccessibility__content__4.innerHTML = `<svg style="width: 24px; height: 24px; fill: #424750; scale: 1.3;">
                        <path
                          d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z">
                        </path>`;
                flag = true;
            }
        })
    }
    growingAccessibility__4();


    
}

export default footer;