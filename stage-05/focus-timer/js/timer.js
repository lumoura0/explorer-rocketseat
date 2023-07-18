import Sounds from './sounds.js';

const sounds = Sounds();

export default function Timer({
  minutesDysplay,
  secondsDysplay,
  resetControls,
}) {
  let timer;
  let input = Number(minutesDysplay.textContent);

  function countdown() {
    timer = setTimeout(() => {
      let minutes = Number(minutesDysplay.textContent);
      let seconds = Number(secondsDysplay.textContent);

      if (minutes == 0 && seconds == 0) {
        resetControls();
        change(input, 0);
        sounds.timerEnd.play();
        return;
      }

      if (seconds == 0) {
        seconds = 60;

        minutesDysplay.textContent = String(minutes - 1).padStart(2, '0');
        change(--minutes, 0);
      }

      change(minutes, --seconds);

      countdown();
    }, 1000);
  }

  function change(minutes = input, seconds = 0) {
    minutesDysplay.textContent = String(minutes).padStart(2, '0');
    secondsDysplay.textContent = String(seconds).padStart(2, '0');
  }

  function pause() {
    clearInterval(timer);
  }

  function updateMinutes(newMinutes) {
    input = newMinutes;
    change(input, 0);
  }

  return {
    countdown,
    change,
    pause,
    updateMinutes,
  };
}
