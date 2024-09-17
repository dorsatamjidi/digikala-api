function supermarket() {
    function openSuperMarket() {
        let superMarket__activeButton = document.querySelector(".superMarket__activeButton");
        let superMarket__cover = document.querySelector(".superMarket__cover");
        let superMarket__container = document.querySelector(".superMarket__container");
        let superMarket__active = document.querySelector(".superMarket__active");
        let superMarket__closeButton = document.querySelector(".superMarket__closeButton");
        let scrollControl = document.querySelector(".scrollControl");

        superMarket__activeButton.addEventListener("click", function () {
            superMarket__cover.classList.remove("hidden");
            superMarket__cover.classList.add("block");
            superMarket__active.classList.remove("hidden");
            superMarket__active.classList.add("block");
            scrollControl.classList.add("overflow-hidden");
            setTimeout(function () {
                superMarket__active.classList.remove("mobile:translate-y-full");
                superMarket__active.classList.add("mobile:translate-y-0");
            }, 30)
        })

        superMarket__container.addEventListener("click", function () {
            superMarket__active.classList.add("mobile:translate-y-full");
            superMarket__active.classList.remove("mobile:translate-y-0");
            scrollControl.classList.remove("overflow-hidden");
            setTimeout(function () {
                superMarket__cover.classList.remove("block");
                superMarket__cover.classList.add("hidden");
                superMarket__active.classList.remove("block");
                superMarket__active.classList.add("hidden");

            }, 200)
        })

        superMarket__closeButton.addEventListener("click", function () {
            superMarket__active.classList.add("mobile:translate-y-full");
            superMarket__active.classList.remove("mobile:translate-y-0");
            scrollControl.classList.remove("overflow-hidden");
            setTimeout(function () {
                superMarket__cover.classList.remove("block");
                superMarket__cover.classList.add("hidden");
                superMarket__active.classList.remove("block");
                superMarket__active.classList.add("hidden");

            }, 200)
        })
    }
    openSuperMarket();


    function scrollsuperMarket() {
        let superMarket__extratext = document.querySelector(".superMarket__extratext");
        let superMarket__width = document.querySelector(".superMarket__width");

        window.addEventListener("scroll", function () {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                superMarket__extratext.classList.remove("deskt:hidden");
                superMarket__extratext.classList.add("flex");
                superMarket__width.classList.remove("mobile:hidden");
                superMarket__width.classList.add("mobile:block");
                setTimeout(() => {
                    superMarket__width.classList.remove("mobile:translate-y-[500%]");
                }, 0);

            } else {
                superMarket__extratext.classList.add("deskt:hidden");
                superMarket__extratext.classList.remove("flex");
                superMarket__width.classList.add("mobile:translate-y-[500%]");
                setTimeout(() => {
                    superMarket__width.classList.remove("mobile:block");
                    superMarket__width.classList.add("mobile:hidden");
                }, 0);
            }
        })
    }
    scrollsuperMarket();

}

export default supermarket;