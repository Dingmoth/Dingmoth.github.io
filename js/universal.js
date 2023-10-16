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

const ltButton = document.getElementById("lt");
const enButton = document.getElementById("en");

function langSwitch(selectedValue){
    let language = selectedValue.value;
    sessionStorage.setItem('lang', `${language}`);
    changeLanguage();
};

let whiteWords = document.querySelectorAll('.stayWhite');


let nightMode = document.getElementById('nightMode');
let colors = document.querySelectorAll('*');
nightMode.addEventListener("click", function(){
    if (sessionStorage.getItem('nightMode') === 'false') {
        sessionStorage.setItem('nightMode', 'true');
        colors.forEach(elem => {
            elem.style.color = '#ffffff';
        });
        document.querySelector('body').style.backgroundColor = '#000000';
        document.querySelector('#dropdown').style.backgroundColor = '#000000';
        document.querySelector('.logo').src = "/img/AmniumDarkMode.png";
        document.querySelector('.annoying').src = "/img/AmniumDarkMode.png";
        document.querySelector('select').style.backgroundColor = '#000000';
    } else {
        sessionStorage.setItem('nightMode', 'false');
        colors.forEach(elem => {
            elem.style.color = '#000000';
        });
        whiteWords.forEach(elem => {
            elem.style.color = '#ffffff';
        });
        document.querySelector('body').style.backgroundColor = '#ffffff';
        document.querySelector('#dropdown').style.backgroundColor = '#ffffff';
        document.querySelector('.logo').src = "/img/amnium_logo.png";
        document.querySelector('.annoying').src = "/img/amnium_logo.png";
        document.querySelector('select').style.backgroundColor = '#ffffff';
    }
});

if (sessionStorage.getItem('nightMode') === 'false') {
        colors.forEach(elem => {
            elem.style.color = '#000000';
        });
        whiteWords.forEach(elem => {
            elem.style.color = '#ffffff';
        });
        document.querySelector('body').style.backgroundColor = '#ffffff'
        document.querySelector('#dropdown').style.backgroundColor = '#ffffff'
        document.querySelector('.logo').src = "/img/amnium_logo.png";
        document.querySelector('.annoying').src = "/img/amnium_logo.png";
        document.querySelector('select').style.backgroundColor = '#ffffff';
}



//language

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

// function Func() {
// 	fetch("./indexLT.json")
// 		.then((res) => {
// 		return res.json();
// 	})
// 	.then((data) => console.log(data));
// }
// Func()

// async function LTlanguage() {
//     const requestURL = 'http://127.0.0.1:5500/js/indexLT.json';
//     const request = new Request(requestURL);
//     const response = await fetch(request);
//     const slogan = await response.json();
//     const sloganLength = Object.keys(slogan);
//     let index = 0;

//     sloganLength.forEach((element) => {
//         document.getElementsByClassName("testerLanguage")[index].innerHTML = slogan[element];
//         index++;
//     })
// }
// LTlanguage()
