
let social_elem = document.querySelector(".social");

const toogleElems = () => {
    social_elem.classList.toggle("hide");
}

document.querySelector(".icon").addEventListener("click", toogleElems);