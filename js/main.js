const wrappers = document.querySelectorAll(".accordion-item-wrapper");
const wrapperBodies = document.querySelectorAll(".acordion-body");
const accordionIcons = document.querySelectorAll(".accordion-icon");

wrappers.forEach((e,i) => {
    e.addEventListener("click", () => {
        let wrapperBody = wrapperBodies[i];
        let accordionIcon = accordionIcons[i];
        if (wrapperBody.classList.contains("accordion-body-closed")){
            wrapperBody.classList.remove("accordion-body-closed");
            wrapperBody.classList.add("accordion-body-open")
            accordionIcon.style.transform = "rotate(180deg)";
        }
        else{
            wrapperBody.classList.remove("accordion-body-open");
            wrapperBody.classList.add("accordion-body-closed")
            accordionIcon.style.transform = "rotate(0deg)";
        }
    })
})