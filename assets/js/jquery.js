/*     Yandex map        */

/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

// ymaps.ready(init);

// function init(){
//     // Создание карты.
//     var myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 10,
//         controls: ['zoomControl']
//     });
// }

    $('.hamburger').on('click',function(){
        $('.head__menu').toggle();
        console.log('click');
    })    
