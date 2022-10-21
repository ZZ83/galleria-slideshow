if (document.querySelector(".open-button")) {
    document.querySelector(".open-button") .addEventListener("click", openModal);
    document.querySelector(".close-button").addEventListener("click", closeModal);
}

function openModal(event) {
    event.target
        .parentElement
        .parentElement
        .parentElement
        .lastElementChild
        .previousElementSibling
        .previousElementSibling.style.display = "flex";
}

function closeModal(event) {
    event.target
        .parentElement
        .parentElement.style.display = "none";
}



