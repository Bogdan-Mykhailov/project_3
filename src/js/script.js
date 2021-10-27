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



// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     controls: false,
//     nav: false,
//     responsive: {
//       640: {
//         edgePadding: 20,
//         gutter: 20,
//         items: 2
//       },
//       700: {
//         gutter: 30
//       },
//       900: {
//         items: 1   
//       }
//     }
    
//   });

