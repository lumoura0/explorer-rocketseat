import { buttonPlus, buttonMinus, buttonPause, buttonPlay } from './elements.js';

export function Controls() {
  function disableOrEnableButton(plus, minus) {
    buttonPlus.disabled = plus;
    buttonMinus.disabled = minus;
  }

  function resetControls() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
    disableOrEnableButton(false, false);
  }

  function playPause() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
  }

  return {
    resetControls,
    disableOrEnableButton,
    playPause
  }
}
