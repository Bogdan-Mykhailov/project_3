const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    preventScrollOnTouch: 'auto',
    responsive: {
        320: {
            items: 1,
            nav: true,
        },
        575: {
            items: 1,
            nav: true,
        },
        767: {
            items: 1,
            nav: true,
        },
        991: {
            items: 1, 
            nav: true,        
        },
        1100: {
            nav: false,
        },
        
    }
});

document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
});