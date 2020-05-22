export default () => {
  const header = document.querySelector('.header');

  const stickyHeader = () => {
    if (window.pageYOffset > 10) {
      header.classList.add('header--sticky');
    }
    if (window.pageYOffset < 10) {
      header.classList.remove('header--sticky');
    }
  };

  window.addEventListener('scroll', stickyHeader);
};