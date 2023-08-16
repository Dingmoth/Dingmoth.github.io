$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
function shouldItPlay() {  
    if(sessionStorage.getItem('animPlayed') != 'true'){
        var animation = bodymovin.loadAnimation({
            container: document.getElementById('cover'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '/js/amniumloading.json'
        })

        const vodoo = document.querySelectorAll('.voodoo');
        const links = document.querySelectorAll('a');
        setTimeout(() => {
            const bm = document.getElementById('cover');
            document.querySelector('body').classList.remove('hiden');
            bm.style.display = 'none';
            vodoo.forEach(element => {
                element.style.opacity = '1';
            });
        }, 4200);
        setTimeout(() =>{
            vodoo.forEach(element => {
                element.classList.remove('voodoo');
            });
            document.querySelector('html').classList.remove('noCursor');
            document.querySelector('button').classList.remove('noCursor');
            links.forEach(aTag => {
                aTag.classList.remove('noCursor');
            });
        }, 4700);
        sessionStorage.setItem('animPlayed', 'true')
    } else {
        const vodoo = document.querySelectorAll('.voodoo');
        const links = document.querySelectorAll('a');
        const bm = document.getElementById('cover');
        document.querySelector('body').classList.remove('hiden');
        bm.style.display = 'none';
        vodoo.forEach(element => {
            element.style.opacity = '1';
        });
        vodoo.forEach(element => {
            element.classList.remove('voodoo');
        });
        document.querySelector('html').classList.remove('noCursor');
        document.querySelector('button').classList.remove('noCursor');
        links.forEach(aTag => {
            aTag.classList.remove('noCursor');
        });
    }
};

shouldItPlay();


const specialties = document.querySelectorAll(".specialties");
const specialtiesShown = document.querySelectorAll(".specialtiesShown");


const showSpecialties = function (i, vert) {
    if (specialtiesShown[i].offsetHeight >= 100) {
        specialtiesShown[i].style.height = "0px";
        specialties[i].querySelector("i").style.transform = "rotate(-180deg)";
    } else {
        specialties.forEach(element => {
            element.querySelector("i").style.transform = "rotate(-180deg)";
        });
        specialtiesShown.forEach(element => {
            element.style.height = "0px";
        });
        specialties[i].querySelector("i").style.transform = "rotate(0deg)";
        specialtiesShown[i].style.height = `${vert}px`;
    }
};
  
specialties[0].addEventListener("click", function() {
    if ($(window).width() < 550) {
        showSpecialties(0, 270);
    }   else {
    showSpecialties(0, 215);
    }
});
specialties[1].addEventListener("click", function() {
    if ($(window).width() < 550) {
        showSpecialties(1, 370);
    }   else {
    showSpecialties(1, 300);
    }
});
specialties[2].addEventListener("click", function() {
    if ($(window).width() < 550) {
        showSpecialties(2, 418);
    }   else {
    showSpecialties(2, 325);
    }
});
specialties[3].addEventListener("click", function() {
    if ($(window).width() < 550) {
        showSpecialties(3, 490);
    }   else {
    showSpecialties(3, 380);
    }
});



let mouseCursor = document.querySelector("#mousePlay");
let videoEl = document.querySelector("video");

videoEl.addEventListener('DOMContentLoaded', cursor);
videoEl.addEventListener('mousemove', cursor);
videoEl.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
videoEl.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      jQuery('#mousePlay').remove();
    } else {
      mouseCursor.style.display = 'none';
    }

function cursor(e){

    mouseCursor.style.top = "calc(" +e.clientY + "px - 1rem)";
    mouseCursor.style.left = "calc(" +e.clientX + "px - 1rem)";
}

let vid = document.querySelector("video");
let ytLink = document.getElementById("youtubeLink");

async function fullLanguageChange() {
    let requestURL = `https://github.com/Dingmoth/Dingmoth.github.io/blob/master/languages/index${language}.json`;
    let request = new Request(requestURL);
    let response = await fetch(request);
    let slogan = await response.json();
    let sloganLength = Object.keys(slogan);
    let index = 0;


    sloganLength.forEach((element) => {
        document.getElementsByClassName("testerLanguage")[index].innerHTML = slogan[element];
        index++;
    })
}

const changeLanguage = () => {
    if (language === 'LT'){
        ytLink.href = "https://www.youtube.com/watch?v=YejE9UHrgto&ab_channel=AmniumDigital"
        vid.src = "/img/LT versija.mp4";
        fullLanguageChange()
    } else {
        ytLink.href = "https://www.youtube.com/watch?v=gBFSBts7xYA&ab_channel=AmniumDigital"
        vid.src = "/img/EN VERSIJA.mp4";
        fullLanguageChange()
    }
}

if (sessionStorage.getItem('lang') == 'LT') {
    language = 'LT';
    changeLanguage();
};