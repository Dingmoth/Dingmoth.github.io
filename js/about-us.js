const el = (sel, par) => (par || document).querySelector(sel);
const els = (sel, par) => (par || document).querySelectorAll(sel);
const elNew = (tag, prop) => Object.assign(document.createElement(tag), prop);


const mod = (n, m) => (n % m + m) % m;


const carousel = (elementCarousel) => {
    const animation = 500;

    const elementCarouselSlider = el(".review-slider", elementCarousel);
    const elementsSlides = els(".review-slide", elementCarouselSlider);
    console.log(elementCarouselSlider);
    console.log(elementsSlides);
    

    let total = elementsSlides.length;
    let c = 0;

    const anim = (ms = animation) => {
        const cMod = mod(c, total);

        elementCarouselSlider.style.transitionDuration = `${ms}ms`;
        elementCarouselSlider.style.transform = `translateX(${(-c - 1)* 100}%)`;

        elementsSlides.forEach((elementSlide, i) => elementSlide.classList.toggle("is-active", cMod === i));
    };

    const prev = () => {
        if (c <= -1) return;
        c -= 1;
        anim();
    };

    const next = () => {
        if (c >= total) return;
        c+= 1;
        anim();
    };


    /////////Below is code for an interval, should be commented if no interval is needed or wanted/////////
    // const pause = 5000;
    // let interval;

    // const play = () => {
    //     interval = setInterval(next, pause + animation);
    // };

    // const stop = () => {
    //     clearInterval(interval);
    // };
    // elementCarousel.addEventListener("pointerenter", () => stop());
    // elementCarousel.addEventListener("pointerleave", () => play());

    // play();
    /////////Interval code stops here/////////


    const elementPrevious = elNew("button", {
        type: "button",
        className: "review-prev",
        innerHTML: "<img src='/img/icons/left-arrow.svg'>",
        onclick: () => next(),
    })

    const elementNext = elNew("button", {
        type: "button",
        className: "review-next",
        innerHTML: "<img src='/img/icons/right-arrow.svg'>",
        onclick: () => prev(),
    });


    elementCarouselSlider.addEventListener("transitionend", () => {
        console.log("active");
        if (c <= -1) c = total - 1;
        if (c >= total) c = 0;
        anim(0); // quickly switch to "c" slide (with animation duration 0)
      });


    document.querySelector('.btn-container').append(elementPrevious, elementNext);

    elementCarouselSlider.prepend(elementsSlides[total - 1].cloneNode(true));
    elementCarouselSlider.append(elementsSlides[0].cloneNode(true));

    anim();
};

const review = document.querySelector('.review');
console.log(review);
carousel(review);