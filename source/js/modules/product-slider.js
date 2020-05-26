/* import Slick from '../lib/slick.min.js'; */

export default () => {
  $('.slider-for').slick({
    asNavFor: '.slider-nav',
    arrows: false,
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 0,
    nextArrow: $('.slider-button-next'),
    prevArrow: $('.slider-button-prev'),
    asNavFor: '.slider-for',
    dots: true,
    appendDots: $('.slider-pagination'),
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });

  $('.video-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    centerPadding: 0,
    nextArrow: $('.video-slider-next'),
    prevArrow: $('.video-slider-prev'),
    dots: false,
    centerMode: true,
    //focusOnSelect: true,
  });
};