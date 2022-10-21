const openButton  = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
console.log("Is the script running? Yes.");

if (openButton) {
    console.log("Is the script statement running? Yes.");
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
