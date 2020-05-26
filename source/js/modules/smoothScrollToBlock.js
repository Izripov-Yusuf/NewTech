// Плавное перемещение по якорям
const smoothScrollToBlock = () => {

  const menuAnchors = document.querySelectorAll('a[href^="#"]');
        //console.log('footerMenuAnchors: ', footerMenuAnchors);
  console.log('menuAnchors: ', menuAnchors);

  for (let anchor of menuAnchors) {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};
export default smoothScrollToBlock;