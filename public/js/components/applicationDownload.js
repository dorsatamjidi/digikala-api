function applicationDownload() {
    let applicationDownload = document.querySelector(".applicationDownload");
    let applicationDownload__closeButton = document.querySelector(".applicationDownload__closeButton");
    let applicationDownload__activeButton = document.querySelector(".applicationDownload__activeButton");
    let applicationDownload__container = document.querySelector(".applicationDownload__container");
    let applicationDownload__active = document.querySelector(".applicationDownload__active");
    let applicationDownload__active__closeButton = document.querySelector(".applicationDownload__active__closeButton");
    let scrollControl = document.querySelector(".scrollControl");

    applicationDownload__closeButton.addEventListener("click", function () {
        applicationDownload.classList.remove("mobile:block")
        applicationDownload.classList.add("hidden");
    })

    applicationDownload__activeButton.addEventListener("click", function () {
        applicationDownload__container.classList.add("mobile:block");
        applicationDownload__container.classList.remove("mobile:hidden");
        applicationDownload__active.classList.add("mobile:block");
        applicationDownload__active.classList.remove("mobile:hidden");
        scrollControl.classList.add("overflow-hidden");
        setTimeout(function () {
            applicationDownload__active.classList.add("translate-y-0");
            applicationDownload__active.classList.remove("translate-y-full");
        }, 30)

    })

    applicationDownload__container.addEventListener("click", function () {
        applicationDownload__active.classList.remove("translate-y-0");
        applicationDownload__active.classList.add("translate-y-full");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            applicationDownload__container.classList.remove("mobile:block");
            applicationDownload__container.classList.add("mobile:hidden");
            applicationDownload__active.classList.remove("mobile:block");
            applicationDownload__active.classList.add("mobile:hidden");
        }, 300)
    })

    applicationDownload__active__closeButton.addEventListener("click", function () {
        applicationDownload__active.classList.remove("translate-y-0");
        applicationDownload__active.classList.add("translate-y-full");
        scrollControl.classList.remove("overflow-hidden");
        setTimeout(function () {
            applicationDownload__container.classList.remove("mobile:block");
            applicationDownload__container.classList.add("mobile:hidden");
            applicationDownload__active.classList.remove("mobile:block");
            applicationDownload__active.classList.add("mobile:hidden");
        }, 300)
    })
}

export default applicationDownload;