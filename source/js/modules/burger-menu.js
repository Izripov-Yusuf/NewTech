export default () => {
  const burger = document.querySelector('.header-burger'),
        headerMobile = document.querySelector('.header--mobile'),
        headerClose = document.querySelector('.header--mobile-close');

  burger.addEventListener('click', () => {
    headerMobile.classList.add('header--mobile-active');
  });

  headerClose.addEventListener('click', () => {
    headerMobile.classList.remove('header--mobile-active');
  });
};