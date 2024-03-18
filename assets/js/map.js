/*     Yandex map        */


ymaps.ready(init);

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl']
    });
}

// ymaps.ready(init);

// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 10,
//         controls: ['zoomControl','geolocationControl']
//     });

//     var myPlacemark = new ymaps.Placemark([56.31,44.01],{} , {
//         iconImageSize : [32, 40]
//     })

//     myMap.balloon.open([51,85, 38,37], 'Содержание балуна', {
//         closeButton: false
//     })

//     myMap.geoObjects.add(myPlacemark);
// }
