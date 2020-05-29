// Плавное перемещение по якорям
const smoothScrollToBlock = () => {

  /* const menuAnchors = document.querySelectorAll('a[href^="#"]');

  for (let anchor of menuAnchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  } */

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 130
    }, 800);
  });
};
export default smoothScrollToBlock;