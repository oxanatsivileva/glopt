'use strict';

// Slider

$(document).ready(function(){
  $('.feed__slider').slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

  function validateForms(form) {
    $(form).validate({
       rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите не менее {0} символов!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  }

  validateForms('#consultation-form');
  validateForms('#questions-form');
  validateForms('#consultation form');

  $('input[name=phone]').mask("+7 (999) 999-9999");


  
  const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger__wrapper');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__wrapper_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__wrapper_active');
            menu.classList.toggle('header__menu_active');
        });
    });
  

});

