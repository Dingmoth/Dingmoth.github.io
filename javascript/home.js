function scrollDown() {
    document.querySelector(".what-we-do").scrollIntoView(true);
}

let animation = bodymovin.loadAnimation({
    container: document.getElementById('amnium-load'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/javascript/amniumloading.json',
});

function stopAmniumAnimation() {
    document.getElementById('hiding').removeAttribute('id');
    document.getElementById('amnium-load').remove();
    sessionStorage.setItem('intro', 'played');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            };
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
};

if(sessionStorage.getItem('intro') == 'played'){
    stopAmniumAnimation();
    console.log('work');
} else {
    setTimeout(stopAmniumAnimation, "4500");
}