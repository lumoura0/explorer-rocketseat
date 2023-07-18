import {
  buttonPlus,
  buttonMinus,
  buttonPlay,
  buttonPause,
  buttonStop,
  cardForest,
  cardRain,
  cardMarketplace,
  cardFire,
  sliders,
  buttonDarkMode,
  buttonLightMode
} from './elements.js';

import { Sounds } from './sounds.js';
import { changeTheme } from './theme.js';

const sounds = Sounds();

export function Events({ timer, controls }) {
  buttonPlus.addEventListener('click', () => {
    timer.incrementFiveMinutes();
    sounds.sounds.clickButtons.play();
  });

  buttonMinus.addEventListener('click', () => {
    timer.decrementFiveMinutes();
    sounds.sounds.clickButtons.play();
  });

  buttonPlay.addEventListener('click', () => {
    controls.playPause();
    controls.disableOrEnableButton(true, true);
    timer.countdown();
    sounds.sounds.clickButtons.play();
  });

  buttonPause.addEventListener('click', () => {
    controls.playPause();
    controls.disableOrEnableButton(false, false);
    timer.pause();
    sounds.sounds.clickButtons.play();
  });

  buttonStop.addEventListener('click', () => {
    controls.resetControls();
    timer.pause();
    timer.reset();
    sounds.sounds.clickButtons.play();
  });

  sliders.forEach((slider) => {
    slider.addEventListener('input', () => {
      const audio = slider.previousElementSibling.id;
      const volume = Number(slider.value);
      sounds.setVolume(audio, volume);
    });
  });

  cardForest.addEventListener('click', sounds.handleSound);
  cardRain.addEventListener('click', sounds.handleSound);
  cardMarketplace.addEventListener('click', sounds.handleSound);
  cardFire.addEventListener('click', sounds.handleSound);

  buttonLightMode.addEventListener('click', changeTheme);
  buttonDarkMode.addEventListener('click', changeTheme);
}
