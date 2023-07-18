const btnCalc = document.querySelector('form > button');

export const AlertError = {
  element: document.querySelector('#errorMessage'),
  open() {
    AlertError.element.classList.remove('hide');

    btnCalc.disabled = true;
    btnCalc.style.opacity = 0.5;

    setTimeout(() => {
      AlertError.element.style.animation =
        'scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both';
      setTimeout(() => {
        AlertError.element.classList.add('hide');
        AlertError.element.style.animation =
          'scale-in-ver-top 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both';
        btnCalc.disabled = false;
        btnCalc.style.opacity = 1;
      }, 500);
    }, 1500);
  },
};
