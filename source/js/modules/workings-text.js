export default () => {
  const workingsText = document.querySelectorAll('.workings-text'),
        workingsWrap = document.querySelector('.workings-wrap');

  const toggleWorkingsText = (index) => {
    for (let i = 0; i < workingsText.length; i++) {
      if (index === i) {
        workingsText[i].classList.add('workings-text-active');
      } else {
        workingsText[i].classList.remove('workings-text-active');
      }
    }
  };

  workingsWrap.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.workings-text');
    if (target) {
      workingsText.forEach((item, i) => {
        if (item === target) {
          toggleWorkingsText(i);
        }
      });
    }
    /* let workingsTextActive = document.querySelector('.workings-text-active');
    workingsTextActive.addEventListener('click', () => {
      if (target.classList.contains('workings-text-active')) {
        console.log(1);
        target.classList.remove('workings-text-active');
        console.log(2);
      }
    }); */
  });
};