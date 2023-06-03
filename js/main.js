const wrappers = document.querySelectorAll(".accordion-item-wrapper");



wrappers.forEach((e) => {
    e.addEventListener("click", () => {
        console.log("helo");
    })
})