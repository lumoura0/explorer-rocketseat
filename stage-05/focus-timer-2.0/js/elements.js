const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

const buttonPlay = document.querySelector('#buttonPlay');
const buttonPause = document.querySelector('#buttonPause');
const buttonStop = document.querySelector('#buttonStop');
const buttonPlus = document.querySelector('#buttonPlus');
const buttonMinus = document.querySelector('#buttonMinus');

const cardForest = document.querySelector('#forest');
const cardRain = document.querySelector('#rain');
const cardMarketplace = document.querySelector('#marketplace');
const cardFire = document.querySelector('#fire');

const sliders = document.querySelectorAll('.card input');

const buttonLightMode = document.querySelector('header button:first-child');
const buttonDarkMode = document.querySelector('header button:last-child');

export {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardForest,
  cardRain,
  cardMarketplace,
  cardFire,
  sliders,
  buttonLightMode,
  buttonDarkMode
};
