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
    adaptiveHeight: true
    //focusOnSelect: true,
  });

  let modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal-block__close');

  $('#contact-form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      usertel: {
        required: true
      },
      useremail: {
        required: true,
        email: true
      },
    },
    messages: {
      username: {
        required: "Заполните поле",
        maxlength: jQuery.validator.format("Не больше 15 символов"),
        minlength: jQuery.validator.format("Осталось символов: {0}")
      },
      usertel: {
        required: "Заполните поле"
      },
      useremail: {
        required: "Заполните поле",
        email: "Неправильный формат email"
      },
    },
    submitHandler: function () {
      event.preventDefault();
      modal.classList.add('modal--active');
      modal.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('modal-block__close') || target.classList.contains('modal--active')) {
          modal.classList.remove('modal--active');
        }
      });
      setTimeout(() => {
        modal.classList.remove('modal--active');
      }, 5000);
      $('#contact-form').trigger("reset");
    },
  });
};