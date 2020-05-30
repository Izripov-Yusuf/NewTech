export default () => {
  const workingsWrap = document.querySelector('.workings-wrap');

  if (workingsWrap) {
    let workingsItem = workingsWrap.querySelectorAll('.workings-item');
    workingsWrap.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.workings-item');
      if (target) {
        if (target.classList.contains('workings-item-active')) {
          target.classList.remove('workings-item-active');
        } else {
          for (let i = 0; i < workingsItem.length; i++) {
            if (target === workingsItem[i]) {
              workingsItem[i].classList.add('workings-item-active');
            } else {
              workingsItem[i].classList.remove('workings-item-active');
            }
          }
        }
      }
    });
  }
};