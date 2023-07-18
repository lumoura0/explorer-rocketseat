import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimer,
  buttonSoundOn,
  buttonSoundOff,
} from './elements.js';

import Sounds from './sounds.js';

const sounds = Sounds();

export default function ({ controls, timer }) {
  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countdown();
    sounds.pressButton();
  });

  buttonPause.addEventListener('click', () => {
    controls.pause();

    timer.pause();
    sounds.pressButton();
  });

  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.change();
    timer.pause();
    sounds.pressButton();
  });

  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sounds.lofi.play()
  });

  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
    sounds.lofi.pause()
  });

  buttonTimer.addEventListener('click', () => {
    sounds.pressButton();
    let input = controls.getInput();
    if (input) {
      timer.updateMinutes(input);
    }
  });
}
