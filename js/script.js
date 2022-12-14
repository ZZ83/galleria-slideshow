const openButton  = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");

if (openButton) {
    openButton.addEventListener("click", (event) => {
        event.target
        .parentElement
        .parentElement
        .parentElement
        .lastElementChild
        .previousElementSibling.style.display = "flex";
    });
    closeButton.addEventListener("click", (event) => {
        event.target
        .parentElement
        .parentElement.style.display = "none";
    });
}