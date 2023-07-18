export default function Controls({
  buttonPause,
  buttonStop,
  buttonPlay,
  buttonTimer,
}) {
  function reset() {
    buttonStop.classList.add('hide');
    buttonTimer.classList.remove('hide');

    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
  }

  function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

    buttonTimer.classList.add('hide');
    buttonStop.classList.remove('hide');
  }

  function pause() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function getInput() {
    let input = Number(prompt('Quantos minutos?'));

    if (!input) {
      return false;
    }
    return input;
  }

  return {
    play,
    reset,
    pause,
    getInput,
  };
}
