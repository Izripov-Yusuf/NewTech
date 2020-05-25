export default () => {
  const workingsText = document.querySelectorAll('.workings-text'),
        workingsWrap = document.querySelector('.workings-wrap');

  workingsWrap.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.workings-text');
    if (target) {
      if (target.classList.contains('workings-text-active')) {
        target.classList.remove('workings-text-active');
      }
      else {
        for (let i = 0; i < workingsText.length; i++) {
          if (target === workingsText[i]) {
            workingsText[i].classList.add('workings-text-active');
          }
          else {
            workingsText[i].classList.remove('workings-text-active');
          }
        }
      }
    }
  });
};