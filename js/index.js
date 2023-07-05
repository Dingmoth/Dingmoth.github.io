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
}, 4600);

