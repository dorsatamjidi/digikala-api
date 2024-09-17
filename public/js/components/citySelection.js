function citySelection() {
    let citySelection = document.querySelector(".citySelection");
    let citySelection__hover = document.querySelector(".citySelection__hover");
    let citySelection__active = document.querySelector(".citySelection__active");
    let citySelection__container = document.querySelector(".citySelection__container");
    let citySelection__closeButton = document.querySelector(".citySelection__closeButton");
    let scrollControl = document.querySelector(".scrollControl");
    

    citySelection.addEventListener("mouseover", function () {
        citySelection__hover.classList.remove("hidden");
        citySelection__hover.classList.add("block");
    });
    citySelection.addEventListener("mouseout", function () {
        citySelection__hover.classList.remove("block");
        citySelection__hover.classList.add("hidden");
    });

    
    citySelection.addEventListener("click",function () {
        citySelection__active.classList.remove("hidden");
        citySelection__active.classList.add("block");
        scrollControl.classList.add("overflow-hidden"); 
    })
    citySelection__container.addEventListener("click",function () {
        citySelection__active.classList.remove("block");
        citySelection__active.classList.add("hidden");
        scrollControl.classList.remove("overflow-hidden");  
    })
    citySelection__closeButton.addEventListener("click",function () {
        citySelection__active.classList.remove("block");
        citySelection__active.classList.add("hidden");
        scrollControl.classList.remove("overflow-hidden");  
    })
}

export default citySelection;
