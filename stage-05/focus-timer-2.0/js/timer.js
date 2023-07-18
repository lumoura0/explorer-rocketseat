import { minutesDisplay, secondsDisplay } from './elements.js';

import { Sounds } from './sounds.js';

const sounds = Sounds();

let timeTimeout;
let userTimer = Number(minutesDisplay.textContent);

export function Timer({ resetControls, disableOrEnableButton }) {
  function countdown() {
    timeTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (seconds <= 0) {
        if (minutes <= 0 && seconds <= 0) {
          resetControls();
          reset();
          sounds.sounds.timerEnd.play();
          return;
        }
        change({ minutes: --minutes, seconds });

        seconds = 60;
      }

      change({ minutes, seconds: --seconds });
      countdown();
    }, 1000);
  }

  function reset() {
    change({ minutes: userTimer });
  }

  function pause() {
    clearTimeout(timeTimeout);
  }

  function change({ minutes, seconds = 0 }) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function incrementFiveMinutes() {
    if (userTimer < 60) {
      userTimer += 5;
      change({ minutes: userTimer });
      disableOrEnableButton(false, false);
      if (userTimer == 60) {
        disableOrEnableButton(true, false);
      }
    }
  }

  function decrementFiveMinutes() {
    if (userTimer > 0) {
      userTimer -= 5;
      change({ minutes: userTimer });

      disableOrEnableButton(false, false);
      if (userTimer == 0) {
        disableOrEnableButton(false, true);
      }
    }
  }

  return {
    countdown,
    pause,
    incrementFiveMinutes,
    decrementFiveMinutes,
    reset,
  };
}
