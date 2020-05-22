import Swiper from '../lib/swiper.min.js';

export default () => {
  let galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 3,
    //freeMode: true,
    spaceBetween: 20,
    //watchSlidesVisibility: true,
    //watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let galleryTop = new Swiper('.gallery-top', {
    thumbs: {
      swiper: galleryThumbs
    }
  });
};