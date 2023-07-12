'use strict'

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");


const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

const language = document.getElementById("language");

const changeLanguage = function() {
    if (language.innerHTML = "English") {
        language.innerHTML = "Lithuanian/Lietuvių";
        document.querySelector("source").src = "/img/LT versija.mp4";
    } else if (language.innerText = "Lithuanian/Lietuvių") {
        console.log("works");
        language.innerText = "English";
        document.querySelector("source").src = "/img/EN VERSIJA.mp4";
    };
};

language.addEventListener("click", function() {
    console.log("works");
    changeLanguage();
});