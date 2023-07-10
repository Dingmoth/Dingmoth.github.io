$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

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

const specialties = document.querySelectorAll(".specialties");
const specialtiesShown = document.querySelectorAll(".specialtiesShown");


const showSpecialties = function (i) {
    if (specialtiesShown[i].offsetHeight >= 200) {
        specialtiesShown[i].style.height = "0px";
        specialties[i].querySelector("i").style.transform = "rotate(0deg)";
    } else {
        specialties.forEach(element => {
            element.querySelector("i").style.transform = "rotate(0deg)";
        });
        specialtiesShown.forEach(element => {
            element.style.height = "0px";
        });
        specialties[i].querySelector("i").style.transform = "rotate(-180deg)";
        specialtiesShown[i].style.height = "250px";
    }
};
specialties.forEach(element => {
    console.log(element);
});  

specialties[0].addEventListener("click", function() {
    showSpecialties(0);
});
specialties[1].addEventListener("click", function() {
    showSpecialties(1);
});
specialties[2].addEventListener("click", function() {
    showSpecialties(2);
});
specialties[3].addEventListener("click", function() {
    showSpecialties(3);
});