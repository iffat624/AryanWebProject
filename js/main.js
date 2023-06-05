const wrappers = document.querySelectorAll(".accordion-item-handler"); 
const wrapperBodies = document.querySelectorAll(".acordion-body");
const accordionIcons = document.querySelectorAll(".accordion-icon");

const faqWrappers = document.querySelectorAll(".v6");
const faqAccordionBodyHandler = document.querySelectorAll(".faq-accordion-body-handler");
const faqAccordionBtn = document.querySelectorAll(".accordion-button");

// ------------------- Event Listeners for Accordion type 1 ------------------ //
wrappers.forEach((e,i) => {
    e.addEventListener("click", () => {
        let wrapperBody = wrapperBodies[i];
        let accordionIcon = accordionIcons[i];

        if (wrapperBody.classList.contains("accordion-body-closed") || wrapperBody.classList.contains("accordion-not-clicked")){
            wrapperBody.classList.remove("accordion-not-clicked");
            wrapperBody.classList.remove("accordion-body-closed");
            wrapperBody.classList.add("accordion-body-open")
            accordionIcon.style.transform = "rotate(180deg)";

            
        }
        else if(wrapperBody.classList.contains("accordion-body-open")){
            wrapperBody.classList.remove("accordion-body-open");
            wrapperBody.classList.add("accordion-body-closed")
            accordionIcon.style.transform = "rotate(0deg)";
        }
    })
})



// ------------------- Event Listeners for Accordion type 2 ------------------ //
faqWrappers.forEach((e, i) => {
    e.addEventListener("click", () => {
        let wrapperBody = faqAccordionBodyHandler[i];
        let accordionBtn = faqAccordionBtn[i];

        if (wrapperBody.classList.contains("accordion-body-closed") || wrapperBody.classList.contains("accordion-not-clicked")){
            wrapperBody.classList.remove("accordion-not-clicked");
            wrapperBody.classList.remove("accordion-body-closed");
            wrapperBody.classList.add("accordion-body-open")
            accordionBtn.style.transition = "all .5s ease-in-out"
            accordionBtn.style.background = "#c13438";
            accordionBtn.style.transform = "rotate(45deg)";

            
        }
        else if(wrapperBody.classList.contains("accordion-body-open")){
            wrapperBody.classList.remove("accordion-body-open");
            wrapperBody.classList.add("accordion-body-closed")
            accordionBtn.style.transition = "all .5s ease-in-out"
            accordionBtn.style.background = "#150d17"
            accordionBtn.style.transform = "rotate(0deg)";
        }
    })
})