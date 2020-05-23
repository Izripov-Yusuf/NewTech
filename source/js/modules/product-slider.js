import Swiper from '../lib/swiper.min.js';

export default () => {
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 'auto',
    //freeMode: true,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    /* breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    } */
  });
  let galleryTop = new Swiper('.gallery-top', {
    loop: true,
    thumbs: {
      swiper: galleryThumbs
    },
  });
};