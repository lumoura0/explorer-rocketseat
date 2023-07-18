const input = document.getElementById('number');
const btnTry = document.querySelector('.wrapper-input > button');
const btnPlayAgain = document.querySelector('#screen2 > button');

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');

const max = 10;
const min = 0;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
input.focus();

function resetInput() {
  input.value = '';
  input.focus();
}

function handleInput() {
  let number = input.value;
  if (!number) {
    resetInput();
    return alert('informe um número');
  }

  number = Math.round(Number(number));

  if (number < 0 || number > 10) {
    resetInput();
    return alert('Número inválido');
  }

  attempts++;
  if (number !== random) {
    resetInput();
    document.body.style.animationPlayState = 'running';

    btnTry.disabled = true;
    btnTry.style.opacity = 0.5;

    setTimeout(() => {
      document.body.style.animationPlayState = 'paused';
      btnTry.disabled = false;
      btnTry.style.opacity = 1;
    }, 1400);
  } else {
    toggleScreen();
    document.querySelector(
      'h2'
    ).textContent = `Acertou em ${attempts} tentativa${
      attempts === 1 ? '' : 's'
    }!`;
  }
}

function playAgain() {
  random = Math.floor(Math.random() * (max - min + 1)) + min;
  toggleScreen();
  resetInput();
  attempts = 0;
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

btnTry.addEventListener('click', handleInput);
btnPlayAgain.addEventListener('click', playAgain);

window.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key == 'Enter') {
    document.querySelector('button:not(.hide button)').click();
  }
});
