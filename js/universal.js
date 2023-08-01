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
// let vid = document.querySelector("video");
// let ytLink = document.getElementById("youtubeLink");

const ltButton = document.getElementById("lt");
const enButton = document.getElementById("en");


ltButton.addEventListener("click", function(){
    language = 'lt';
    sessionStorage.setItem('lang', 'LT');
    changeLanguage();
});
enButton.addEventListener("click", function(){
    language = 'en';
    sessionStorage.setItem('lang', 'EN');
    changeLanguage();
});


// const changeLanguage = () => {
//     if (language === 'lt'){
//         ytLink.href = "https://www.youtube.com/watch?v=YejE9UHrgto&ab_channel=AmniumDigital"
//         vid.src = "/img/LT versija.mp4"; 
//     } else {
//         ytLink.href = "https://www.youtube.com/watch?v=gBFSBts7xYA&ab_channel=AmniumDigital"
//         vid.src = "/img/EN VERSIJA.mp4";
//     }
// }

// if (sessionStorage.getItem('lang') == 'LT') {
//     language = 'lt';
//     changeLanguage();
// };

let whiteWords = document.querySelectorAll('.stayWhite');
let nightMode = document.getElementById('nightMode');
console.log(nightMode);
let colors = document.querySelectorAll('*');
nightMode.addEventListener("click", function(){
    console.log('works');
    if (sessionStorage.getItem('nightMode') == 'True') {
        sessionStorage.setItem('nightMode', 'False');
        colors.forEach(elem => {
            elem.style.color = '#000000';
        });
        whiteWords.forEach(elem => {
            elem.style.color = '#ffffff';
        });
        // for(let i=0;i<colors.length;i++){
        //     colors[i].style.color = '#000000';
        // };
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('#dropdown').style.backgroundColor = '#ffffff';
    } else {
        sessionStorage.setItem('nightMode', 'True');
        colors.forEach(elem => {
            elem.style.color = '#ffffff';
        });
        // for(let i=0;i<colors.length;i++){
        //     colors[i].style.color = '#ffffff';
        //   }
        document.querySelector('body').style.backgroundColor = '#000000'
        document.querySelector('#dropdown').style.backgroundColor = '#000000'
    }
});

