(function ($)
  { "use strict"

    /* 1. Preloader  */

    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


    /* 2. Modal window   */

    function modalClose () {
      $('#modal-window').removeClass('active'); 
      $('#confirmation-window').removeClass('active');
      $('#wrapper-modal').removeClass('active');
    };

    $('#call-req').on('click', function () {
      $('#wrapper-modal').addClass('active');
      $('#modal-window').addClass('active');
    });

    $('.form-modal').children().on('click', function(e) {
      e.stopPropagation();
    });

    // $('#modal-btn').on('click', function() {
    //   $('#modal-window').removeClass('active');
    //   $('#confirmation-window').addClass('active');
    // });

    $('#wrapper-modal').click(function(event) {
      let item = event.target.id;
      if (item == 'overlay' || item == 'close-modal' || item == 'confirmation-btn' || item == 'confirmation-link') {
        modalClose();
      }
    });

    /* 3. Sticky And Scroll UP */

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $("main").removeClass("pt-127");
        $('#back-top').fadeOut(500);
      }
      else {
        $(".header-sticky").addClass("sticky-bar");
        $("main").addClass("pt-127");
        $('#back-top').fadeIn(500);
      }
    });

    /* 4. Top section slider */ 

    $('.slider-for').slick({
        arrows: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false
              }
            },
          ]
    });

    /* 5. Scroll to next section   */

    $("#slider-arrow").click(function() { // ID откуда кликаем
    $('html, body').animate({
        scrollTop: $(".collection").offset().top  // класс объекта к которому приезжаем
    }, 
    {
      duration: 1000,   // Скорость прокрутки
      easing: 'linear'
    }); 

    });

    /*   6.  Mobile menu    */

    $('.hamburger').on('click',function(){
        $('.head__menu').toggle();
    });    

    $('.form-modal').children().on('click', function(e) {
      e.stopPropagation();
    })

    $('.form-modal').children().on('click', function(e) {
      e.stopPropagation();
    })


    $('.confirmation').on('click',function(){
        $('.confirmation-done').removeClass('active');
        $('.confirmation-fail').removeClass('active');
    });    

    /* 6.  Validator   */

    $.validator.addMethod("regex", function(value, element, regexp) {
      var regExsp = new RegExp(regexp);
      return regExsp.test(value);
    },"Please check your input."
    );
    
    
    function checkValid(el){
    el.validate({
      rules: {
        name: {
            required: true,
            regex : "[A-Za-zАЯа-я]{1,32}"   
        },
        email: {
            required: true,
            regex : "[A-Za-z]@.{1,32}"   
        },
        phone: {
            // digits : true,
            required: true,
            minlength: 8,
            maxlength: 12,
            regex: "[0-9]+"
        }
      },
      messages: {
        name: "Имя введено не корректно",
        email: "email введен не корректно",
        phone: "Не правильный номер"
      },

      submitHandler: function(form){
        $('#preloader-activ').fadeIn();
        let $form = $(form);
        let $formId = $(form).attr('id');
        switch($formId){
          case 'form-contacts':
          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize()
          })
          .done(function (){
            $('.confirmation-done').addClass('active');
          })
          .fail(function (){
            $('.confirmation-fail').addClass('active');
            $form.trigger('reset');
          })
          .always(function (){
            setTimeout(function (){
              $form.trigger('reset')
            }, 1000)
            setTimeout(function (){
              $('#preloader-activ').fadeOut();
            }, 1400);
          });
          break;

          case 'form-modal':
          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize()
          })
          .done(function (){
            $('#modal-window').removeClass('active');
            $('#confirmation-window').addClass('active');
            console.log('Success');
          })
          .fail(function (){
            $form.trigger('reset');
            // console.log('Fail');
          })
          .always(function (){
            setTimeout(function (){
              $form.trigger('reset');
            }, 1000);
            setTimeout(function (){
              $('#preloader-activ').fadeOut();
            }, 1400);
          });
          break;
        }
      }
    });
  }
  $('form').each(function (){
    checkValid($(this));
  })

 
})(jQuery);


const sbtns    = document.getElementById('shop-btns');
const shopBtns = document.querySelectorAll('.shop-btn');

const pbtns    = document.getElementById('page-btns');
const pageBtns = document.querySelectorAll('.page-btn');

const itemsbtns = document.getElementById('size-btns');
const sizeBtns  = document.querySelectorAll('.item-size-btn');

const itemcbtns = document.getElementById('color-btns');
const colorBtns = document.querySelectorAll('.item-color-btn');

const changeColor = el => {
    for(let i = 0; i < itemcbtns.children.length; i++){
        itemcbtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < colorBtns.length; index++){
    colorBtns[index].addEventListener('click', e => {
        changeColor(e.target);
    })
}

const changeSize = el => {
    for(let i = 0; i < itemsbtns.children.length; i++){
        itemsbtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < sizeBtns.length; index++){
    sizeBtns[index].addEventListener('click', e => {
        changeSize(e.target);
    })
}

const changeActiveBtn = el => {
    for(let i = 0; i < sbtns.children.length; i++){
        sbtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < shopBtns.length; index++){
    shopBtns[index].addEventListener('click', e => {
        changeActiveBtn(e.target);
    })
}

const changeActivePage = el => {
    for(let i = 0; i < pbtns.children.length; i++){
        pbtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < pageBtns.length; index++){
    pageBtns[index].addEventListener('click', e => {
        changeActivePage(e.target);
    })
}

