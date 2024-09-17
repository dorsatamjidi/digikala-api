function header() {
    let menuBar = document.querySelector(".menuBar");
    let previousScrollPosition = 0;

    window.addEventListener("scroll", function isScrollingDown() {
        let goingDown = false;
        let scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > previousScrollPosition) {
            goingDown = true;
        }

        previousScrollPosition = scrollPosition;

        function ScrollingManu() {
            if (goingDown === true) {
                menuBar.classList.add("translate-y-[-40px]");

            } else {
                menuBar.classList.remove("translate-y-[-40px]");


            }
        }
        ScrollingManu();
    })

    function megaMenuHover() {
        let megaMenu__button = document.querySelector(".megaMenu__button");
        let megaMenu__bg = document.querySelector(".megaMenu__bg");
        let scrollControl = document.querySelector(".scrollControl");

        megaMenu__button.addEventListener("mouseover", function () {
            megaMenu__bg.classList.remove("hidden");
            megaMenu__bg.classList.add("block");
            scrollControl.classList.add("overflow-hidden");
        })

        megaMenu__button.addEventListener("mouseout", function () {
            megaMenu__bg.classList.add("hidden");
            megaMenu__bg.classList.remove("block");
            scrollControl.classList.remove("overflow-hidden");
        })
    }
    megaMenuHover();

}
export default header;