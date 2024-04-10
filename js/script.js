const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");

if (openButton) {
    openButton.addEventListener("click", (event) => {
        const modal = event.target.parentElement.parentElement.parentElement.querySelectorAll(".modal")[0];
        modal.style.display = "flex";
    });
    closeButton.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.style.display = "none";
    });
}
