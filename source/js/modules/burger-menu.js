export default () => {
  const burger = document.querySelector('.header-burger'),
        spanBurger = burger.querySelector('.burger'),
        headerMobile = document.querySelector('.header--mobile'),
        headerClose = document.querySelector('.header--mobile-close'),
        headerMobileLinks = headerMobile.querySelectorAll('a'),
        body = document.querySelector('body');

  const handlerMenu = () => {
    headerMobile.classList.toggle('header--mobile-active');
  };

  const scrollToBlock = (index) => {
    for (let i = 0; i < headerMobileLinks.length; i++) {
      if (index === i) {
        handlerMenu();
      }
    }
  };

  body.addEventListener('click', (event) => {
    let target = event.target,
    parent = target.parentNode;

    if (target === burger || target === spanBurger) {
      handlerMenu();
    }
    if (target === headerClose) {
      handlerMenu();
    } else if (parent.tagName === 'LI') {
      headerMobileLinks.forEach((item, i) => {
        if (item === target) {
          scrollToBlock(i);
        }
      });
    }
  });
};