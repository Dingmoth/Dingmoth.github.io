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



let language = '';
let vid = document.querySelector("video");
let ytLink = document.getElementById("youtubeLink");

const ltButton = document.getElementById("lt");
const enButton = document.getElementById("en");



ltButton.addEventListener("click", function(){
    language = 'lt';
    changeLanguage();
});
enButton.addEventListener("click", function(){
    language = 'en';
    changeLanguage();
});


const changeLanguage = () => {
    // for (let key in languageContent[lang]) {
    //     document.getElementById(key).innerHTML = languageContent[lang][key];
    // }
    if (language === 'lt'){
        ytLink.href = "https://www.youtube.com/watch?v=YejE9UHrgto&ab_channel=AmniumDigital"
        vid.src = "/img/LT versija.mp4"; 
    } else {
        ytLink.href = "https://www.youtube.com/watch?v=gBFSBts7xYA&ab_channel=AmniumDigital"
        vid.src = "/img/EN VERSIJA.mp4";
    }
}



