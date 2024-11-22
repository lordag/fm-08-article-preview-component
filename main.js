
let social_elem = document.querySelector(".social");

const toogleElems = () => {
    social_elem.classList.toggle("hide");
}

document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("click", toogleElems);
});
