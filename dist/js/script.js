'use strict';

$(document).ready(function(){
    $('.feed__slider').slick({
      infinite: true,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>'
    });
});

