function contactUs() {
    let contactUs__activeButton = document.querySelector(".contactUs__activeButton");
    let contactUs__active = document.querySelector(".contactUs__active");
    let contactUs__closeButton = document.querySelector(".contactUs__closeButton");
    let contactUs__icon = document.querySelector(".contactUs__icon");
    let flag = true;

    contactUs__activeButton.addEventListener("click", function () {
        if (flag === true) {
            contactUs__active.classList.remove("hidden");
            contactUs__icon.innerHTML = `<svg style="width: 24px; height: 24px; fill: #fff;">
                <path fill-rule="evenodd" d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z" clip-rule="evenodd"></path>
              </svg>`;
            flag = false;
        }
        else {
            contactUs__active.classList.add("hidden");
            contactUs__icon.innerHTML = `<svg style="width: 24px; height: 24px; fill: #fff;">
                <path fill-rule="evenodd"
                  d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
                  clip-rule="evenodd"></path>
              </svg>`;
            flag = true;
        }

    })

    contactUs__closeButton.addEventListener("click", function () {
        contactUs__active.classList.add("hidden");
        contactUs__icon.innerHTML = `<svg style="width: 24px; height: 24px; fill: #fff;">
                <path fill-rule="evenodd"
                  d="M18 17a4.001 4.001 0 01-3.14 3.907A3 3 0 1012 23h2a6 6 0 006-6v-.256a4.502 4.502 0 000-8.488V7a6 6 0 00-6-6h-4a6 6 0 00-6 6v1.256A4.502 4.502 0 005.5 17H7a1 1 0 001-1V9a1 1 0 00-1-1H6V7a4 4 0 014-4h4a4 4 0 014 4v1h-1a1 1 0 00-1 1v7a1 1 0 001 1h1zm.5-2H18v-5h.5a2.5 2.5 0 010 5zM6 10h-.5a2.5 2.5 0 000 5H6v-5zm7 10a1 1 0 11-2 0 1 1 0 012 0z"
                  clip-rule="evenodd"></path>
              </svg>`;
        flag = true;
    })
}
export default contactUs;