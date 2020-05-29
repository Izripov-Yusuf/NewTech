export default () => {
  const upArrow = document.querySelector('.top');

  if (upArrow) {
    upArrow.style.display = 'none';

    const scrollToNext = () => {
      if (window.pageYOffset > 100) {
        upArrow.style.display = 'block';
      } else if (window.pageYOffset < 100) {
        upArrow.style.display = 'none';
      }
    };
    scrollToNext();

    window.addEventListener('scroll', scrollToNext);
  }
};